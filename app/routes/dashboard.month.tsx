import type { LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData, NavLink } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import type { HabitLog } from "@prisma/client";

import { db } from "~/utils/db.server";
import { getTextContrastColor } from "~/utils/utils";
import { getMonthMatrix } from "~/utils/calendar";
import { toLocalDayKey, fromLocalDayKey } from "~/utils/dateKey";

type HabitLogWithHabit = HabitLog & {
  habit: { name: string; color: string };
};

type LoaderData = {
  y: number;
  m: number;
  weeks: string[][];
  byDay: Record<string, HabitLogWithHabit[]>;
};

function toISO(d: Date) {
  return d.toISOString().slice(0, 10);
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const now = new Date();
  const y = Number(url.searchParams.get("y")) || now.getFullYear();
  const m = Number(url.searchParams.get("m")) ?? now.getMonth();

  const { weeks, first, last } = getMonthMatrix(y, m, 0);

  const logs = await db.habitLog.findMany({
    where: { date: { gte: first, lte: last } },
    orderBy: { date: "desc" },
    include: { habit: true },
  });

  const byDay: Record<string, HabitLogWithHabit[]> = {};
  for (const log of logs) {
    const k = toLocalDayKey(new Date(log.date));
    (byDay[k] ||= []).push(log as HabitLogWithHabit);
  }

  const isoWeeks = weeks.map((w) => w.map((d) => toLocalDayKey(d)));

  return {
    y,
    m,
    weeks: isoWeeks,
    byDay,
  };
};

export default function Month() {
  const { y, m, weeks, byDay } = useLoaderData<typeof loader>();

  const monthLabel = new Date(y, m, 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const prevY = m === 0 ? y - 1 : y;
  const prevM = (m + 11) % 12;
  const nextY = m === 11 ? y + 1 : y;
  const nextM = (m + 1) % 12;

  const [openId, setOpenId] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpenId(null);
      }
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <section className="w-full pb-10 px-2 text-gray-800 dark:text-gray-200">
      <header className="flex items-center justify-between max-w-5xl mx-auto pt-24 mb-3">
        <h2 className="text-3xl font-bold bg-linear-[90deg,#e11d48,#c026d3,#7c3aed,#0284c7,#16a34a,#eab308,#ea580c,#dc2626] text-transparent bg-clip-text">
          {monthLabel}
        </h2>
        <div className="flex gap-2">
          <Link
            to={`?y=${prevY}&m=${prevM}`}
            className="rounded-lg border px-3 py-1 hover:bg-white/5"
            aria-label="Previous month"
          >
            ‹
          </Link>
          <Link
            to={`?y=${nextY}&m=${nextM}`}
            className="rounded-lg border px-3 py-1 hover:bg-white/5"
            aria-label="Next month"
          >
            ›
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto">
        {/* weekday header */}
        <div className="grid grid-cols-7 text-center text-sm text-slate-400 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="pb-2 font-semibold">
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-3 auto-rows-fr">
          {weeks.flat().map((iso, idx) => {
            const date = fromLocalDayKey(iso);
            const inMonth = date.getMonth() === m;
            const isToday = new Date().toDateString() === date.toDateString();
            const logs = byDay[iso] || [];

            return (
              <article
                key={idx}
                className={[
                  "relative rounded-xl border p-2 flex flex-col gap-1",
                  inMonth
                    ? "border-slate-600 bg-slate-800"
                    : "border-slate-800 bg-slate-900/40",
                  isToday ? "ring-2 ring-fuchsia-500" : "",
                ].join(" ")}
              >
                <div
                  className={[
                    "text-sm font-semibold text-right",
                    inMonth ? "text-slate-200" : "text-slate-500",
                  ].join(" ")}
                >
                  {date.getDate()}
                </div>

                <div className="mt-1 flex flex-col gap-1">
                  {logs.slice(0, 4).map((log) => (
                    <button
                      key={log.id}
                      type="button"
                      className="truncate rounded-md px-2 py-1 text-xs font-medium text-left"
                      style={{
                        backgroundColor: log.habit.color,
                        color: getTextContrastColor(log.habit.color),
                      }}
                      onClick={() =>
                        setOpenId((cur) => (cur === log.id ? null : log.id))
                      }
                    >
                      <span
                        className="inline-block sm:hidden w-2 h-2 rounded-full"
                        style={{ backgroundColor: log.habit.color }}
                      />
                      <span className="hidden md:inline lg:hidden">
                        {log.habit.name}
                      </span>
                      <span className="hidden lg:inline">
                        {log.description}
                      </span>

                      {openId === log.id && log.description && (
                        <div
                          ref={modalRef}
                          className="absolute top-full left-1/2 -translate-x-1/2 z-20 mt-2 w-[260px] max-w-xs rounded-xl border border-slate-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 shadow-xl"
                        >
                          <p className="text-sm">{log.description}</p>
                        </div>
                      )}
                    </button>
                  ))}

                  {logs.length > 4 && (
                    <NavLink
                      to={`/dashboard/day?date=${iso}`}
                      className="text-xs text-sky-400"
                    >
                      +{logs.length - 4} more
                    </NavLink>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

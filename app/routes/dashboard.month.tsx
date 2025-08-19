import { getTextContrastColor } from "~/utils/utils";
import { db } from "../utils/db.server";
import { useLoaderData } from "@remix-run/react";
import { useState, useRef, useEffect } from "react";
import type { HabitLog } from "@prisma/client";

type HabitLogWithHabit = HabitLog & {
  habit: { name: string; color: string };
};

export const loader = async () => {
  const now = new Date();

  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  endOfMonth.setHours(23, 59, 59, 999);

  const habitLog = await db.habitLog.findMany({
    where: {
      date: {
        gte: startOfMonth,
        lte: endOfMonth,
      },
    },
    orderBy: { date: "desc" },
    include: { habit: true },
  });

  return habitLog;
};

function groupLogsByISODate(logs: HabitLogWithHabit[]) {
  const grouped: { [date: string]: HabitLogWithHabit[] } = {};

  for (const log of logs) {
    const iso = new Date(log.date).toISOString().split("T")[0]; // "2025-06-23"
    if (!grouped[iso]) grouped[iso] = [];
    grouped[iso].push(log);
  }

  return grouped;
}

function getMonthGrid(year: number, monthIndex: number) {
  const firstDay = new Date(year, monthIndex, 1);
  const lastDay = new Date(year, monthIndex + 1, 0);

  const startDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  const calendarCells: (Date | null)[] = [];

  for (let i = 0; i < startDay; i++) {
    calendarCells.push(null);
  }

  for (let day = 1; day <= totalDays; day++) {
    calendarCells.push(new Date(year, monthIndex, day));
  }

  while (calendarCells.length < 42) {
    calendarCells.push(null);
  }

  return calendarCells;
}

export default function Month() {
  const habitLog = useLoaderData<typeof loader>();
  const logsByDate = groupLogsByISODate(habitLog);

  const today = new Date();
  const month = today.toLocaleDateString("en-US", { month: "long" });
  const year = today.getFullYear();

  const grid = getMonthGrid(year, today.getMonth());

  const [openId, setOpenId] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedHabitId, setSelectedHabitId] = useState<number | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenId(null);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center gap-4 px-2 text-gray-800 dark:text-gray-200 h-screen w-full pb-10">
      <h2 className="text-3xl font-bold mb-2 bg-linear-[90deg,#e11d48,#c026d3,#7c3aed,#0284c7,#16a34a,#eab308,#ea580c,#dc2626] text-transparent bg-clip-text pt-24">
        {month} {year}
      </h2>
      <div className="grid grid-cols-7 gap-2 w-full max-w-5xl">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-bold text-center pb-10">
            {day}
          </div>
        ))}

        {grid.map((date, i) => {
          const iso = date?.toISOString().split("T")[0] ?? "";
          const logs = logsByDate[iso] || [];

          return (
            <article
              key={i}
              className="border rounded p-2  flex flex-col gap-1 bg-gray-50 dark:bg-gray-800 min-h-fit relative bg-local"
            >
              <div className="text-sm font-semibold">{date?.getDate()}</div>
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="text-xs rounded px-1 py-0.5"
                  style={{
                    backgroundColor: log.habit.color,
                    color: getTextContrastColor(log.habit.color),
                  }}
                  onClick={() => setOpenId(log.id)}
                  onChange={() => setSelectedHabitId(log.id)}
                >
                  {log.habit.name}

                  {openId === log.id && log.description && (
                    <div
                      ref={modalRef}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 rounded-xl shadow-lg max-w-xs w-[250px]"
                    >
                      <p className="text-sm">{log.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </article>
          );
        })}
      </div>
    </main>
  );
}

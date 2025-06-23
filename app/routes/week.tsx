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
  const dayOfWeek = now.getDay();

  const startOfWeek = now;
  startOfWeek.setDate(now.getDate() - dayOfWeek);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const habitLog = await db.habitLog.findMany({
    where: {
      date: {
        gte: startOfWeek,
        lte: endOfWeek,
      },
    },
    orderBy: { date: "desc" },
    include: { habit: true },
  });

  return habitLog;
};

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function groupLogsByDay(logs: HabitLogWithHabit[]) {
  const grouped: { [day: string]: HabitLogWithHabit[] } = {};

  for (const log of logs) {
    const day = new Date(log.date).toLocaleDateString("en-US", {
      weekday: "long",
    });

    if (!grouped[day]) grouped[day] = [];
    grouped[day].push(log);
  }
  return grouped;
}

export default function Week() {
  const habitLog = useLoaderData<typeof loader>();
  const logsByDay = groupLogsByDay(habitLog);

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
      <article className="grid md:grid-cols-7 w-full gap-2 min-h-fit mt-32 md:mt-0">
        {dayNames.map((day) => (
          <section
            key={day}
            className="p-2 rounded shadow bg-gray-50 dark:bg-gray-800 relative"
          >
            <h2 className="text-xl font-bold mb-2">{day}</h2>
            {logsByDay[day]?.map((log) => (
              <div
                key={log.id}
                onClick={() => setOpenId(log.id)}
                className="p-2 mb-2 rounded text-sm font-semibold"
                style={{
                  backgroundColor: log.habit.color,
                  color: getTextContrastColor(log.habit.color),
                }}
                onChange={() => setSelectedHabitId(log.id)}
              >
                {log.habit.name}

                {openId === log.id && log.description && (
                  <div
                    ref={modalRef}
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 p-4 rounded-xl shadow-lg max-w-xs w-[250px]"
                  >
                    <p className="text-sm">{log.description}</p>
                  </div>
                )}
              </div>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}

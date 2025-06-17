import { getTextContrastColor } from "~/utils/utils";
import { db } from "../utils/db.server";
import { useLoaderData } from "@remix-run/react";
import { useState, useRef, useEffect } from "react";

export const loader = async () => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const habitLog = await db.habitLog.findMany({
    where: {
      date: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
    orderBy: { date: "desc" },
    include: { habit: true },
  });
  return habitLog;
};

export default function Day() {
  const habitLog = useLoaderData<typeof loader>();

  const today = new Date();
  const day = today.toLocaleDateString("en-US", { weekday: "long" });
  const date = today.toLocaleDateString("en-US", { day: "numeric" });
  const month = today.toLocaleDateString("en-US", { month: "long" });
  //   const habitNames = habitLog.map((log) => log.habit.name);
  //   console.log(habitLog);

  const [openId, setOpenId] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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
    <main className="flex flex-col items-center justify-center gap-4 px-2 h-screen -mt-10 text-gray-800 dark:text-gray-200">
      <h2 className="mb-4 text-4xl font-bold bg-linear-[90deg,#e11d48,#c026d3,#7c3aed,#0284c7,#16a34a,#eab308,#ea580c,#dc2626] text-transparent bg-clip-text opacity-95">
        {day}
      </h2>
      <h3 className="text-2xl">
        {month} {date}
      </h3>
      <p>{habitLog.length} tasks completed so far!</p>
      <ul className="w-full max-w-md mx-auto flex gap-4 flex-wrap justify-center items-center">
        {habitLog.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No habits logged yet today.
          </p>
        )}
        {habitLog.map((log) => (
          <li
            key={log.id}
            onClick={() => setOpenId(log.id)}
            className="p-4 mb-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow relative"
            style={{
              backgroundColor: log.habit.color,
              color: getTextContrastColor(log.habit.color),
            }}
          >
            <p className="text-lg font-semibold">{log.habit.name}</p>
            {openId === log.id && log.description && (
              <div
                ref={modalRef}
                className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 p-4 rounded-xl shadow-lg max-w-xs w-[250px]"
              >
                <p className="text-sm">{log.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

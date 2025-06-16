import { getTextContrastColor } from "~/utils/utils";
import { db } from "../utils/db.server";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const habitLog = await db.habitLog.findMany({
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

  return (
    <main className="flex flex-col items-center justify-center gap-2 px-2 h-screen -mt-10 text-gray-800 dark:text-gray-200">
      <h2 className="mb-4 text-4xl font-bold bg-linear-[90deg,#e11d48,#c026d3,#7c3aed,#0284c7,#16a34a,#eab308,#ea580c,#dc2626] text-transparent bg-clip-text opacity-95">
        {day}
      </h2>
      <h3>
        {month} {date}
      </h3>
      <ul className="w-full max-w-md mx-auto">
        {habitLog.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No habits logged yet today.
          </p>
        )}
        {habitLog.map((log) => (
          <li
            key={log.id}
            className="p-4 mb-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow"
            style={{ backgroundColor: log.habit.color, color: getTextContrastColor(log.habit.color) }}
          >
            <p className="text-lg font-semibold">{log.habit.name}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

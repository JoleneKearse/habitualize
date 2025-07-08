import { useState, useRef, useEffect } from "react";
import { getTextContrastColor } from "~/utils/utils";

type DashboardWeekProps = {
  habitLogWeek: Array<{
    id: number;
    userId: string | null;
    habitId: number;
    date: Date;
    description: string | null;
    habit: {
      id: number;
      name: string;
      color: string;
      userId: string | null;
      createdAt: Date;
    };
  }>;
};

type HabitLogWithHabit = DashboardWeekProps["habitLogWeek"][0];

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

export default function DashboardWeek({ habitLogWeek }: DashboardWeekProps) {
  const now = new Date();
  const dayOfWeek = now.getDay();

  const startOfWeek = now;
  startOfWeek.setDate(now.getDate() - dayOfWeek);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const logsByDay = groupLogsByDay(habitLogWeek);
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
    <section className="flex flex-col items-center justify-center gap-4 px-2 text-gray-800 dark:text-gray-200 h-screen w-full pb-10">
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
    </section>
  );
}

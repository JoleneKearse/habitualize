import { useState, useRef, useEffect } from "react";
import { getTextContrastColor } from "~/utils/utils";
import EditHabitLogs from "~/components/EditHabitLogs";

type DashboardDayProps = {
  habitLogDay: Array<{
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

export default function DashboardDay({ habitLogDay }: DashboardDayProps) {
  const today = new Date();
  const day = today.toLocaleDateString("en-US", { weekday: "long" });
  const date = today.toLocaleDateString("en-US", { day: "numeric" });
  const month = today.toLocaleDateString("en-US", { month: "long" });

  const [openId, setOpenId] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedHabitId, setSelectedHabitId] = useState<number | null>(null);

  const [isEditing, setIsEditing] = useState(false);

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

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  useEffect(() => {
    if (isEditing) {
      setOpenId(null);
      setSelectedHabitId(null);
    }
  }, [isEditing]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 px-2 h-screen -mt-10 text-gray-800 dark:text-gray-200">
      <article className="flex items-baseline gap-2">
        <h2 className="mb-4 text-4xl font-bold bg-linear-[90deg,#e11d48,#c026d3,#7c3aed,#0284c7,#16a34a,#eab308,#ea580c,#dc2626] text-transparent bg-clip-text opacity-95 h-12">
          {day}
        </h2>
        <h3 className="text-4xl">
          {month} {date}
        </h3>
        <button
          className="bg-linear-[90deg,#eab308,#16a34a,#0284c7] rounded-full text-2xl p-2 hover:bg-linear-[180deg,#eab308,#16a34a,#0284c7]"
          onClick={handleEditClick}
        >
          Edit
        </button>
      </article>
      <p>
        {habitLogDay.length} task{habitLogDay.length > 1 ? "s" : ""} completed
        so far!
      </p>
      {!isEditing ? (
        <ul className="w-full max-w-md mx-auto flex gap-4 flex-wrap justify-center items-center">
          {habitLogDay.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No habits logged yet today.
            </p>
          )}
          {habitLogDay.map((log) => (
            <li
              key={log.id}
              onClick={() => setOpenId(log.id)}
              className={`p-4 mb-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow relative text-lg font-semibold cursor-pointer ${
                selectedHabitId === log.id ? "opacity-60" : "opacity-100"
              }`}
              style={{
                backgroundColor: log.habit.color,
                color: getTextContrastColor(log.habit.color),
              }}
              onChange={() => setSelectedHabitId(log.id)}
            >
              <input
                type="radio"
                name="habitLogId"
                value={log.id}
                className="sr-only"
              />
              {log.description}

              {openId === log.id && log.description && (
                <div
                  ref={modalRef}
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 p-4 rounded-xl shadow-lg max-w-xs w-[250px]"
                >
                  <p className="text-sm">{log.habit.name}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <EditHabitLogs
          habitLog={habitLogDay}
          setOpenId={setOpenId}
          selectedHabitId={selectedHabitId}
          setSelectedHabitId={setSelectedHabitId}
          openId={openId}
          modalRef={modalRef}
        />
      )}
    </section>
  );
}

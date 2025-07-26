import { SiLivejournal } from "react-icons/si";
import { FaCalendarDay } from "react-icons/fa";
import { BsCalendarWeekFill } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";
import { MdAddBox } from "react-icons/md";

type DashboardActionsProps = {
  viewMode: "log" | "day" | "week" | "month" | "add";
  setViewMode: (mode: "log" | "day" | "week" | "month" | "add") => void;
};

export default function DashboardActions({
  viewMode,
  setViewMode,
}: DashboardActionsProps) {
  console.log("Current viewMode:", viewMode);

  return (
    <section>
      <div
        className="p-[3px] rounded-md"
        style={{
          background:
            "linear-gradient(90deg, #dc2626, #ea580c, #eab308, #16a34a, #0284c7, #7c3aed, #c026d3, #e11d48)",
        }}
      >
        <ul
          className="flex flex-wrap gap-6 w-full rounded-md bg-gray-100 dark:bg-gray-900 p-4"
        >
          <li>
            <button
              onClick={() => setViewMode("log")}
              className="flex flex-col items-center gap-2 cursor-pointer hover:bg-[#ea580c] rounded p-2"
            >
              <h3 className="text-center text-white text-lg sm:text-xl max-w-[5rem] sm:max-w-none break-words">Your Habits</h3>
              <SiLivejournal />
            </button>
          </li>
          <li>
            <button
              onClick={() => setViewMode("day")}
              className="flex flex-col items-center gap-2 cursor-pointer hover:bg-[#eab308] hover:text-gray-800 rounded p-2"
            >
              <h3 className="text-center text-white text-lg sm:text-xl max-w-[5rem] sm:max-w-none break-words">Today's Tasks</h3>
              <FaCalendarDay />
            </button>
          </li>
          <li>
            <button
              onClick={() => setViewMode("week")}
              className="flex flex-col items-center gap-2 cursor-pointer hover:bg-[#16a34a] rounded p-2"
            >
              <h3 className="text-center text-white text-lg sm:text-xl max-w-[5rem] sm:max-w-none break-words">Weekly Window</h3>
              <BsCalendarWeekFill />
            </button>
          </li>
          <li>
            <button
              onClick={() => setViewMode("month")}
              className="flex flex-col items-center gap-2 cursor-pointer hover:bg-[#0284c7] rounded p-2"
            >
              <h3 className="text-center text-white text-lg sm:text-xl max-w-[5rem] sm:max-w-none break-words">Monthly Monitor</h3>
              <FaCalendarDays />
            </button>
          </li>
          <li>
            <button
              onClick={() => setViewMode("add")}
              className="flex flex-col items-center gap-2 cursor-pointer hover:bg-[#7c3aed] rounded p-2"
            >
              <h3 className="text-center text-white text-lg sm:text-xl max-w-[5rem] sm:max-w-none break-words">New Habit Hub</h3>
              <MdAddBox />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

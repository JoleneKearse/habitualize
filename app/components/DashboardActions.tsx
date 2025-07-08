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
  return (
    <section>
      <ul className="flex flex-wrap gap-10 w-full">
        <li>
          <button
            onClick={() => setViewMode("log")}
            className="flex flex-col items-center gap-2 cursor-pointer hover:text-gray-500 outline"
          >
            <h3>Your Habits</h3>
            <SiLivejournal />
          </button>
        </li>
        <li>
          <button
            onClick={() => setViewMode("day")}
            className="flex flex-col items-center gap-2 cursor-pointer hover:text-gray-500"
          >
            <h3>Today's Tasks</h3>
            <FaCalendarDay />
          </button>
        </li>
        <li>
          <button
            onClick={() => setViewMode("week")}
            className="flex flex-col items-center gap-2 cursor-pointer hover:text-gray-500"
          >
            <h3>Weekly Window</h3>
            <BsCalendarWeekFill />
          </button>
        </li>
        <li>
          <button
            onClick={() => setViewMode("month")}
            className="flex flex-col items-center gap-2 cursor-pointer hover:text-gray-500"
          >
            <h3>Monthly Monitor</h3>
            <FaCalendarDays />
          </button>
        </li>
        <li>
          <button
            onClick={() => setViewMode("add")}
            className="flex flex-col items-center gap-2 cursor-pointer hover:text-gray-500"
          >
            <h3>New Habit Hub</h3>
            <MdAddBox />
          </button>
        </li>
      </ul>
    </section>
  );
}

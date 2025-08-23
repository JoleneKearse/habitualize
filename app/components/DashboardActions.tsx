import { useNavigate } from "@remix-run/react";
import { SiLivejournal } from "react-icons/si";
import { FaCalendarDay } from "react-icons/fa";
import { BsCalendarWeekFill } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";
import { MdAddBox } from "react-icons/md";

type DashboardActionsProps = {
  onActionClick: () => void;
};

export default function DashboardActions({ onActionClick }: DashboardActionsProps) {
  const navigate = useNavigate();

  const handleHabitsClick = () => {
    if (onActionClick) onActionClick();
    navigate("/dashboard/log");
  };
  const handleDayClick = () => {
    if (onActionClick) onActionClick();
    navigate("/dashboard/day");
  };
  const handleWeekClick = () => {
    if (onActionClick) onActionClick();
    navigate("/dashboard/week");
  };
  const handleMonthClick = () => {
    if (onActionClick) onActionClick();
    navigate("/dashboard/month");
  };
  const handleAddClick = () => {
    if (onActionClick) onActionClick();
    navigate("/dashboard/add");
  };

  return (
    <section>
      <div
        className="p-[3px] rounded-md"
        style={{
          background:
            "linear-gradient(90deg, #dc2626, #ea580c, #eab308, #16a34a, #0284c7, #7c3aed, #c026d3, #e11d48)",
        }}
      >
        <ul className="flex flex-wrap justify-center gap-2 md:gap-4 w-full rounded-md bg-gray-100 dark:bg-gray-900 p-4">
          <li>
            <button
              onClick={() => handleHabitsClick()}
              className="flex md:flex-col items-center gap-2 cursor-pointer hover:bg-[#ea580c] focus:bg-[#ea580c] rounded p-2"
            >
              <h3 className="text-center text-white md:text-lg">
                Your Habits
              </h3>
              <SiLivejournal />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleDayClick()}
              className="flex md:flex-col items-center gap-2 cursor-pointer hover:bg-[#eab308] focus:bg-[#eab308] hover:text-gray-800 rounded p-2"
            >
              <h3 className="text-center text-white md:text-lg">
                Today's Tasks
              </h3>
              <FaCalendarDay />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleWeekClick()}
              className="flex md:flex-col items-center gap-2 cursor-pointer hover:bg-[#16a34a] focus:bg-[#16a34a] rounded p-2"
            >
              <h3 className="text-center text-white md:text-lg">
                Weekly Window
              </h3>
              <BsCalendarWeekFill />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleMonthClick()}
              className="flex md:flex-col items-center gap-2 cursor-pointer hover: rounded p-2"
            >
              <h3 className="text-center text-white md:text-lg">
                Monthly Monitor
              </h3>
              <FaCalendarDays />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleAddClick()}
              className="flex md:flex-col items-center gap-2 cursor-pointer hover:bg-[#7c3aed] focus:bg-[#7c3aed] rounded p-2"
            >
              <h3 className="text-center text-white md:text-lg">
                New Habit Hub
              </h3>
              <MdAddBox />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

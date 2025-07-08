import { type MetaFunction } from "@remix-run/node";
import { MdAddBox } from "react-icons/md";
import { SiLivejournal } from "react-icons/si";
import { FaCalendarDay } from "react-icons/fa";
import { BsCalendarWeekFill } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";
import { useNavigate } from "@remix-run/react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Habitualize" },
    {
      name: "description",
      content: "Track your habits at a colourful glance!",
    },
  ];
};

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogInClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex h-fit items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center gap-16">
        <main className="flex flex-col items-center justify-center gap-4 px-2">
          <h2 className="mb-4 text-3xl font-bold bg-linear-[90deg,#dc2626,#ea580c,#eab308,#16a34a,#0284c7,#7c3aed,#c026d3,#e11d48] text-transparent bg-clip-text opacity-85">
            How does it work?
          </h2>
          <ol className="list-none space-y-10 text-green-700 dark:text-green-300 px-4">
            <li className="flex items-center gap-2 opacity-60">
              <span className="font-bold">Add</span> <MdAddBox /> your habit and
              pick a pretty color.
            </li>
            <li className="flex items-center gap-2 opacity-80">
              <span className="font-bold">Mark down</span> <SiLivejournal />{" "}
              which habits you complete.
            </li>
            <li className="flex items-center gap-2 flex-wrap">
              View all your awesome habitualized habits in colourful
              <span className="font-bold">daily</span>
              <FaCalendarDay />, <span className="font-bold">weekly</span>{" "}
              <BsCalendarWeekFill />, or{" "}
              <span className="font-bold">monthly</span>
              <FaCalendarDays /> views.
            </li>
          </ol>
          {!isLoggedIn && (
            <div>
              <button
                className="px-6 py-2 mt-24 bg-linear-[90deg,#dc2626,#ea580c,#eab308,#16a34a,#0284c7,#7c3aed,#c026d3,#e11d48] text-gray-50 text-4xl font-bold rounded-2xl hover:bg-linear-[90deg,#e11d48,#c026d3,#7c3aed,#0284c7,#16a34a,#eab308,#ea580c,#dc2626] duration-800 ease-in-out cursor-pointer"
                onClick={handleLogInClick}
              >
                Log In
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

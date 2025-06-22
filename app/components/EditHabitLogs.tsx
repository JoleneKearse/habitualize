import { Form } from "@remix-run/react";
import { getTextContrastColor } from "~/utils/utils";
import type { HabitLog, Habit } from "@prisma/client";
import { MdEdit } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";

type HabitLogWithHabit = HabitLog & {
  habit: Pick<Habit, "name" | "color">;
};

type EditHabitLogsProps = {
  habitLog: HabitLogWithHabit[];
  setOpenId: (id: number | null) => void;
  openId: number | null;
  selectedHabitId: number | null;
  setSelectedHabitId: (id: number | null) => void;
  modalRef: React.RefObject<HTMLDivElement>;
};

export default function EditHabitLogs({
  habitLog,
  setOpenId,
  selectedHabitId,
  setSelectedHabitId,
  modalRef,
  openId,
}: EditHabitLogsProps) {
  return (
    <Form className="w-full" method="post">
      <ul className="w-full max-w-md mx-auto flex flex-col gap-4 flex-wrap justify-center items-center outline">
        {habitLog.map((log) => (
          <li
            key={log.id}
            onClick={() => setOpenId(log.id)}
            className={`p-2 mb-2 flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow relative text-lg font-semibold cursor-pointer ${
              selectedHabitId === log.id ? "opacity-60" : "opacity-100"
            }`}
            style={{
              backgroundColor: log.habit.color,
              color: getTextContrastColor(log.habit.color),
            }}
            onChange={() => setSelectedHabitId(log.id)}
          >
            <input type="hidden" name="habitLogId" value={log.id} />

            <input
              type="radio"
              name="habitLogId"
              value={log.id}
              className="sr-only"
            />
            {log.habit.name}

            <input
              type="text"
              name="habitDescription"
              id="habitDescription"
              defaultValue={log.description || ""}
              className="px-4 py-2 border rounded w-full text-sm"
            />

            {openId === log.id && log.description && (
              <div
                ref={modalRef}
                className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 p-4 rounded-xl shadow-lg max-w-xs w-[250px]"
              >
                <p className="text-sm">{log.description}</p>
              </div>
            )}
            <button type="submit" name="intent" value="edit">
              <MdEdit />
            </button>

            <button type="submit" name="intent" value="delete">
              <FaDeleteLeft />
            </button>
          </li>
        ))}
      </ul>
    </Form>
  );
}

import { useState } from "react";
import PrimaryButton from "~/components/PrimaryButton";
import { db } from "../utils/db.server";
import { Form, useLoaderData, Link, redirect } from "@remix-run/react";
import { getTextContrastColor } from "~/utils/utils";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { getSession } from "~/services/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");

  if (!userId) {
    return redirect("/login");
  }

  const habits = await db.habit.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return { habits, userId };
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const habitId = formData.get("habitId");
  const habitDescription = formData.get("habitDescription");

  if (typeof habitId !== "string") {
    return { error: "Invalid input" };
  }

  await db.habitLog.create({
    data: {
      date: new Date(),
      habitId: parseInt(habitId, 10),
      description: habitDescription ? habitDescription.toString() : null,
    },
  });

  return redirect("/day");
};

export default function Log() {
  const { userId, habits } = useLoaderData<typeof loader>();

  const [selectedHabitId, setSelectedHabitId] = useState<number | null>(null);

  return (
    <main className="flex flex-col items-center justify-center gap-2 px-2 h-screen -mt-10">
      <h2 className="mb-4 text-3xl font-bold bg-linear-[90deg,#e11d48,#c026d3,#7c3aed,#0284c7,#16a34a,#eab308,#ea580c,#dc2626] text-transparent bg-clip-text opacity-95">
        What did you do today?
      </h2>
      <Form
        id="habit-log"
        method="post"
        className="flex justify-center items-center flex-col gap-8 w-full text-gray-800 dark:text-gray-200"
      >
        <ul className="flex justify-center items-center gap-4 flex-wrap">
          {habits.map((habit) => (
            <li key={habit.id}>
              <label
                className={`text-2xl font-bold py-1 px-4 rounded-2xl text-center cursor-pointer transition-opacity duration-300 ${
                  selectedHabitId === habit.id ? "opacity-60" : "opacity-100"
                }`}
                style={{
                  backgroundColor: habit.color,
                  color: getTextContrastColor(habit.color),
                }}
              >
                <input
                  type="radio"
                  name="habitId"
                  value={habit.id}
                  className="sr-only"
                  onChange={() => setSelectedHabitId(habit.id)}
                />
                {habit.name}
              </label>
            </li>
          ))}
          <Link
            to="/add"
            className="py-1 px-4 bg-linear-[90deg,#dc2626,#ea580c,#eab308,#16a34a,#0284c7,#7c3aed,#c026d3,#e11d48] text-gray-50 text-2xl rounded-2xl hover:bg-linear-[90deg,#e11d48,#c026d3,#7c3aed,#0284c7,#16a34a,#eab308,#ea580c,#dc2626] duration-800 ease-in-out opacity-80 cursor-pointer"
          >
            Add a new habit
          </Link>
        </ul>

        <label htmlFor="habitDescription">Add notes</label>
        <input
          type="text"
          name="habitDescription"
          id="habitDescription"
          placeholder="Notes"
          className="px-4 py-2 border rounded w-full max-w-md"
        />

        <PrimaryButton />
      </Form>
    </main>
  );
}

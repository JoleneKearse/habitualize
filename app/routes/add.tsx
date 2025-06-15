import { Form, redirect } from "@remix-run/react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { db } from "../utils/db.server";
import PrimaryButton from "~/components/PrimaryButton";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const newHabit = formData.get("newHabit");
  const color = formData.get("color");

  if (typeof newHabit !== "string" || typeof color !== "string") {
    return { error: "Invalid input" };
  }

  // Here you would typically save the new habit to a database
  console.log(`New Habit: ${newHabit}, Color: ${color}`);

  await db.habit.create({
    data: {
      name: newHabit,
      color: color,
    },
  });

  return redirect("/");
};

export default function AddHabit() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 px-2 h-screen -mt-10">
      <h2 className="mb-4 text-3xl font-bold bg-linear-[90deg,#e11d48,#c026d3,#7c3aed,#0284c7,#16a34a,#eab308,#ea580c,#dc2626] text-transparent bg-clip-text opacity-85">
        Add a habit
      </h2>
      <Form
        id="add-form"
        method="post"
        className="flex flex-col items-center justify-center gap-8 text-blue-500 font-bold"
      >
        <label htmlFor="newHabit">Habit</label>
        <input
          type="text"
          name="newHabit"
          id="newHabit"
          className="bg-gray-200 dark:bg-gray-700 p-2 rounded-md"
        />
        <label htmlFor="color">Color</label>
        <input
          type="color"
          name="color"
          id="color"
          className="rounded-3xl border-0"
        />
        <PrimaryButton />
      </Form>
    </main>
  );
}

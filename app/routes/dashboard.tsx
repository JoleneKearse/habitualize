import { db } from "../utils/db.server";
import { redirect, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { getSession } from "~/services/session.server";
import DashboardActions from "~/components/DashboardActions";
import DashboardLog from "~/components/DashboardLog";
import DashboardDay from "~/components/DashboardDay";
import DashboardWeek from "~/components/DashboardWeek";
import DashboardMonth from "~/components/DashboardMonth";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");

  if (!userId) {
    return redirect("/login");
  }

  // Get habits for log
  const habitsList = await db.habit.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  // Get daily habits
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const habitLogDay = await db.habitLog.findMany({
    where: {
      date: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
    orderBy: { date: "desc" },
    include: { habit: true },
  });

  // Get weekly habits
  const now = new Date();
  const dayOfWeek = now.getDay();

  const startOfWeek = now;
  startOfWeek.setDate(now.getDate() - dayOfWeek);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const habitLogWeek = await db.habitLog.findMany({
    where: {
      date: {
        gte: startOfWeek,
        lte: endOfWeek,
      },
    },
    orderBy: { date: "desc" },
    include: { habit: true },
  });

  // Get monthly habits
  const today = new Date();

  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  endOfMonth.setHours(23, 59, 59, 999);

  const habitLogMonth = await db.habitLog.findMany({
    where: {
      date: {
        gte: startOfMonth,
        lte: endOfMonth,
      },
    },
    orderBy: { date: "desc" },
    include: { habit: true },
  });

  return { userId, habitsList, habitLogDay, habitLogWeek, habitLogMonth };
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formDataLog = await request.formData();
  const habitId = formDataLog.get("habitId");
  const habitDescription = formDataLog.get("habitDescription");

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

  return redirect("/dashboard");
};

export default function Dashboard() {
  const { userId, habitsList, habitLogDay, habitLogWeek, habitLogMonth } =
    useLoaderData<typeof loader>();
  const [viewMode, setViewMode] = useState<
    "log" | "day" | "week" | "month" | "add"
  >("log");

  return (
    <main className="flex flex-col items-center justify-center gap-2 px-10 h-min text-gray-800 dark:text-gray-100">
      <DashboardActions viewMode={viewMode} setViewMode={setViewMode} />
      {viewMode === "log" && <DashboardLog habitsList={habitsList} />}
      {viewMode === "day" && <DashboardDay habitLogDay={habitLogDay} />}
      {viewMode === "week" && <DashboardWeek habitLogWeek={habitLogWeek} />}
      {viewMode === "month" && <DashboardMonth habitLogMonth={habitLogMonth} />}
    </main>
  );
}

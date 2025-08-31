import { db } from "../utils/db.server";
import { redirect, useLoaderData, Outlet } from "@remix-run/react";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { getSession } from "~/services/session.server";
import { useRef } from "react";
import DashboardActions from "~/components/DashboardActions";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");

  if (!userId) {
    return redirect("/login");
  }

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

  return { userId, habitLogMonth };
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
  const { userId, habitLogMonth } = useLoaderData<typeof loader>();
  const sectionRef = useRef<HTMLElement>(null);

  function handleScrollToSection() {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="flex-1 grow overflow-y-auto text-sm justify-center gap-2 px-10 text-gray-800 dark:text-gray-100">
      <DashboardActions onActionClick={handleScrollToSection} />
      <article ref={sectionRef} className="pt-16 lg:pt-22 pb-22">
        <Outlet />
      </article>
    </main>
  );
}

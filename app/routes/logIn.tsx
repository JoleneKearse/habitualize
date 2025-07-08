import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { getSession, commitSession } from "../services/session.server";
import { db } from "../utils/db.server";
import bcrypt from "bcryptjs";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }

  const session = await getSession(request.headers.get("Cookie"));

  if (intent === "register") {
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      session.flash("error", "User already exists");
      return redirect("/login", {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword as string,
      },
    });

    session.set("userId", user.id);
    return redirect("/day", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  if (intent === "login") {
    const user = await db.user.findUnique({ where: { email } });

    if (!user || !user.password) {
      session.flash("error", "Invalid login");
      return redirect("/dashboard", {
        headers: { "Set-Cookie": await commitSession(session) },
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      session.flash("error", "Invalid login");
      return redirect("/login", {
        headers: { "Set-Cookie": await commitSession(session) },
      });
    }

    session.set("userId", user.id);
    return redirect("/", {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  }

  return new Response("Invalid action", { status: 400 });
}

export default function Login() {
  return (
    <Form
      id="login"
      method="post"
      className="flex flex-col items-center justify-center gap-2 px-2 h-screen -mt-10 text-gray-800 dark:text-gray-200 w-full"
    >
      <h2 className="mb-4 text-3xl font-bold bg-linear-[90deg,#e11d48,#c026d3,#7c3aed,#0284c7,#16a34a,#eab308,#ea580c,#dc2626] text-transparent bg-clip-text opacity-85">
        Log In
      </h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className="px-4 py-2 border rounded w-full max-w-md"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        className="px-4 py-2 border rounded w-full max-w-md"
        required
      />
      <button
        type="submit"
        name="intent"
        value="login"
        className="px-6 py-2 mt-4 bg-linear-[90deg,#dc2626,#ea580c,#eab308,#16a34a,#0284c7,#7c3aed,#c026d3,#e11d48] text-gray-50 text-4xl font-bold rounded-2xl hover:bg-linear-[90deg,#e11d48,#c026d3,#7c3aed,#0284c7,#16a34a,#eab308,#ea580c,#dc2626] duration-800 ease-in-out cursor-pointer"
      >
        Log In
      </button>
      <button
        type="submit"
        name="intent"
        value="register"
        className="px-6 py-2 mt-4 bg-linear-[90deg,#dc2626,#ea580c,#eab308,#16a34a,#0284c7,#7c3aed,#c026d3,#e11d48] text-gray-50 text-4xl font-bold rounded-2xl hover:bg-linear-[90deg,#e11d48,#c026d3,#7c3aed,#0284c7,#16a34a,#eab308,#ea580c,#dc2626] duration-800 ease-in-out cursor-pointer"
      >
        Resister
      </button>
    </Form>
  );
}

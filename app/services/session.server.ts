import { createCookieSessionStorage } from "@remix-run/node";

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET is not set");
}

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: [process.env.SESSION_SECRET!],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    // Allow cookie to work across subdomains in production
    domain: process.env.NODE_ENV === "production" ? process.env.COOKIE_DOMAIN : undefined,
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;

import { createCookieSessionStorage } from "@remix-run/node";

// const required = ["SESSION_SECRET", "TURSO_DATABASE_URL"] as const;
// for (const k of required) {
//   if (!process.env[k]) {
//     throw new Error(`Missing required env var: ${k}`);
//   }
// }

// if (!process.env.SESSION_SECRET) {
//   throw new Error("SESSION_SECRET missing");
// }

// const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN?.trim();

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: [process.env.SESSION_SECRET!],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    // Allow cookie to work across subdomains in production
    // ...(COOKIE_DOMAIN ? { domain: COOKIE_DOMAIN } : {}),
    maxAge: 60 * 60 * 24 * 30,
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;

import pkg from "@prisma/client";
const { PrismaClient } = pkg;
import { PrismaLibSQL } from "@prisma/adapter-libsql";

// Use Turso adapter in production, local SQLite in development
let db: pkg.PrismaClient;

if (process.env.NODE_ENV === "production" && process.env.TURSO_DATABASE_URL) {
  const adapter = new PrismaLibSQL({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  });
  db = new PrismaClient({ adapter });
} else {
    console.log("running in dev")
  // Use local SQLite for development (matches schema.prisma)
  db = new PrismaClient();
}

export { db };

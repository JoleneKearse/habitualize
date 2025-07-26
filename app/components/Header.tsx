import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-2 pt-12 mb-10">
      <Link to="/">
        <h1 className="leading text-6xl font-extrabold bg-linear-[90deg,#dc2626,#ea580c,#eab308,#16a34a,#0284c7,#7c3aed,#c026d3,#e11d48] text-transparent bg-clip-text">
          Habitualize
        </h1>
      </Link>
      <p className="text-center text-lg text-gray-700 dark:text-gray-300">
        Track your habits at a colourful glance!
      </p>
    </header>
  );
}

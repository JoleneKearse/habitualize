import { Link } from "@remix-run/react";
import { FaHome } from "react-icons/fa";
import { RiDashboard3Fill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-linear-[270deg,#dc2626,#ea580c,#eab308,#16a34a,#0284c7,#7c3aed,#c026d3,#e11d48]">
      <nav className="flex items-center justify-center gap-4 p-6 dark:border-gray-700">
        <ul className="list-none flex items-center gap-12">
          <li>
            <Link to="/">
              <FaHome />
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <RiDashboard3Fill />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

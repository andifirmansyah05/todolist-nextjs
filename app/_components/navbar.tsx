"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="shadow-md h-14 flex justify-start items-center gap-6 px-12">
      <div>
        <Link
          href="/"
          className={
            pathname === "/" ? "text-purple-600 underline" : "hover:text-purple-600"
          }
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          href="/about"
          className={
            pathname === "/about" ? "text-purple-600 underline" : "hover:text-purple-600"
          }
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

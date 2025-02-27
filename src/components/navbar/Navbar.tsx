"use client"

import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      setIsFixed(scrollPosition >= windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-16 bg-white border-b ${
        isFixed ? "fixed top-0 left-0 shadow-md z-50" : "relative"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold hover:opacity-80"
          prefetch={false}
        >
          <Plus className="h-6 w-6" />
          <span>HaBuilder</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/pricing"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/login"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

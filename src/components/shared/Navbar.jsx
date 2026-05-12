"use client";
import { useEffect, useState } from "react";
import { Sun, Moon, Search, Plus } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isDark) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return <div className="h-16" />;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-950/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-900 dark:bg-white transition-transform hover:rotate-3">
            <span className="text-sm font-bold text-white dark:text-gray-950 italic">
              F
            </span>
          </div>
          <span className="text-sm font-bold tracking-tight text-gray-900 dark:text-white uppercase">
            Folioly
          </span>
        </div>

        {/* Center - Simple Links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">
            Explore
          </a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">
            Categories
          </a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">
            About
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 transition-colors"
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button className="hidden sm:flex items-center gap-2 rounded-md bg-gray-900 px-4 py-1.5 text-[13px] font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100 transition-all">
            <Plus size={14} /> Submit
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

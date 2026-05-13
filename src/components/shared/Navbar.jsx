"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Plus } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme based on localStorage or system preference
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

  // Handle manual theme switching
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

  // Prevent layout shift during theme hydration
  if (!mounted) return <div className="h-16" />;

  return (
    <nav className="sticky top-0 z-50 w-full border-b  bg-background/80 backdrop-blur-md transition-colors duration-500 dark:border-gray-800/50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-foreground transition-transform duration-300 group-hover:rotate-6">
            <span className="text-sm font-black text-background italic">F</span>
          </div>
          <span className="text-sm font-black tracking-tighter text-foreground uppercase">
            Folioly
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-bold uppercase tracking-widest text-muted-foreground">
          <Link
            href="/explore"
            className="transition-colors hover:text-foreground"
          >
            Explore
          </Link>
          <Link
            href="/categories"
            className="transition-colors hover:text-foreground"
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground"
          >
            About
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-foreground transition-all hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

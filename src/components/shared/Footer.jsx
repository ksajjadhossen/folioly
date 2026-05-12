"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-gray-100 bg-background py-16 transition-colors duration-500 dark:border-gray-800/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-start">
          {/* Brand and Description Section */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-foreground transition-transform duration-300 group-hover:rotate-6">
                <span className="text-sm font-black text-background italic">
                  F
                </span>
              </div>
              <span className="text-sm font-black tracking-tighter text-foreground uppercase">
                Folioly
              </span>
            </Link>
            <p className="max-w-70 text-center text-[13px] leading-relaxed text-muted-foreground md:text-left">
              Curating the world's most inspiring developer portfolios and
              personal sites for high-quality inspiration.
            </p>
          </div>

          {/* Navigation Links Section */}
          <div className="flex gap-16 text-[12px] font-bold uppercase tracking-widest">
            {/* Directory Column */}
            <div className="flex flex-col gap-4">
              <span className="text-foreground">Directory</span>
              <nav className="flex flex-col gap-3 text-muted-foreground">
                <Link
                  href="/"
                  className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Latest
                </Link>
                <Link
                  href="/featured"
                  className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Featured
                </Link>
                <Link
                  href="/submit"
                  className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Submit Site
                </Link>
              </nav>
            </div>

            {/* Social & Legal Column */}
            <div className="flex flex-col gap-4">
              <span className="text-foreground">Social</span>
              <nav className="flex flex-col gap-3 text-muted-foreground">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Twitter
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  GitHub
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800/40">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-[11px] font-medium text-muted-foreground">
              &copy; {new Date().getFullYear()} Folioly. All rights reserved.
            </p>
            <p className="text-[11px] font-medium text-muted-foreground/60">
              Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

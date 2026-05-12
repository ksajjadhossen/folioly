// src/components/HomePage/FilterBar.jsx
"use client";
import { Search } from "lucide-react";

const FilterBar = ({ setSearchQuery, activeCategory, setActiveCategory }) => {
  const categories = ["All", "Portfolio", "SaaS", "Creative", "Agency"];

  return (
    <div className="sticky top-16 z-40 w-full border-b border-gray-100 bg-white/80 py-6 backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        {/* সার্চ বক্স */}
        <div className="relative w-full max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search portfolios..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-gray-50/50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-indigo-500 focus:bg-white dark:border-gray-800 dark:bg-gray-900 dark:focus:border-indigo-400"
          />
        </div>

        {/* ক্যাটাগরি বাটন */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-[13px] font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-950"
                  : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

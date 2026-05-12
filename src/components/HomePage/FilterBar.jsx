"use client";

import { Search } from "lucide-react";

const FilterBar = ({ setSearchQuery, activeCategory, setActiveCategory }) => {
  // Define available filter categories
  const categories = ["All", "Portfolio", "Creative"];

  return (
    // Sticky header with glassmorphism effect and theme-aware transitions
    <div className="sticky top-16 z-40 w-full border-b border-gray-100 bg-background/80 py-6 backdrop-blur-md transition-colors duration-500 dark:border-gray-800/50 dark:bg-background/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        {/* Search Input Section */}
        <div className="relative w-full max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
            size={16}
          />
          <input
            type="text"
            placeholder="Search portfolios..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm text-[#000080] placeholder:text-[#000080]/60 outline-none transition-all duration-300 hover:border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/10 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-indigo-400"
          />
        </div>

        {/* Category Navigation Section */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap rounded-full px-5 py-1.5 text-[13px] font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-foreground text-background shadow-md shadow-black/5 dark:shadow-none"
                  : "text-muted-foreground hover:text-foreground"
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

"use client";

import { useState } from "react";
import PremiumSiteCard from "./PremiumSiteCard";
import FilterBar from "./FilterBar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WebsiteGrid = ({ websites = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Items to display per page
  const itemsPerPage = 9;

  // 1. Filter logic based on search query and selected category
  const filteredWebsites = websites.filter((site) => {
    const matchesSearch =
      site.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || site.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // 2. Pagination calculations
  const totalPages = Math.ceil(filteredWebsites.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredWebsites.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  // 3. Page change handler with smooth scroll effect
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smoothly scroll up when changing pages
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-10 bg-background transition-colors duration-300">
      <FilterBar
        setSearchQuery={(q) => {
          setSearchQuery(q);
          // Reset to first page on new search
          setCurrentPage(1);
        }}
        activeCategory={activeCategory}
        setActiveCategory={(c) => {
          setActiveCategory(c);
          // Reset to first page on category change
          setCurrentPage(1);
        }}
      />

      <div className="mx-auto max-w-7xl px-6 pb-20">
        {currentItems.length > 0 ? (
          <>
            {/* Main Grid Display */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {currentItems.map((site) => (
                <PremiumSiteCard key={site._id || site.title} site={site} />
              ))}
            </div>

            {/* Pagination UI Section */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-2">
                {/* Previous Page Button */}
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-card-custom text-gray-600 transition-all hover:bg-gray-50 disabled:opacity-30 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-900"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Individual Page Numbers */}
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`h-10 w-10 rounded-lg text-sm font-bold transition-all ${
                      currentPage === index + 1
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none"
                        : "border border-gray-200 bg-card-custom text-gray-600 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-900"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                {/* Next Page Button */}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-card-custom text-gray-600 transition-all hover:bg-gray-50 disabled:opacity-30 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-900"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </>
        ) : (
          /* Empty State Display */
          <div className="flex h-60 flex-col items-center justify-center text-gray-400">
            <p className="text-lg font-medium text-foreground opacity-60">
              No results found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebsiteGrid;

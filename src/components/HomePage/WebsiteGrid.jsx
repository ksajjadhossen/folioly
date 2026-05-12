"use client";
import { useState } from "react";
import PremiumSiteCard from "./PremiumSiteCard";
import FilterBar from "./FilterBar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WebsiteGrid = ({ websites = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9; // প্রতি পেইজে কয়টি কার্ড দেখাবে

  // ১. প্রথমে সার্চ এবং ক্যাটাগরি অনুযায়ী ফিল্টার করা
  const filteredWebsites = websites.filter((site) => {
    const matchesSearch =
      site.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || site.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // ২. পেইজিনেশন ক্যালকুলেশন
  const totalPages = Math.ceil(filteredWebsites.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredWebsites.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  // ৩. পেইজ পরিবর্তন করার ফাংশন
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: "smooth" }); // ক্লিক করলে একটু উপরে স্ক্রল হবে
  };

  return (
    <div className="flex flex-col gap-10">
      <FilterBar
        setSearchQuery={(q) => {
          setSearchQuery(q);
          setCurrentPage(1);
        }}
        activeCategory={activeCategory}
        setActiveCategory={(c) => {
          setActiveCategory(c);
          setCurrentPage(1);
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {currentItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {currentItems.map((site) => (
                <PremiumSiteCard key={site._id || site.title} site={site} />
              ))}
            </div>

            {/* --- Pagination UI --- */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:bg-gray-50 disabled:opacity-30 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400"
                >
                  <ChevronLeft size={18} />
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`h-10 w-10 rounded-lg text-sm font-bold transition-all ${
                      currentPage === index + 1
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none"
                        : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:bg-gray-50 disabled:opacity-30 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex h-60 flex-col items-center justify-center text-gray-400">
            <p className="text-lg font-medium">No results found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebsiteGrid;

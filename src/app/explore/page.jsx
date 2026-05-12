"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Filter, LayoutGrid, ListFilter } from "lucide-react";
import PremiumSiteCard from "@/components/HomePage/PremiumSiteCard";
import { getWebsites } from "@/lib/data";

const ExplorePage = () => {
  const [view, setView] = useState("grid");
  const [selectedTech, setSelectedTech] = useState([]);
  const [sortBy, setSortBy] = useState("Latest");
  const [allPortfolios, setAllPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  // গুরুত্বপূর্ণ ১৬টি ট্যাগ যা ডিরেক্টরি অনুযায়ী বেস্ট
  const coreTags = [
    "#Nextjs",
    "#React",
    "#Tailwind",
    "#TypeScript",
    "#ThreeJS",
    "#Animation",
    "#FramerMotion",
    "#Minimalist",
    "#Fullstack",
    "#UI",
    "#UX",
    "#Design",
    "#JavaScript",
    "#Creative",
    "#Performance",
    "#Nodejs",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWebsites();
        setAllPortfolios(data);
      } catch (error) {
        console.error("Data fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredPortfolios = useMemo(() => {
    let result = [...allPortfolios];

    // ১. টেকনোলজি ফিল্টার (Multiple Selection Logic)
    if (selectedTech.length > 0) {
      result = result.filter((site) => {
        // 'every' ব্যবহার করলে সবকয়টি ট্যাগ থাকা বাধ্যতামূলক (Strict Filter)
        // 'some' ব্যবহার করলে যে কোনো একটি ট্যাগ মিললেই দেখাবে (Flexible Filter)
        return selectedTech.every((tech) => site.tags.includes(tech));
      });
    }

    // ২. সর্টিং লজিক (সবগুলো ফিল্টার হওয়ার পর সর্ট হবে)
    if (sortBy === "Latest") {
      result.sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt) : 0;
        const dateB = b.createdAt ? new Date(b.createdAt) : 0;
        return dateB - dateA;
      });
    } else if (sortBy === "Featured") {
      result.sort((a, b) => {
        if (a.featured === b.featured) return 0;
        return a.featured ? -1 : 1;
      });
    }

    return result;
  }, [selectedTech, sortBy, allPortfolios]);

  const handleTechChange = (tech) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-sm font-bold uppercase tracking-widest text-foreground animate-pulse">
          Loading Directory...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <header className="border-b border-gray-100 py-12 dark:border-gray-800/50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground md:text-5xl">
                Explore{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  Directory
                </span>
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Showing {filteredPortfolios.length} portfolios based on your
                filters.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* ভিউ সুইচ */}
              <div className="flex rounded-sm border border-gray-200 p-1 dark:border-gray-800">
                <button
                  onClick={() => setView("grid")}
                  className={`p-1.5 transition-all ${view === "grid" ? "bg-foreground text-background" : "text-gray-400"}`}
                >
                  <LayoutGrid size={18} />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-1.5 transition-all ${view === "list" ? "bg-foreground text-background" : "text-gray-400"}`}
                >
                  <ListFilter size={18} />
                </button>
              </div>

              {/* সর্টিং ড্রপডাউন */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-sm border border-gray-200 bg-background px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground outline-none dark:border-gray-800"
              >
                <option value="Latest">Recently Added</option>
                <option value="Featured">Hand Picked / Featured</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* সাইডবার */}
          <aside className="w-full lg:w-64">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground">
                  <Filter size={14} /> Top Technologies
                </h3>
                <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-col lg:gap-3">
                  {coreTags.map((tech) => (
                    <label
                      key={tech}
                      className="flex cursor-pointer items-center gap-3 group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTech.includes(tech)}
                        onChange={() => handleTechChange(tech)}
                        className="h-4 w-4 rounded-none border-gray-300 accent-indigo-600 dark:border-gray-700"
                      />
                      <span
                        className={`text-[13px] transition-colors ${selectedTech.includes(tech) ? "text-foreground font-bold" : "text-muted-foreground group-hover:text-foreground"}`}
                      >
                        {tech.replace("#", "")}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {selectedTech.length > 0 && (
                <button
                  onClick={() => setSelectedTech([])}
                  className="text-[10px] font-bold uppercase tracking-tighter text-indigo-600 dark:text-indigo-400 underline"
                >
                  Reset Selection
                </button>
              )}
            </div>
          </aside>

          {/* গ্রিড ডিসপ্লে */}
          <div className="flex-1">
            {filteredPortfolios.length > 0 ? (
              <div
                className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}
              >
                {filteredPortfolios.map((site, index) => (
                  <PremiumSiteCard key={index} site={site} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border border-dashed border-gray-200 dark:border-gray-800 rounded-sm">
                <p className="text-muted-foreground">
                  No matches found for your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;

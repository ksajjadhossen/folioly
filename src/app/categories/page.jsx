import Link from "next/link";
import { getCategories } from "@/lib/data";
import { ChevronRight, Hash, Folder } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    // আপনার CSS ভেরিয়েবল অনুযায়ী ব্যাকগ্রাউন্ড এবং টেক্সট কালার
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Header Section */}
      <header className="border-b border-gray-100 py-20 dark:border-gray-800/60">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">
              Browse{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Categories
              </span>
            </h1>
            {/* লাইট মোডে ধূসর লিখা (slate-500) যা সাদা ব্যাকগ্রাউন্ডে সুন্দর দেখাবে */}
            <p className="mt-6 text-base leading-relaxed text-slate-500 dark:text-slate-400">
              Explore our curated directory organized by technologies,
              frameworks, and design styles. Find the best tools for your next
              big project.
            </p>
          </div>
        </div>
      </header>

      {/* Categories Grid */}
      <main className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/explore?tech=${encodeURIComponent(category.name)}`}
              // কার্ড ডিজাইন: লাইট মোডে খুব হালকা বর্ডার এবং হোভারে হালকা শ্যাডো
              className="group relative flex flex-col justify-between border border-gray-100 bg-[var(--background)] p-6 transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/5 dark:border-gray-800 dark:hover:border-indigo-500 rounded-sm"
            >
              <div className="flex items-start justify-between">
                {/* আইকন বক্স */}
                <div className="inline-flex h-12 w-12 items-center justify-center border border-gray-100 bg-white text-indigo-600 shadow-sm transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:border-gray-700 dark:bg-slate-800 dark:group-hover:bg-indigo-500">
                  <Hash size={22} />
                </div>
                <ChevronRight
                  className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-indigo-600 dark:text-gray-600 dark:group-hover:text-indigo-400"
                  size={20}
                />
              </div>

              <div className="mt-8">
                {/* ক্যাটাগরি নাম */}
                <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--foreground)]">
                  {category.name.replace("#", "")}
                </h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                  {/* প্রজেক্ট কাউন্ট: লাইট মোডে ধূসর ফন্ট */}
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                    {category.count}{" "}
                    {category.count > 1 ? "Resources" : "Resource"}
                  </p>
                </div>
              </div>

              {/* নিচের ডেকোরেটিভ লাইন */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-indigo-600 transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {categories.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 border border-dashed border-gray-200 dark:border-gray-800 rounded-sm">
            <Folder
              className="mb-4 text-gray-300 dark:text-gray-700"
              size={48}
            />
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
              No categories found.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

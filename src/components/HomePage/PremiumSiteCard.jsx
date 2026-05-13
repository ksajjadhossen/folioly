"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Sparkles, Bookmark } from "lucide-react";
import { toast } from "react-toastify";

const PremiumSiteCard = ({ site }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  // মাউন্ট হওয়ার সময় চেক করা এই সাইটটি বুকমার্ক করা আছে কিনা
  useEffect(() => {
    if (!site?._id) return;

    try {
      const savedBookmarks =
        JSON.parse(localStorage.getItem("bookmarks")) || [];
      // Optional chaining (?.) এবং validity check যোগ করা হয়েছে এরর এড়াতে
      const exist = savedBookmarks.some((fav) => fav && fav._id === site._id);
      setIsBookmarked(exist);
    } catch (error) {
      console.error("Error reading bookmarks from localStorage", error);
    }
  }, [site?._id]);

  if (!site) return null;

  // বুকমার্ক টগল ফাংশন
  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation(); // কার্ডের মেইন লিঙ্ক যেন ট্রিগার না হয়

    try {
      const savedBookmarks =
        JSON.parse(localStorage.getItem("bookmarks")) || [];

      // ডাটাবেস বা লোকাল স্টোরেজ থেকে আসা নাল ভ্যালু ফিল্টার আউট করা
      const cleanBookmarks = savedBookmarks.filter((item) => item && item._id);

      let updatedBookmarks;

      if (isBookmarked) {
        updatedBookmarks = cleanBookmarks.filter((fav) => fav._id !== site._id);
        toast.info("Removed from bookmarks");
      } else {
        updatedBookmarks = [...cleanBookmarks, site];
        toast.success("Added to bookmarks!");
      }

      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      setIsBookmarked(!isBookmarked);

      // লোকাল স্টোরেজ আপডেট ইভেন্ট ডিসপ্যাচ করা (অন্য কম্পোনেন্ট লিসেন করার জন্য)
      window.dispatchEvent(new Event("storage_updated"));
    } catch (error) {
      toast.error("Could not save bookmark");
    }
  };

  const handleImageError = (e) => {
    e.target.src = "/placeholder.jpg";
  };

  return (
    <div className="relative h-full w-full group">
      {/* Fancy Glow Effect */}
      <div className="absolute -inset-0.5 rounded-[12px] bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20 dark:group-hover:opacity-10" />

      {/* Main Card Container */}
      <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[12px] border border-gray-200 bg-background transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-2 group-hover:border-indigo-500/30 dark:border-gray-800/60 dark:group-hover:border-indigo-400/20">
        {/* Clickable Overlay */}
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 cursor-pointer"
        />

        {/* Image Section */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-gray-100 dark:border-gray-800/50">
          {site.featured && (
            <div className="absolute left-3 top-3 z-30 flex items-center gap-1.5 rounded-md bg-gray-900 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm dark:bg-white dark:text-gray-900">
              <Sparkles
                size={10}
                className="text-amber-400 dark:text-amber-500"
              />
              Featured
            </div>
          )}
          <img
            src={site.image || "/placeholder.jpg"}
            alt={site.title}
            className="h-full w-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
            onError={handleImageError}
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-grow flex-col p-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[16px] font-bold tracking-tight text-foreground line-clamp-1">
              {site.title}
            </h3>

            {/* Icons Area */}
            <div className="relative z-30 flex items-center gap-2.5">
              {/* Bookmark Button */}
              <button
                onClick={handleBookmark}
                className={`transition-colors duration-300 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  isBookmarked
                    ? "text-indigo-500"
                    : "text-gray-400 hover:text-indigo-500"
                }`}
                title={isBookmarked ? "Remove Bookmark" : "Bookmark this site"}
              >
                <Bookmark
                  size={18}
                  fill={isBookmarked ? "currentColor" : "none"}
                />
              </button>

              <a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-indigo-500 dark:hover:text-indigo-400 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-indigo-500 dark:hover:text-indigo-400 p-1"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <p className="mt-2 flex-grow text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
            {site.description}
          </p>

          {site.tags && site.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5 pt-4 border-t border-gray-50 dark:border-gray-800/40">
              {site.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-secondary/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                >
                  {tag.replace("#", "")}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PremiumSiteCard;

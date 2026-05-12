"use client"; // এটি অবশ্যই একদম উপরে থাকতে হবে

import { ExternalLink, Sparkles } from "lucide-react";

const PremiumSiteCard = ({ site }) => {
  if (!site) return null;

  // ইমেজ লোড না হলে ডিফল্ট ছবি সেট করার ফাংশন
  const handleImageError = (e) => {
    e.target.src = "/placeholder.jpg";
  };

  return (
    <div className="relative h-full w-full group">
      {/* ফ্যান্সি গ্লো ইফেক্ট */}
      <div className="absolute -inset-0.5 rounded-[12px] bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30 dark:group-hover:opacity-20" />

      <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[10px] border border-gray-100 bg-white shadow-sm transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-3 group-hover:border-indigo-100 dark:border-gray-800/60 dark:bg-gray-950">
        {/* Clickable Overlay */}
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 cursor-pointer"
        />

        {/* Image Section */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900">
          {site.featured && (
            <div className="absolute left-3 top-3 z-30 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-900 backdrop-blur-md dark:bg-gray-900/90 dark:text-white">
              <Sparkles size={10} className="text-amber-500" />
              Featured
            </div>
          )}
          <img
            src={site.image || "/placeholder.jpg"}
            alt={site.title}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
            onError={handleImageError} // এখন এটি কাজ করবে কারণ আমরা 'use client' ব্যবহার করেছি
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-grow flex-col p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-[15px] font-bold tracking-tight text-gray-900 dark:text-white">
              {site.title}
            </h3>
            <div className="relative z-30 flex items-center gap-3">
              {/* GitHub SVG Icon */}
              <a
                href={site.githubUrl}
                target="_blank"
                className="text-gray-400 transition-colors hover:text-indigo-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
                className="text-gray-400 transition-colors hover:text-indigo-500"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <p className="mt-2 flex-grow text-[12px] leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-2">
            {site.description}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-gray-50 dark:border-gray-800/50">
            {site.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-400 dark:bg-gray-900 dark:text-gray-500"
              >
                {tag.replace("#", "")}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumSiteCard;

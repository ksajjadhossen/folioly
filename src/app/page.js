// src/app/page.js

import FilterBar from "@/components/HomePage/FilterBar";
import Hero from "@/components/HomePage/Hero";
import WebsiteGrid from "@/components/HomePage/WebsiteGrid";
import { getWebsites } from "@/lib/data";

// This is a Server Component by default in Next.js 15
export default async function HomePage() {
  // 1. Fetch your 28 documents from MongoDB here
  const websites = await getWebsites();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Hero />

      <main className="pb-20">
        <WebsiteGrid websites={websites} />
      </main>
    </div>
  );
}

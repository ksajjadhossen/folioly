import Hero from "@/components/HomePage/Hero";
import WebsiteGrid from "@/components/HomePage/WebsiteGrid";
import { getWebsites } from "@/lib/data";

export default async function HomePage() {
  const websites = await getWebsites();
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      <Hero />

      <main className="pb-20">
        <WebsiteGrid websites={websites} />
      </main>
    </div>
  );
}

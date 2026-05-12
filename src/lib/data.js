import fs from "fs/promises";
import path from "path";

export async function getWebsites() {
  try {
    const filePath = path.join(process.cwd(), "src/lib/data.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const websites = JSON.parse(jsonData);

    console.log("Total Websites Loaded:", websites.length);
    return websites;
  } catch (error) {
    console.error("JSON Read Error:", error);
    return [];
  }
}

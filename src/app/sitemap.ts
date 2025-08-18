// app/sitemap.ts
import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const baseUrl = "https://example.com";
const appDir = path.join(process.cwd(), "app");

function getRoutes(dir: string, parent = ""): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let routes: string[] = [];

    for (const entry of entries) {
        if (entry.isDirectory()) {
            routes = routes.concat(getRoutes(path.join(dir, entry.name), parent + "/" + entry.name));
        } else if (entry.name === "page.tsx" || entry.name === "page.jsx") {
            routes.push(parent || "/");
        }
    }
    return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = getRoutes(appDir);

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "/" ? 1 : 0.8,
    }));
}

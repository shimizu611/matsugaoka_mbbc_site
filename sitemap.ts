import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://matsugaoka-mbbc.com", 
            lastModified: new Date()
        }
    ]
}
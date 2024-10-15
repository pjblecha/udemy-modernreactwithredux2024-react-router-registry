import type { PackageSummary } from "../types/packageSummary";

interface SearchResponse {
    objects: {
        package: {
            name: string;
            description: string;
            version: string;
            keywords: string[];
        };
    }[];
}

export async function searchPackages(term: string): Promise<PackageSummary[]> {
    const searchUrl = "https://registry.npmjs.org";
    const packageSearch = "/-/v1/search?text=";

    const res = await fetch(`${searchUrl}${packageSearch}${term}`);
    const data: SearchResponse = await res.json();
    return data.objects.map(
        ({ package: { name, description, version, keywords } }) => {
            return {
                name,
                description,
                version,
                keywords,
            };
        }
    );
}

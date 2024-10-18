import { PackageDetails } from "../types/packageDetails";

const FEATURED_PACKAGES = [
    'react',
    'typescript',
    'esbuild',
    'vite',
]

export async function getFeaturedPackages() {
    const pkgPromises = FEATURED_PACKAGES.map(async(name) => {
        const res = await fetch(`https://registry.npmjs.org/${name}`);
        return res.json();
    });
    const data = await Promise.all(pkgPromises);
    return data as PackageDetails[];
}
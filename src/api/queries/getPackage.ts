import { PackageDetails } from "../types/packageDetails";

export async function getPackage(name: string): Promise<PackageDetails> {
    const searchUrl = "https://registry.npmjs.org";
    const regUrl = `${searchUrl}/${name}`;
    const res = await fetch(regUrl);
    const data = await res.json();
    return data as PackageDetails;
}
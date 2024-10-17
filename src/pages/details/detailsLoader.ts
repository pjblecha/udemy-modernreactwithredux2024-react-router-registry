import { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";
import { PackageDetails } from "../../api/types/packageDetails";

export interface LoaderArgs {
    params: Params;
}

export interface DetailsLoaderResult {
    details: PackageDetails;
}

export async function detailsLoader({
    params,
}: LoaderArgs): Promise<DetailsLoaderResult> {
    const { name } = params;
    if (!name) throw new Error("No package name provided.");
    const details = await getPackage(name);
    return {
        details,
    };
}

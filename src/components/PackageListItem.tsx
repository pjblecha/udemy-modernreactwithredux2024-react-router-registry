import { Link } from "react-router-dom";
import type { PackageSummary } from "../api/types/packageSummary";

interface PackageListItemProps {
    pkg: PackageSummary;
}

export default function PackageListItem({ pkg }: PackageListItemProps) {
    const renderedKeywords = (pkg.keywords || []).map((keyword) => {
        return (
            <div
                key={keyword}
                className="border py-0.5 px-1 text-xs bg-slate-200 rounded"
            >
                {keyword}
            </div>
        );
    });

    return (
        <div className="border p-4 rounded flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <Link
                    to={`/packages/${pkg.name}`}
                    className="text-xl font-bold"
                >
                    {pkg.name}
                </Link>
                <p className="text-sm text-gray-500">{pkg.description}</p>
                <div className="flex gap-1">{renderedKeywords}</div>
            </div>
            <div className="mr-6">
                <Link
                    to={`/packages/${pkg.name}`}
                    className="py-2 px-3 rounded bg-black text-white text-lg"
                >
                    View
                </Link>
            </div>
        </div>
    );
}

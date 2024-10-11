import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage";

const searchUrl = "https://registry.npmjs.org";
const packageSearch = "/-/v1/search?text=";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/search",
                element: <SearchPage />,
                loader: async ({ request }) => {
                    const { searchParams } = new URL(request.url);
                    const term = searchParams.get("term");
                    if(!term) throw new Error("No search term provided.");
                    const res = await fetch(
                      `${searchUrl}${packageSearch}${term}`
                    );
                    const data = await res.json();
                    return data.objects;
                },
            },
            {
                path: "/packages/:name",
                element: <DetailsPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

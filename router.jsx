import { createBrowserRouter } from "react-router-dom";
import Body from "./src/layout/Body";
import FileHandling from "./src/pages/projects/FileHandling";
import HamNoSysPlay from "./src/pages/projects/HamNoSysPlay";
import ErrorPage from "./src/pages/ErrorPage";
import UnderDeveloping from "./src/pages/UnderDeveloping";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "dashboard/*",
                element: <UnderDeveloping />
            },
            {
                path: "projects",
                element: <FileHandling />
            },
            {
                path: "projects/file-handling",
                element: <FileHandling />
            },
            {
                path: "projects/hamnosys-play",
                element: <HamNoSysPlay />
            },
            {
                path: "/projects/submenu_3",
                element: <UnderDeveloping />
            },
            {
                path: "get-brief",
                element: <UnderDeveloping />
            },
            {
                path: "about-me",
                element: <UnderDeveloping />
            },
            {
                path: "contact",
                element: <UnderDeveloping />
            }
        ]

    }
])

export default router;
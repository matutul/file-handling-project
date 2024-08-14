import { createBrowserRouter } from "react-router-dom";
// import App from "./src/App";
import Body from "./src/layout/Body";
import FileHandling from "./src/pages/projects/FileHandling";
import HamNoSysPlay from "./src/pages/projects/HamNoSysPlay";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
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
            }
        ]

    }
])

export default router;
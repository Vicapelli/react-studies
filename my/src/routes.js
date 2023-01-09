import { createBrowserRouter } from "react-router-dom";
// import Main from "./components/main"
import Game from "./components/game"
import Sidebar from "./components/sidebar"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Sidebar />
    },
    {
        path: "game",
        element: <Game />,
    },
]);

export default router
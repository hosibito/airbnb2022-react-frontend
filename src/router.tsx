import { createBrowserRouter } from "react-router-dom";
import Root from "./cpmponents/Root";
import Home from "./routers/Home";
import NotFound from "./routers/NotFound";
import Users from "./routers/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "users",
            element: <Users />,
          },
        ],
    },
    
]);

export default router;

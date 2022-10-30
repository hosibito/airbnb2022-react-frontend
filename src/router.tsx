import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import GithubConfirm from "./routers/GithubConfirm";
import Home from "./routers/Home";
import KakaoConfirm from "./routers/KakaoConfirm";
import NotFound from "./routers/NotFound";
import RoomDetail from "./routers/RoomDetail";
import UploadRoom from "./routers/UploadRoom";
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
          {
            path: "rooms/upload",
            element: <UploadRoom />,
          },
          {
            path: "rooms/:roomPk",
            element: <RoomDetail />,
          },
          {
            path: "social",
            children: [
              {
                path: "github",
                element: <GithubConfirm />,
              },
              {
                path: "kakao",
                element: <KakaoConfirm />,
              },
            ],
          },
        ],
    },
    
]);

export default router;

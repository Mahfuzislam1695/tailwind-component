import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import BackgroundImageCom from "../../views/Components/BackgroundImage/BackgroundImage";
import Home from "../../views/Components/Home";
import Team from "../../views/Components/Team/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/team",
        element: <Team></Team>,
      },
    ],
  },
  {
    path: "/bg",
    element: <BackgroundImageCom></BackgroundImageCom>,
  },
  //   {
  //     path: "/",
  //     element: <Main></Main>,
  //     children: [
  //       {
  //         path: "/home",
  //         element: <Home></Home>,
  //       },
  //     ],
  //   },
]);

export default router;

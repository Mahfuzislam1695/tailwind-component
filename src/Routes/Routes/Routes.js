import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import BackgroundImageCom from "../../views/Components/BackgroundImage/BackgroundImage";
import Home from "../../views/Components/Home";
import Integrate from "../../views/Components/Pailot/Integrate/Integrate";
import Popup from "../../views/Components/Pailot/Popup";
import Publish from "../../views/Components/Pailot/Publish/Publish";
import Segment from "../../views/Components/Pailot/Segment/Segment";
import SwitchButton from "../../views/Components/Pailot/Segment/SwitchButton";
import SettingCom from "../../views/Components/SettingCom/SettingCom";
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
  {
    path: "/p",
    element: <Popup></Popup>,
  },
  {
    path: "/seg",
    element: <Segment></Segment>,
  },
  {
    path: "/int",
    element: <Integrate></Integrate>,
  },
  {
    path: "/pub",
    element: <Publish></Publish>,
  },
  {
    path: "/sw",
    element: <SwitchButton></SwitchButton>,
  },
  {
    path: "/se",
    element: <SettingCom></SettingCom>,
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

import { RouteObject } from "react-router-dom";

import Unhandled from "../modules/errors/unhandled";
import Home from "../modules/home/home";

export const routesForPublic: RouteObject[] = [
  {
    path: "/",
    id: "home",
    errorElement: <Unhandled />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

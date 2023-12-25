import { createBrowserRouter } from "react-router-dom";
import { routesForPublic } from "./public.routes";
import NotFound from "../modules/errors/not-found";

const router = createBrowserRouter([
  ...routesForPublic,
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;

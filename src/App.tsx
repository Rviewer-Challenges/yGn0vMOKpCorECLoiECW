import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./components/containers/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
}
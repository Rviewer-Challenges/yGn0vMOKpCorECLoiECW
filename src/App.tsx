import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./components/containers/Home/Home";
import { DifficultyLevelSelector } from "./components/containers/DifficultyLevelSelector/DifficultyLevelSelector";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/select-difficulty",
    element: <DifficultyLevelSelector />
  },
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
}
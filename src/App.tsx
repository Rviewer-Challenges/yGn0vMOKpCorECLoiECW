import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Components
import { Home } from "./components/containers/Home/Home";
import { DifficultyLevelSelector } from "./components/containers/DifficultyLevelSelector/DifficultyLevelSelector";
import { Game } from "./components/containers/Game/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/select-difficulty",
    element: <DifficultyLevelSelector />
  },
  {
    path: "/game",
    element: <Game />
  },
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
}
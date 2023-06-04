import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const MainLayout = lazy(() => import("../layout/MainLayout"));

const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    id: "Layout",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        id: "Movies",
        element: <MoviesPage />,
      },
      {
        path: "/movies/:movieId",
        id: "Movie",
        element: <MovieDetailsPage />,
      },
    ],
  },
]);

export default router;

import {
    createBrowserRouter,
    Navigate,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../heroes";
import { LoginPage } from "../auth";


  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <HeroesApp />,
      children: [
        { path: "marvel", element: <MarvelPage /> },
        { path: "dc", element: <DcPage /> },
        { path: "search", element: <SearchPage /> },
        { path: "hero/:heroId", element: <HeroPage /> },
        { path: "/*", element: <Navigate to="/marvel" /> },
      ],
    },
  ]);

export const AppRouter = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

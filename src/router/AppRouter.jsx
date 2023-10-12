import {
    createBrowserRouter,
    Navigate,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../heroes";
import { AuthProvider, LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <PublicRoute>
            <LoginPage />
        </PublicRoute>),
    },
    {
      path: "/",
      element: (
        <PrivateRoute>
            <HeroesApp />
        </PrivateRoute>
      ),
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
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  )
}

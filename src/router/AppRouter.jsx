import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DcPage";
import { SearchPage } from "../heroes/pages/SearchPage";
import { HeroPage } from "../heroes/pages/HeroPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { AuthProvider } from "../auth/context/AuthProvider";


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

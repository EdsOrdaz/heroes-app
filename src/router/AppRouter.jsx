import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../heroes/pages";
import { LoginPage } from "../auth/pages/LoginPage";
import { AuthProvider } from "../auth/context/AuthProvider";
import { SearchProvider } from "../ui/provider/SearchProvider";


  const router = createBrowserRouter([
    {
      path: "./login",
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
        { path: "/marvel", element: <MarvelPage />},
        { path: "/dc", element: <DcPage /> },
        { path: "/search", element: <SearchPage /> },
        { path: "/hero/:heroId", element: <HeroPage /> },
        { path: "/*", element: <Navigate to="/marvel" /> },
      ],
    },
  ]);

export const AppRouter = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <RouterProvider router={router} />
        </SearchProvider>
    </AuthProvider>
  )
}

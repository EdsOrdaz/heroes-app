import {
    createBrowserRouter,
    Navigate,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/router/HeroesRoutes";


export const AppRouter = () => {
  return (
    <Routes>
                
        <Route path='login' element={
          <PublicRoute>
            < Login />
          </PublicRoute>
        }/>

        {/* Al poner /* garantizo que cualquier ruta que no sea login me lleve a HeroresRoutes */}
          <Route path='*' element={
            <PrivateRoute>
              {/* Al poner el componente HeroesRoutes aqui garantizo que quien no se encuentre loggeado no pueda acceder a estas rutas*/}
              <HeroesRoutes />
            </PrivateRoute>
        } />              
    </Routes>
  )
}

import { Outlet } from "react-router-dom"
import { Navbar } from "./ui/components/NavBar"

export const HeroesApp = () => {
  return (
    <>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
    </>
  )
}

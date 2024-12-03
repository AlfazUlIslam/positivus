import { Outlet } from "react-router"
import { NavBar } from "../../components"
import { Footer } from "../../sections"

const Layout = () => {
  return (
    // Layout
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}
export default Layout
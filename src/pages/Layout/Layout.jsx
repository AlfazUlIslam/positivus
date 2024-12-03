import { Outlet } from "react-router"
import { NavBar } from "../../components"
import { Footer } from "../../sections"

const Layout = () => {
  return (
    // Layout
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}
export default Layout
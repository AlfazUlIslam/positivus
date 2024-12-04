import { useState } from "react"
import { Container } from "../../containers"
import { NavLink, ReqQuoteBtn } from ".."
import { logo } from "../../assets"
import "./NavBar.css"

const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(prev => !prev)
    }

    return (
        // Nav bar
        <nav>
            {/* py-12 */}
            <Container styles={`p-6 flex justify-between 
            items-center xl:w-[1400px]`}>
                {/* Brand logo */}
                <div>
                    {/* w-auto */}
                    <img
                        className="w-[120px]"
                        src={logo}
                        alt="Positivus Logo"
                    />
                </div>
                {/* Nav links */}
                <ul className="hidden md:flex md:justify-center 
                md:items-center md:gap-[40px]">
                    <NavLink linkRef={"#home"} content={"Home"} />
                    <NavLink linkRef={"#services"} content={"Services"} />
                    <NavLink linkRef={"#case-studies"} content={"Case Studies"} />
                    <NavLink linkRef={"#testimonials"} content={"Testimonials"} />
                    <NavLink linkRef={"#contact-us"} content={"Contact Us"} />
                    <ReqQuoteBtn />
                </ul>
                {/* Mobile menu container */}
                <div className="relative md:hidden">
                    {/* Mobile menu button */}
                    <button 
                        className={`mob_menu_btn ${toggle ? "btn_toggled" : ""}`}
                        onClick={handleToggle}    
                    >
                        <div className="line-one"></div>
                        <div className="line-two"></div>
                        <div className="line-three"></div>
                    </button>
                    {/* Mobile menu */}
                    <ul className={`${toggle ? "flex" : "hidden"} rounded-md 
                    flex-col items-center gap-2 absolute top-14 right-[0.2rem] 
                    p-4 bg-white border border-slate-100 shadow-xl slide_up`}> 
                        <NavLink linkRef={"#home"} content={"Home"} />
                        <NavLink linkRef={"#services"} content={"Services"} />
                        <NavLink linkRef={"#case-studies"} content={"Case Studies"} />
                        <NavLink linkRef={"#testimonials"} content={"Testimonials"} />
                        <NavLink linkRef={"#contact-us"} content={"Contact Us"} />
                        <ReqQuoteBtn />
                    </ul>
                </div>
            </Container>
        </nav>
    )
}
export default NavBar
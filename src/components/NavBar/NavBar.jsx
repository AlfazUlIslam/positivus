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
            items-center xl:w-[1400px] xl:py-12`}>
                {/* Brand logo */}
                <div>
                    {/* w-auto */}
                    <img
                        className="w-[120px] w-[160px] 
                        lg:w-[160px] xl:w-auto"
                        src={logo}
                        alt="Positivus Logo"
                    />
                </div>
                {/* Nav links */}
                <ul className="hidden lg:flex lg:justify-center 
                lg:items-center lg:gap-[40px]">
                    <NavLink linkRef={"#home"} content={"Home"} />
                    <NavLink linkRef={"#services"} content={"Services"} />
                    <NavLink linkRef={"#case-studies"} content={"Case Studies"} />
                    <NavLink linkRef={"#testimonials"} content={"Testimonials"} />
                    <NavLink linkRef={"#contact-us"} content={"Contact Us"} />
                    <ReqQuoteBtn />
                </ul>
                {/* Mobile menu container */}
                <div className="relative lg:hidden">
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
                    p-4 bg-white border border-slate-100 shadow-xl slide_up 
                    sm:gap-4 sm:p-6`}> 
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
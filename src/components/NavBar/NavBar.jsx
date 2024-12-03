import { Container } from "../../containers"
import NavLink from "../NavLink/NavLink"
import { logo } from "../../assets"

const NavBar = () => {
  return (
    // Nav bar
    <nav>
        <Container styles={`px-6 py-12 flex justify-between 
        items-center xl:w-[1400px]`}>
            {/* Brand logo */}
            <div>
                <img
                    src={logo}
                    alt="Positivus Logo"
                />
            </div>
            {/* Nav links */}
            <ul className="flex justify-center items-center 
            gap-[40px]">
                <NavLink linkRef={"/"}>
                    Home
                </NavLink>
                <NavLink linkRef={"/about-us"}>
                    About Us
                </NavLink>
                <NavLink linkRef={"/services"}>
                    Services
                </NavLink>
                <NavLink linkRef={"/use-cases"}>
                    Use Cases
                </NavLink>
                <NavLink linkRef={"/pricing"}>
                    Pricing
                </NavLink>
                <NavLink linkRef={"/blog"}>
                    Blog
                </NavLink>
                {/* Nav button */}
                <button className="w-[230px] h-[70px] 
                rounded-[14px] border border-positivusDark 
                font-spaceGrotesk font-normal text-[20px] 
                text-black cursor-pointer transition-all 
                duration-1000 hover:bg-positivusDark 
                hover:text-white active:scale-90">
                    Request a quote
                </button>
            </ul>
        </Container>
    </nav>
  )
}
export default NavBar
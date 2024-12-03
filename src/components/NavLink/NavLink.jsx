import { Link } from "react-router"

const NavLink = (props) => {
    const { linkRef, children } = props
        
    return (
        // Nav link
        <li className="relative font-spaceGrotesk 
        font-normal text-[20px] leading-[28px] text-black 
        after:content-[''] after:w-[0%] after:h-[1px] 
        after:bg-black after:absolute after:left-0 
        after:bottom-[-3px] after:transition-all 
        after:duration-1000 after:hover:w-[100%]">
            <Link to={linkRef}>
                {children}
            </Link>
        </li>
    )
}
export default NavLink
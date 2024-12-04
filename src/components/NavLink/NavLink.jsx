const NavLink = (props) => {
    const { linkRef, content } = props
        
    return (
        // Nav link
        // text-[20px]
        <li className="relative font-spaceGrotesk 
        font-normal text-[14px] leading-[28px] text-black 
        after:content-[''] after:w-[0%] after:h-[1px] 
        after:bg-black after:absolute after:left-0 
        after:bottom-[-3px] after:transition-all 
        after:duration-1000 after:hover:w-[100%]">
            <a href={linkRef}>
                {content}
            </a>
        </li>
    )
}
export default NavLink
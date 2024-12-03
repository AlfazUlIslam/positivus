const NavLink = (props) => {
    const { linkRef, content } = props
        
    return (
        // Nav link
        <li className="">
            <Link to={linkRef}>
                {content}
            </Link>
        </li>
    )
}
export default NavLink
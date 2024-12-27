const FooterText = (props) => {
    const { content } = props
        
    return (
        // Footer text
        <p className="font-spaceGrotesk font-normal text-[18px] text-white">
            {content}
        </p>
    )
}
export default FooterText
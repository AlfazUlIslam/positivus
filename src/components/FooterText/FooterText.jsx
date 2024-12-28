const FooterText = (props) => {
    const { content } = props
        
    return (
        // Footer text
        // text-[18px]
        <p className="font-spaceGrotesk font-normal text-[14px] text-white">
            {content}
        </p>
    )
}
export default FooterText
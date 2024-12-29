const FooterText = (props) => {
    const { content } = props
        
    return (
        // Footer text
        <p className="font-spaceGrotesk font-normal text-[14px] 
        text-white sm:text-[18px] md:text-[12px] lg:text-[14px] 
        xl:text-[18px]">
            {content}
        </p>
    )
}
export default FooterText
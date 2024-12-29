import FooterText from "../FooterText/FooterText"

const FooterLink = (props) => {
    const { linkRef, content } = props
        
    return (
        // Footer link
        <a 
            className="font-spaceGrotesk font-normal text-[14px] 
            text-white transition-all duration-1000 hover:underline 
            hover:underline-offset-4 sm:text-[18px] md:text-[12px] 
            lg:text-[14px] xl:text-[18px]"
            href={linkRef}>
            {/* <FooterText content={content} /> */}
            {content}
        </a>
    )
}
export default FooterLink
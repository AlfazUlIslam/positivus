import FooterText from "../FooterText/FooterText"

const FooterLink = (props) => {
    const { linkRef, content } = props
        
    return (
        // Footer link
        <a 
            className="font-spaceGrotesk font-normal text-[18px] text-white 
            transition-all duration-1000 hover:underline hover:underline-offset-4"
            href={linkRef}>
            {/* <FooterText content={content} /> */}
            {content}
        </a>
    )
}
export default FooterLink
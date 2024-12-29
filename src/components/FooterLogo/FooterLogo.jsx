const FooterLogo = (props) => {
    const { image, altText } = props
        
    return (
        // Footer logo
        <img 
            className="w-[25px] sm:w-auto md:w-[20px] 
            lg:w-[25px] xl:w-auto"
            src={image} 
            alt={altText} 
        />
    )
}
export default FooterLogo
const FooterLogo = (props) => {
    const { image, altText } = props
        
    return (
        // Footer logo
        // w-auto
        <img 
            className="w-[25px]"
            src={image} 
            alt={altText} 
        />
    )
}
export default FooterLogo
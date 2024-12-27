const FooterLogo = (props) => {
    const { image, altText } = props
        
    return (
        // Footer logo
        <img 
            src={image} 
            alt={altText} 
        />
    )
}
export default FooterLogo
const ArrowIcon = (props) => {
    const { image, altText } = props
        
    return (
        // Arrow icon
        // w-auto
        <img 
            className="w-[30px]"
            src={image} 
            alt={altText} 
        />
    )
}
export default ArrowIcon
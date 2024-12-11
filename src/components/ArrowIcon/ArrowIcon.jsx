const ArrowIcon = (props) => {
    const { image, altText } = props
        
    return (
        // Arrow icon
        <img 
            className="w-[25px] md:w-[30px] xl:w-auto"
            src={image} 
            alt={altText} 
        />
    )
}
export default ArrowIcon
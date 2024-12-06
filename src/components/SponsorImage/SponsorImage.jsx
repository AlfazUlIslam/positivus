const SponsorImage = (props) => {
    const { image, altText } = props
        
    return (
        // w-auto
        <img 
            className="sm:w-[150px] md:w-[100px] 
            lg:w-[130px] xl:w-auto"
            src={image} 
            alt={altText} 
        />
    )
}
export default SponsorImage
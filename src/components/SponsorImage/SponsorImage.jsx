const SponsorImage = (props) => {
    const { imagePath, altText } = props
        
    return (
        <img 
            className="sm:w-[150px] md:w-[100px] 
            lg:w-[130px] xl:w-auto"
            src={imagePath} 
            alt={altText} 
        />
    )
}
export default SponsorImage
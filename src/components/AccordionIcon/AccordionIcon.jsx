const AccordionIcon = (props) => {
    const { image, altText } = props
        
    return (
        // Accordion icon
        <img 
            className="w-[25px] sm:w-[35px] lg:w-[40px] xl:w-auto" 
            src={image} 
            alt={altText} 
        />
    )
}
export default AccordionIcon
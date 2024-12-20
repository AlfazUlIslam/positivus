const AccordionIcon = (props) => {
    const { image, altText } = props
        
    return (
        // Accordion icon
        // w-auto
        <img 
            className="w-[25px]" 
            src={image} 
            alt={altText} 
        />
    )
}
export default AccordionIcon
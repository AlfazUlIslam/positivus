const Description = (props) => {
    const { styles, content } = props
        
    return (
        // Description
        <p className={`${styles} font-spaceGrotesk 
        font-normal text-[18px] text-black`}>
            {content}
        </p>
    )
}
export default Description
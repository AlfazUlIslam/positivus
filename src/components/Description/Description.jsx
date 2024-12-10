const Description = (props) => {
    const { styles, content } = props
        
    return (
        // Description
        // text-[18px]
        <p className={`${styles} font-spaceGrotesk 
        font-normal text-[14px] text-black`}>
            {content}
        </p>
    )
}
export default Description
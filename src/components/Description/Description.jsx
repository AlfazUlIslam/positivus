const Description = (props) => {
    const { styles, content } = props
        
    return (
        // Description
        <p className={`${styles} font-spaceGrotesk 
        font-normal text-[14px] text-black xl:text-[18px]`}>
            {content}
        </p>
    )
}
export default Description
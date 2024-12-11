const Title = (props) => {
    const { styles, content} = props

    return (
        // Title
        <h4 className={`${styles} rounded-[7px] 
        p-[6px] font-spaceGrotesk font-medium 
        text-[12px] md:text-[16px] lg:text-[18px] 
        xl:text-[30px] xl:p-[10px]`}>
            {content}
        </h4>
    )
}
export default Title
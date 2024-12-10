const Title = (props) => {
    const { styles, content} = props

    return (
        // Title
        // text-[30px] p-[10px]
        <h4 className={`${styles} rounded-[7px] 
        p-[6px] font-spaceGrotesk font-medium 
        text-[12px]`}>
            {content}
        </h4>
    )
}
export default Title
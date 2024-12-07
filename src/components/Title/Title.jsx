const Title = (props) => {
    const { styles, content} = props

    return (
        // Title
        <h4 className={`${styles} rounded-[7px] 
        p-[10px] font-spaceGrotesk font-medium 
        text-[30px]`}>
            {content}
        </h4>
    )
}
export default Title
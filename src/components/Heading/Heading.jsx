const Heading = (props) => {
    const { styles, content } = props
        
    return (
        // Heading
        <h3 className={`${styles} rounded-[7px] p-[10px] 
        bg-positivusGreen font-spaceGrotesk font-medium 
        text-[30px] text-black xl:text-[40px]`}>
            {content}
        </h3>
    )
}
export default Heading
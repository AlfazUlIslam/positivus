const Heading = (props) => {
    const { content } = props
        
    return (
        // Heading
        <h3 className="rounded-[7px] p-[10px] 
        bg-positivusGreen font-spaceGrotesk font-medium 
        text-[40px] text-black">
            {content}
        </h3>
    )
}
export default Heading
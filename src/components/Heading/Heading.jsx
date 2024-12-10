const Heading = (props) => {
    const { content } = props
        
    return (
        // Heading
        // rounded-[7px] p-[10px] text-[40px]
        <h3 className="rounded-[7px] p-[10px] 
        bg-positivusGreen font-spaceGrotesk font-medium 
        text-[30px] text-black">
            {content}
        </h3>
    )
}
export default Heading
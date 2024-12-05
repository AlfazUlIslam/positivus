const SectionBtn = (props) => {
    const { styles, content } = props
        
    return (
        // Section button
        <button className={`${styles} h-[50px] 
        rounded-[14px] bg-positivusDark font-spaceGrotesk 
        font-normal text-[14px] text-white cursor-pointer 
        transition-all duration-1000 hover:bg-positivusGreen 
        hover:text-black active:scale-90 sm:text-[20px] sm:h-[70px] 
        md:h-[50px] md:text-[14px] lg:h-[55px] lg:text-[18px] 
        xl:h-[70px] xl:text-[20px]`}>
            {content}
        </button>
    )
}
export default SectionBtn
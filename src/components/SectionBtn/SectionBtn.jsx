const SectionBtn = (props) => {
    const { styles, content } = props
        
    return (
        // Section button
        <button className={`${styles} h-[50px] 
        rounded-[14px] border 
        border-positivusDark font-spaceGrotesk 
        font-normal text-[14px] text-black 
        cursor-pointer transition-all duration-1000 
        hover:text-white 
        active:scale-90 sm:text-[16px] lg:text-[14px] 
        xl:h-[70px] xl:text-[20px]`}>
            {content}
        </button>
    )
}
export default SectionBtn
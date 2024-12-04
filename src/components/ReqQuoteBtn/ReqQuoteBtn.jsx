const ReqQuoteBtn = (props) => {
    const { content } = props
        
    return (
        // Request quote button
        // w-[230px] h-[70px] text-[20px]
        <button className="w-[150px] h-[50px] 
        rounded-[14px] border border-positivusDark 
        font-spaceGrotesk font-normal text-[14px] 
        text-black cursor-pointer transition-all 
        duration-1000 hover:bg-positivusDark 
        hover:text-white active:scale-90 
        sm:w-[180px] sm:text-[16px] lg:w-[150px] 
        lg:text-[14px] xl:w-[230px] xl:h-[70px] 
        xl:text-[20px]">
            Request a quote
        </button>
    )
}
export default ReqQuoteBtn
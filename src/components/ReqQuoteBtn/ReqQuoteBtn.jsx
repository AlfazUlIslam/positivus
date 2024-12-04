const ReqQuoteBtn = (props) => {
    const { content } = props
        
    return (
        // Request quote button
        // w-[230px] h-[70px] rounded-[14px] text-[20px]
        <button className="w-[150px] h-[50px] 
        rounded-[14px] border border-positivusDark 
        font-spaceGrotesk font-normal text-[14px] 
        text-black cursor-pointer transition-all 
        duration-1000 hover:bg-positivusDark 
        hover:text-white active:scale-90">
            Request a quote
        </button>
    )
}
export default ReqQuoteBtn
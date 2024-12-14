import { arrowGreenStripped } from "../../assets"

const Study = (props) => {
    const { styles, description } = props
        
    return (
        // Study
        <div className={`${styles} w-[260px] 
        px-[20px] py-[20px] flex flex-col 
        justify-start items-start gap-[20px] 
        sm:w-[400px] md:w-[260px] lg:w-[300px] 
        xl:w-auto xl:px-[64px] xl:py-0`}>
            {/* Study description */}
            <p className="w-[220px] font-spaceGrotesk 
            font-normal text-[12px] text-white sm:w-[300px] 
            sm:text-[16px] md:w-[200px] md:text-[12px] 
            lg:text-[14px] xl:w-auto xl:text-[18px]">
                {description}
            </p>
            {/* Learn more button */}
            <button className="border-r-[2px] pr-[10px]
            border-positivusDark flex justify-center 
            items-center gap-[15px] transition-all 
            duration-1000 hover:border-positivusGreen">
                {/* Learn more button text */}
                <span className="font-spaceGrotesk 
                font-normal text-[14px] text-positivusGreen 
                sm:text-[18px] md:text-[14px] xl:text-[20px]">
                    Learn more
                </span>
                {/* Striped arrow icon */}
                <img 
                    className="w-[15px] sm:w-[20px] 
                    md:w-[15px] xl:w-auto"
                    src={arrowGreenStripped} 
                    alt={"Green arrow"} 
                />
            </button>
        </div>
    )
}
export default Study
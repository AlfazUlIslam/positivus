import { arrowGreenStripped } from "../../assets"

const Study = (props) => {
    const { styles, elemIndex, description } = props
        
    return (
        // Study
        // ${elemIndex !== 0 ? "border-l-[1px] border-white" : ""} --
        // w-auto px-[64px] py-0
        <div className={`${styles} w-[260px] 
        px-[20px] py-[20px] flex flex-col 
        justify-start items-start gap-[20px]`}>
            {/* Study description */}
            {/* text-[18px] */}
            <p className="w-[220px] font-spaceGrotesk 
            font-normal text-[12px] text-white">
                {description}
            </p>
            {/* Learn more button */}
            <button className="border-r-[2px] pr-[10px]
            border-positivusDark flex justify-center 
            items-center gap-[15px] transition-all 
            duration-1000 hover:border-positivusGreen">
                {/* Learn more button text */}
                {/* text-[20px] */}
                <span className="font-spaceGrotesk 
                font-normal text-[14px] text-positivusGreen">
                    Learn more
                </span>
                {/* Striped arrow icon */}
                <img 
                    src={arrowGreenStripped} 
                    alt={"Green arrow"} 
                />
            </button>
        </div>
    )
}
export default Study
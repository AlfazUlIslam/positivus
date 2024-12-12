import { arrowGreenStripped } from "../../assets"

const Study = (props) => {
    const { styles, elemIndex, description } = props
        
    return (
        // Study
        <div className={`${styles} px-[64px] flex flex-col 
        justify-start items-start gap-[20px] 
        ${elemIndex !== 0 ? "border-l-[1px] border-white" : ""}`}>
            {/* Study description */}
            <p className="w-[286px] font-spaceGrotesk 
            font-normal text-[18px] text-white">
                {description}
            </p>
            {/* Learn more button */}
            <button className="flex justify-center 
            items-center gap-[15px]">
                {/* Learn more button text */}
                <span className="font-spaceGrotesk 
                font-normal text-[20px] text-positivusGreen">
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
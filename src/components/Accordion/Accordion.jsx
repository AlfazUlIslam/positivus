import { useState } from "react"
import { accordionData } from "../../data"
import { plusIcon, minusIcon } from "../../assets"
import "./Accordion.css"

const Accordion = () => {
    const [selected, setSelected] = useState(null)
    
    const handleSelected = (selectedID) => {
        setSelected(selected === selectedID ? null : selectedID)
    }

    return (
        // Accordion
        <div className="mt-[80px] space-y-[30px]">
            {
            accordionData && accordionData.length > 0 ? 
                accordionData.map((accordionDatum) => (
                    // Accordion item
                    <div className={`${selected === accordionDatum.id ? 
                    "bg-positivusGreen" : "bg-positivusGrey"} w-[100%] 
                    rounded-[45px] border border-b-[6px] border-positivusDark 
                    px-[60px] py-[40px] transition-all duration-1000`}>
                        {/* Accordion title */}
                        <header 
                            className="pb-[30px] flex justify-between items-center 
                            cursor-pointer"
                            onClick={() => {handleSelected(accordionDatum.id)}}    
                        >
                            {/* Serial and title */}
                            <div className="flex justify-center items-center gap-[25px]">
                                {/* Serial */}
                                <h3 className="font-spaceGrotesk font-medium 
                                text-[60px] text-black">
                                    {accordionDatum.serialNo}
                                </h3>
                                {/* Title */}
                                <h5 className="font-spaceGrotesk font-medium text-[30px] 
                                text-black">
                                    {accordionDatum.title}
                                </h5>
                            </div>
                            {/* Icon */}
                            <div className="">
                            {
                                selected === accordionDatum.id ?
                                    <img src={minusIcon} alt="Minus Icon" />
                                    :
                                    <img src={plusIcon} alt="Plus Icon" />
                            }
                            </div>
                        </header>
                        {/* Accordion description */}
                        {
                            selected === accordionDatum.id ?
                                <div className="w-full h-[60px] border-t-[1px] 
                                border-black pt-[30px] pb-[60px] font-spaceGrotesk font-normal 
                                text-[18px] text-black transition-all duration-1000">
                                    {accordionDatum.content}
                                </div>
                                :
                                null
                        }
                    </div>
                ))
                :
                <div>No data</div>
            }
        </div>
    )
}
export default Accordion
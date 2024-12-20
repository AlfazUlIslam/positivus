import { useState } from "react"
import { AccordionIcon } from ".."
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
        // mt-[80px] gap-[30px]
        <div className="bg-red-200 mt-[40px] flex flex-col items-center 
        gap-[15px]">
            {
            accordionData && accordionData.length > 0 ? 
                accordionData.map((accordionDatum) => (
                    // Accordion item
                    // w-[100%] rounded-[45px] px-[60px] py-[40px]
                    <div 
                        key={accordionDatum.id}
                        className={`${selected === accordionDatum.id ? 
                        "bg-positivusGreen" : "bg-positivusGrey"} w-[300px] 
                        rounded-[25px] border border-b-[6px] border-positivusDark 
                        px-[20px] py-[20px] transition-all duration-1000`}
                    >
                        {/* Accordion title */}
                        {/* pb-[30px] */}
                        <header 
                            className="pb-[10px] flex justify-between 
                            items-center cursor-pointer"
                            onClick={() => {handleSelected(accordionDatum.id)}}    
                        >
                            {/* Serial and title */}
                            <div className="flex justify-center 
                            items-center gap-[25px]">
                                {/* Serial */}
                                {/* text-[60px] */}
                                <h3 className="font-spaceGrotesk 
                                font-medium text-[20px] text-black">
                                    {accordionDatum.serialNo}
                                </h3>
                                {/* Title */}
                                {/* text-[30px] */}
                                <h5 className="bg-red-100 w-[150px] 
                                font-spaceGrotesk font-medium text-[12px] 
                                text-black">
                                    {accordionDatum.title}
                                </h5>
                            </div>
                            {/* Icon */}
                            <div className="">
                            {
                                selected === accordionDatum.id ?
                                    <AccordionIcon 
                                        image={minusIcon}
                                        altText={"Minus Icon"}
                                    />
                                    :
                                    <AccordionIcon 
                                        image={plusIcon}
                                        altText={"Plus Icon"}
                                    />
                            }
                            </div>
                        </header>
                        {
                            selected === accordionDatum.id ?
                                // Accordion description
                                // text-[18px] pt-[30px] pb-[60px]
                                <div className="w-full h-[60px] 
                                border-t-[1px] border-black pt-[30px] 
                                pb-[80px] font-spaceGrotesk font-normal 
                                text-[10px] text-black transition-all 
                                duration-1000">
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
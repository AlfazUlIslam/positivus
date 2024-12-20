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
        <div className="mt-[40px] flex flex-col items-center 
        gap-[15px] xl:mt-[80px] xl:gap-[30px]">
            {
            accordionData && accordionData.length > 0 ? 
                accordionData.map((accordionDatum) => (
                    // Accordion item
                    <div 
                        key={accordionDatum.id}
                        className={`${selected === accordionDatum.id ? 
                        "bg-positivusGreen" : "bg-positivusGrey"} w-[300px] 
                        rounded-[25px] border border-b-[6px] border-positivusDark 
                        px-[20px] py-[20px] transition-all duration-1000 
                        sm:w-[100%] xl:rounded-[45px] xl:px-[60px] 
                        xl:py-[40px]`}
                    >
                        {/* Accordion title */}
                        <header 
                            className="pb-[10px] flex justify-between 
                            items-center cursor-pointer xl:pb-[30px]"
                            onClick={() => {handleSelected(accordionDatum.id)}}    
                        >
                            {/* Serial and title */}
                            <div className="flex justify-center 
                            items-center gap-[25px]">
                                {/* Serial */}
                                <h3 className="font-spaceGrotesk 
                                font-medium text-[20px] text-black 
                                sm:text-[35px] md:text-[45px] 
                                lg:text-[50px] xl:text-[60px]">
                                    {accordionDatum.serialNo}
                                </h3>
                                {/* Title */}
                                <h5 className="w-[150px] font-spaceGrotesk 
                                font-medium text-[12px] text-black 
                                sm:w-auto sm:text-[18px] md:text-[22px] 
                                lg:text-[25px] xl:text-[30px]">
                                    {accordionDatum.title}
                                </h5>
                            </div>
                            {/* Icon */}
                            <div>
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
                                <div className="w-full h-auto 
                                border-t-[1px] border-black pt-[30px] 
                                pb-[10px] font-spaceGrotesk font-normal 
                                text-[10px] text-black transition-all 
                                duration-1000 sm:pb-[20px] sm:text-[14px] 
                                md:text-[16px] lg:text-[18px] xl:pb-[60px]">
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
import { useState } from "react"
import { Content } from "../../containers"
import { Title, ArrowIcon, Modal } from "../../components"
import { arrowGreen, arrowBlack } from "../../assets"

const ServicesCard = (props) => {
    const { theme, titleOne, titleTwo, logo, altText } = props

    const [toggleModal, setToggleModal] = useState(false)

    const handleToggleModal = () => {
        setToggleModal(prev => !prev)
    }

    const servicesCard = { background: "" }
    
    switch (theme) {
        case "grey":
            servicesCard.background = "#F3F3F3"
            break
        case "green":
            servicesCard.background = "#B9FF66"
            break
        case "black":
            servicesCard.background = "#191A23"
            break
    }
        
    return (
        // Services card
        // w-[600px] h-[310px] rounded-[45px] border-b-[7px] p-[50px]
        <div 
            className="w-[300px] h-[160px] rounded-[23px] 
            border border-positivusDark border-b-[5px] p-[25px] 
            flex justify-between items-center"
            style={servicesCard}
        >
            <Modal 
                theme={theme} 
                titleOne={titleOne} 
                titleTwo={titleTwo} 
                logo={logo} 
                altText={altText}
                toggleModal={toggleModal}
                handleToggleModal={handleToggleModal}
            />
            {/* Services card content */}
            {/* gap-[90px] */}
            <Content styles={`flex flex-col items-start gap-[20px]`}>
                {/* Services card title wrapper */}
                <div className="flex flex-col items-start">
                    <Title 
                        styles={`${theme === "grey" ? 
                        "bg-positivusGreen text-black" : 
                        "bg-white text-black"}`}
                        content={titleOne}
                    />
                    <Title 
                        styles={`${theme === "grey" ? 
                        "bg-positivusGreen text-black" : 
                        "bg-white text-black"}`}
                        content={titleTwo}
                    />
                </div>
                {/* Details link */}
                {/* gap-[15px] */}
                <button 
                    className="group/detailsLink flex justify-center 
                    items-center gap-[5px]"
                    onClick={handleToggleModal}
                >
                    {theme === "black" ? 
                    <ArrowIcon 
                        image={arrowBlack} 
                        altText={"Arrow black icon"} 
                    />
                    :
                    <ArrowIcon 
                        image={arrowGreen} 
                        altText={"Arrow green icon"} 
                    />}
                    {/* Learn more text */}
                    {/* text-[20px] */}
                    <span className={`font-spaceGrotesk font-normal 
                    text-[12px] transition-all duration-1000 ${theme === "black" ? 
                    "text-white group-hover/detailsLink:text-positivusGreen" : 
                    "text-black group-hover/detailsLink:text-white"}`}>
                        Learn more
                    </span>
                </button>
            </Content>
            {/* Services card logo */}
            <div>
                <img 
                    className="w-[100px]"
                    src={logo} 
                    alt={altText} 
                />
            </div>
        </div>
    )
}
export default ServicesCard
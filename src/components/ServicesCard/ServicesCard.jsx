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
        <div 
            className="w-[250px] h-[160px] rounded-[23px] 
            border border-positivusDark border-b-[5px] p-[25px] 
            flex justify-between items-center md:w-[350px] 
            md:h-[200px] lg:w-[450px] lg:h-[250px] xl:w-[600px] 
            xl:h-[310px] xl:rounded-[45px] xl:border-b-[7px] xl:p-[50px]"
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
            <Content styles={`flex flex-col items-start gap-[20px] 
            lg:gap-[60px] xl:gap-[90px]`}>
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
                <button 
                    className="group/detailsLink flex justify-center 
                    items-center gap-[5px] xl:gap-[15px]"
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
                    <span className={`font-spaceGrotesk font-normal 
                    text-[10px] transition-all duration-1000 ${theme === "black" ? 
                    "text-white group-hover/detailsLink:text-positivusGreen" : 
                    "text-black group-hover/detailsLink:text-white"} 
                    md:text-[12px] lg:text-[16px] xl:text-[20px]`}>
                        Learn more
                    </span>
                </button>
            </Content>
            {/* Services card logo */}
            <div>
                <img 
                    className="w-[100px] md:w-[130px] 
                    lg:w-[180px] xl:w-auto"
                    src={logo} 
                    alt={altText} 
                />
            </div>
        </div>
    )
}
export default ServicesCard
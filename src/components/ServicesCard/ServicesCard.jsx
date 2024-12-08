import { Content } from "../../containers"
import { Title } from "../../components"
import { arrowGreen, arrowBlack } from "../../assets"

const ServicesCard = (props) => {
    const { theme, titleOne, titleTwo, logo, altText, handleToggleModal } = props

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
            className="w-[600px] h-[310px] rounded-[45px] 
            border border-positivusDark border-b-[7px] p-[50px] flex justify-between 
            items-center"
            style={servicesCard}
        >
            {/* Services card content */}
            <Content styles={`flex flex-col items-start gap-[90px]`}>
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
                    className="group/detailsLink flex justify-center items-center gap-[15px]"
                    onClick={handleToggleModal}
                >
                    {theme === "black" ? 
                    <img src={arrowBlack} alt={"Arrow black icon"} /> : 
                    <img src={arrowGreen} alt={"Arrow green icon"} />}
                    <span className={`font-spaceGrotesk font-normal 
                    text-[20px] transition-all duration-1000 ${theme === "black" ? 
                    "text-white group-hover/detailsLink:text-positivusGreen" : 
                    "text-black group-hover/detailsLink:text-white"}`}>
                        Learn more
                    </span>
                </button>
            </Content>
            {/* Services card logo */}
            <div>
                <img 
                    src={logo} 
                    alt={altText} 
                />
            </div>
        </div>
    )
}
export default ServicesCard
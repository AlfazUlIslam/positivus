import { ColumnOne, ColumnTwo } from "../../containers"
import { Title } from "../../components"
import "./Modal.css"

const Modal = (props) => {
    const { theme, titleOne, titleTwo, logo, altText, toggleModal, handleToggleModal } = props
  
    const modalContent = { background: "" }
    const cancelButton = { color: theme === "black" ? "#FFF" : "#000" }
    
    switch (theme) {
        case "grey":
            modalContent.background = "#F3F3F3"
            break
        case "green":
            modalContent.background = "#B9FF66"
            break
        case "black":
            modalContent.background = "#191A23"
            break
    }

    return (
        // Modal
        <div className={`modal ${toggleModal ? "block" : "hidden"}`}>
            {/* Modal content */}
            <div 
                className="w-[750px] h-[500px] rounded-[45px] 
                p-[50px] flex justify-between modal_content"
                style={modalContent}
            >
                <ColumnOne styles={`w-1/2 flex flex-col items-start 
                gap-4`}>
                    {/* Service title wrapper */}
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
                    {/* Service description */}
                    <p className={`font-spaceGrotesk font-semibold text-md 
                    leading-[28px] ${theme === "black" ? "text-white" : 
                    "text-black"}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam expedita pariatur esse exercitationem tempore officiis saepe ullam, vel maiores ab numquam voluptatibus. Quidem quasi, placeat, esse consequuntur iure saepe pariatur tenetur id molestiae cupiditate, odit fuga eius? Voluptates accusantium, eos quidem, non quibusdam aperiam nulla minima tempora fugiat est similique!
                    </p>
                </ColumnOne>
                <ColumnTwo styles={`flex flex-col items-end gap-20`}>
                    {/* Cancel button */}
                    <div className="">    
                        <button 
                            className="text-5xl"
                            style={cancelButton}
                            onClick={handleToggleModal}
                        >
                            &times;
                        </button>
                    </div>
                    {/* Service logo */}
                    <div>
                        <img 
                            src={logo} 
                            alt={altText} 
                        />
                    </div>
                </ColumnTwo>
            </div>
        </div>
  )
}
export default Modal
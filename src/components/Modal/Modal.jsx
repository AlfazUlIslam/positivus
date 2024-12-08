import "./Modal.css"

const Modal = (props) => {
    const { toggleModal, handleToggleModal } = props
  
    return (
        <div className={`modal ${toggleModal ? "block" : "hidden"}`}>
            <div className="modal-content slide_up">
                <button 
                    className="text-5xl text-red-600"
                    onClick={handleToggleModal}
                >
                    &times;
                </button>
            </div>
        </div>
  )
}
export default Modal
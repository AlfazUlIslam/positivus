import "./InputGroup.css"

const InputGroup = (props) => {
    const { element, labelText, required, type, name, value, handleChange, placeholder } = props
    
    const formGroupLabel = `flex flex-col gap-[5px]`
    // text-[16px]
    const formGroupLabelText = `font-spaceGrotesk font-normal text-[12px] 
    text-positivusDark`
    // w-[556px] rounded-[14px] pl-[30px] text-[18px]
    const formGroupElement = `w-[220px] rounded-[6px] pl-[15px] 
    border border-positivusDark font-spaceGrotesk font-normal text-[12px] 
    placeholder:positivusDarkGrey focus:outline-none focus:border-blue-800`

    return (
        // Input group
        <>
            {
            element === "input" ?
                // Input label
                <label className={`${formGroupLabel}`}>
                    <span className={`${formGroupLabelText}`}>
                        {labelText}{required ? "*" : ""}
                    </span>
                    {/* Input  */}
                    {/* h-[56px] */}
                    <input 
                        className={`${formGroupElement} h-[36px]`}
                        type={type}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        placeholder={placeholder}
                    />
                </label>
                :
                // Textarea label
                <label className={`${formGroupLabel}`}>
                    <span className={`${formGroupLabelText}`}>
                        {labelText}{required ? "*" : ""}
                    </span>
                    {/* Textarea */}
                    <textarea 
                        className={`${formGroupElement} h-[190px] pt-[18px]`}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        placeholder={placeholder}
                    />
                </label>
            }
        </>
    )
}
export default InputGroup
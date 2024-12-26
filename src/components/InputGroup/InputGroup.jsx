import "./InputGroup.css"

const InputGroup = (props) => {
    const { element, labelText, required, type, name, value, handleChange, placeholder } = props
    
    const formGroupLabel = `flex flex-col gap-[5px]`
    const formGroupLabelText = `font-spaceGrotesk font-normal text-[12px] 
    text-positivusDark sm:text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px]`
    const formGroupElement = `w-[220px] rounded-[6px] pl-[15px] border 
    border-positivusDark font-spaceGrotesk font-normal text-[12px] 
    placeholder:positivusDarkGrey placeholder:text-[12px] focus:outline-none 
    focus:border-blue-800 sm:w-[400px] sm:text-[14px] sm:placeholder:text-[14px] 
    md:w-[220px] md:text-[12px] md:placeholder:text-[12px] lg:w-[400px] 
    lg:text-[14px] lg:placeholder:text-[14px] xl:w-[556px] xl:rounded-[14px] 
    xl:pl-[30px] xl:text-[18px] xl:placeholder:text-[18px]`

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
                    <input 
                        className={`${formGroupElement} h-[36px] xl:h-[56px]`}
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
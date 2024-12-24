const InputGroup = (props) => {
    const { element, labelText, required, type, name, value, handleChange, placeholder } = props    
    return (
        // Input group
        <>
            {
            element === "input" ?
                // Input label
                <label className="flex flex-col gap-[5px]">
                    {labelText}{required ? "*" : ""}
                    {/* Input  */}
                    <input 
                        className="w-[556px] h-[56px] rounded-[14px] 
                        pl-[30px] border border-positivusDark 
                        font-spaceGrotesk font-normal text-[18px] 
                        placeholder:positivusDarkGrey"
                        type={type}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        placeholder={placeholder}
                    />
                </label>
                :
                // Textarea label
                <label className="flex flex-col gap-[5px]">
                    {labelText}{required ? "*" : ""}
                    {/* Textarea */}
                    <textarea 
                        className="w-[556px] h-[190px] rounded-[14px] 
                        pl-[30px] pt-[18px] border border-positivusDark 
                        font-spaceGrotesk font-normal text-[18px] 
                        text-positivusDarkGrey"
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
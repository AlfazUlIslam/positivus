import "./RadioGroup.css"

const RadioGroup = (props) => {
    const { labelText, name, value, handleChange } = props
        
    return (
        // Radio group
        <label className="form-group">
            {/* Label text */}
            {/* text-[18px] */}
            <span className="font-spaceGrotesk font-normal text-[12px] 
            text-positivusDark">
                {labelText}
            </span>
            <input 
                type="radio" 
                name={name}
                value={value}
                onChange={handleChange}
            />
            <span className="form-group__checkmark"></span>
        </label>
    )
}
export default RadioGroup
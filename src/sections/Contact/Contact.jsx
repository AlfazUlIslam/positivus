import { useState } from "react"
import { Container, Content, ColumnOne, ColumnTwo, Groups } from "../../containers"
import { Heading, Description, InputGroup, SectionBtn } from "../../components"
import { contactUsLogo } from "../../assets"
import "./Contact.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        contact: "",
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
        
    return (
        // Contact
        <section id="contact">
            <Container styles={`px-6 py-[40px] xl:py-[70px]`}>
                <Content styles={`flex flex-col justify-center 
                items-center gap-[20px] xl:flex-row xl:justify-start 
                xl:gap-[40px]`}>
                    <Heading content={"Contact Us"} />
                    <Description 
                        styles={`w-[280px] text-center sm:w-[500px] 
                        xl:w-[320px] xl:text-start`}
                        content={"Connect with Us: Let's Discuss Your Digital Marketing Needs"}
                    />
                </Content>
                {/* Form and image container */}
                <div className="relative w-[100%] rounded-[45px] bg-positivusGrey 
                pl-[100px] py-[60px] mt-[80px] flex justify-between items-center">
                    <ColumnOne>
                        <form onSubmit={handleSubmit}>
                            {/* Radio groups */}
                            <Groups classes={`flex justify-start items-center 
                            gap-[35px]`}>
                                {/* Say hi radio group */}
                                <label className="form-group">Say Hi
                                    <input 
                                        type="radio" 
                                        name="contact" 
                                        value={"say hi"}
                                        onChange={handleChange}
                                    />
                                    <span className="form-group__checkmark"></span>
                                </label>
                                {/* Get a quote radio group */}
                                <label className="form-group">Get a Quote
                                    <input 
                                        type="radio" 
                                        name="contact" 
                                        value={"get a quote"}
                                        onChange={handleChange}
                                    />
                                    <span className="form-group__checkmark"></span>
                                </label>
                            </Groups>
                            {/* Input groups */}
                            <Groups classes={`my-[40px] flex flex-col 
                            gap-[25px]`}>
                                {/* Name input group (input) */}
                                <InputGroup 
                                    element={"input"}
                                    labelText={"Name"}
                                    required={false}
                                    type={"text"}
                                    name={"name"}
                                    value={formData.name}
                                    handleChange={handleChange}
                                    placeholder={"Name"}
                                />
                                {/* Email input group (input) */}
                                <InputGroup 
                                    element={"input"}
                                    labelText={"Email"}
                                    required={true}
                                    type={"email"}
                                    name={"email"}
                                    value={formData.email}
                                    handleChange={handleChange}
                                    placeholder={"Email"}
                                />
                                {/* Message input group (textarea) */}
                                <InputGroup 
                                    element={"textarea"}
                                    labelText={"Message"}
                                    required={true}
                                    type={""}
                                    name={"message"}
                                    value={formData.message}
                                    handleChange={handleChange}
                                    placeholder={"Message"}
                                />
                            </Groups>
                            {/* Send message button container */}
                            <div className="">
                                <SectionBtn 
                                    styles={`w-[170px] xl:w-[556px]`}
                                    type={"submit"}
                                    content={"Send Message"}
                                />
                            </div>
                        </form>
                    </ColumnOne>
                    <ColumnTwo styles={`absolute right-[-49%] 
                    translate-x-[-49%]`}>
                        {/* translate-x-[46%] */}
                        <img 
                            className=""
                            src={contactUsLogo} 
                            alt="Contact us logo" 
                        />
                    </ColumnTwo>
                </div>
            </Container>
        </section>
    )
}
export default Contact
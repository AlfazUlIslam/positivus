import { useState } from "react"
import { Container, Content, ColumnOne, ColumnTwo, Groups } from "../../containers"
import { Heading, Description, RadioGroup, InputGroup, SectionBtn } from "../../components"
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
                <div className="relative w-[100%] rounded-[25px] bg-positivusGrey 
                pl-[0px] py-[60px] mt-[40px] flex justify-center items-center 
                md:pl-[40px] md:justify-between xl:rounded-[45px] xl:pl-[100px] 
                xl:mt-[80px]">
                    <ColumnOne>
                        <form 
                            className="flex flex-col items-start md:items-start"
                            onSubmit={handleSubmit}
                        >
                            {/* Radio groups */}
                            <Groups classes={`flex justify-start items-center 
                            gap-[25px] xl:gap-[35px]`}>
                                {/* Say hi radio group */}
                                <RadioGroup 
                                    labelText={"Say Hi"}
                                    name="contact" 
                                    value={"say hi"}
                                    handleChange={handleChange}
                                />
                                {/* Get a quote radio group */}
                                <RadioGroup 
                                    labelText={"Get a Quote"}
                                    name="contact" 
                                    value={"get a quote"}
                                    handleChange={handleChange}
                                />
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
                            <div className="text-center">
                                <SectionBtn 
                                    styles={`w-[220px] sm:w-[400px] 
                                    md:w-[220px] xl:w-[556px]`}
                                    type={"submit"}
                                    content={"Send Message"}
                                />
                            </div>
                        </form>
                    </ColumnOne>
                    <ColumnTwo styles={`hidden md:block`}>
                        <img 
                            className="w-[300px] lg:w-[350px] xl:w-auto"
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
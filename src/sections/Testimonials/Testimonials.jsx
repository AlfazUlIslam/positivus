import { Container, Content } from "../../containers"
import { Heading, Description, Carousel } from "../../components"

const Testimonials = () => {
  return (
    // Testimonials
    <section id="testimonials">
        <Container styles={`px-6 py-[40px] xl:py-[70px]`}>
            <Content styles={`flex flex-col justify-center 
            items-center gap-[20px] xl:flex-row xl:justify-start 
            xl:gap-[40px]`}>
                <Heading content={"Testimonials"} />
                <Description 
                    styles={`w-[280px] text-center sm:w-[500px] 
                    xl:w-[470px] xl:text-start`}
                    content={"Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"}
                />
            </Content>
            <Carousel />
        </Container>
    </section>
  )
}
export default Testimonials
import { Container, Content } from "../../containers"
import { Heading, Description, Accordion } from "../../components"

const OurWorkingProcess = () => {
  return (
    // Our working process
    <section id="our-working-process">
        <Container styles={`px-6 py-[40px] xl:py-[70px]`}>
            <Content styles={`flex flex-col justify-center 
            items-center gap-[20px] xl:flex-row xl:justify-start 
            xl:gap-[40px]`}>
                <Heading content={"Our Working Process"} />
                <Description 
                    styles={`w-[280px] text-center 
                    xl:w-[290px] xl:text-start`}
                    content={"Step-by-Step Guide to Achieving Your Business Goals"}
                />
            </Content>
            <Accordion />
        </Container>
    </section>
  )
}
export default OurWorkingProcess
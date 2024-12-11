import { Container, Content } from "../../containers"
import { Heading, Description, ServicesCard } from "../../components"
import { servicesCardsData } from "../../data"

const Services = () => {
    return (
        <section id="services">
            <Container styles={`px-6 py-[70px]`}>
                <Content styles={`flex flex-col items-center gap-[20px] 
                mb-[40px] md:flex-row md:justify-start xl:gap-[40px] 
                xl:mb-[80px]`}>
                    <Heading content={"Services"} />
                    <Description 
                        styles={`w-[250px] text-center sm:w-[500px] 
                        md:w-[580px] md:text-start`}
                        content={"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"} 
                    />
                </Content>
                {/* Cards */}
                <div className="flex flex-col items-center gap-[20px] 
                sm:flex-row sm:flex-wrap sm:justify-center md:justify-between 
                xl:gap-[40px]">
                    {servicesCardsData.map((servicesCardData) => (
                        <ServicesCard 
                            key={servicesCardData.id}
                            theme={servicesCardData.theme}
                            titleOne={servicesCardData.titleOne}
                            titleTwo={servicesCardData.titleTwo}
                            logo={servicesCardData.logo}
                            altText={servicesCardData.altText}
                        /> 
                    ))}
                </div>
            </Container>
        </section>
    )
}
export default Services
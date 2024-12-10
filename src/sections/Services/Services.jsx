import { Container, Content } from "../../containers"
import { Heading, Description, ServicesCard } from "../../components"
import { servicesCardsData } from "../../data"

const Services = () => {
    return (
        <section id="services">
            <Container styles={`px-6 py-[70px]`}>
                {/* flex flex-row justify-start gap-[40px] mb-[80px] */}
                <Content styles={`flex flex-col 
                items-center gap-[20px] mb-[40px]`}>
                    <Heading content={"Services"} />
                    {/* w-[580px] text-start */}
                    <Description 
                        styles={`w-[250px] text-center`}
                        content={"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"} 
                    />
                </Content>
                {/* Cards */}
                {/* flex-row flex-wrap justify-between gap-[40px] */}
                <div className="flex flex-col items-center gap-[20px]">
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
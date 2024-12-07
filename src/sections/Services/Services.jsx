import { Container, Content } from "../../containers"
import { Heading, Description, ServicesCard, Title, SectionBtn } from "../../components"
import { lmthLogo } from "../../assets"
import { servicesCardsData } from "../../data"

const Services = () => {
    return (
        <section id="services">
            <Container styles={`px-6 py-[70px]`}>
                <Content styles={`flex justify-start 
                items-center gap-[40px] mb-[80px]`}>
                    <Heading content={"Services"} />
                    <Description 
                        styles={`w-[580px]`}
                        content={"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"} 
                    />
                </Content>
                {/* Cards */}
                <div className="flex flex-wrap justify-between gap-[40px]">
                    {servicesCardsData.map((servicesCardData) => (
                        <ServicesCard 
                            theme={servicesCardData.theme}
                            titleOne={servicesCardData.titleOne}
                            titleTwo={servicesCardData.titleTwo}
                            logo={servicesCardData.logo}
                            altText={servicesCardData.altText}
                        /> 
                    ))}
                </div>
                {/* Lets make things happen */}
                <div className="w-full h-[350px] rounded-[45px] 
                mt-[125px] pl-[60px] py-[60px] pr-[135px] bg-positivusGrey 
                flex justify-between items-center">
                    <Content styles={`flex flex-col items-start gap-[26px]`}>
                        <Title styles={`pl-0`} content={"Let's make things happen"} />
                        <Description 
                            styles={`w-[500px]`}
                            content={"Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."} 
                        />
                        <SectionBtn 
                            styles={`w-[288px]`}
                            content={"Get your free proposal"}
                        />
                    </Content>
                    {/* Let's make things happen image */}
                    <div>
                        <img 
                            src={lmthLogo} 
                            alt={"Mouthless black emoji and stars"} 
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default Services
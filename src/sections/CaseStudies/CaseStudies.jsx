import { Container, Content } from "../../containers"
import { Heading, Description, Study } from "../../components"
import { studiesData } from "../../data"

const CaseStudies = () => {
  return (
    // Case studies
    <section id="case-studies">
        <Container styles={`px-6 py-[40px] xl:py-[70px]`}>
            <Content styles={`flex flex-col justify-center 
            items-center gap-[20px] xl:flex-row xl:justify-start 
            xl:gap-[40px]`}>
                <Heading content={"Case Studies"} />
                <Description 
                    styles={`w-[280px] text-center sm:w-[500px] 
                    xl:w-[580px] xl:text-start`}
                    content={"Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"}
                />
            </Content>
            {/* Studies */}
            <div className="w-[280px] rounded-[45px] 
            py-[40px] mt-[40px] mx-auto bg-positivusDark flex 
            flex-col justify-center items-center divide-y 
            sm:w-[500px] md:w-[100%] md:flex-row md:divide-y-0 
            md:divide-x xl:py-[90px] xl:mt-[80px]">
                {studiesData.map((studyData, index) => (
                    <Study 
                        key={studyData.id}
                        elemIndex={index}
                        description={studyData.description}
                    />
                ))}
            </div>
        </Container>
    </section>
  )
}
export default CaseStudies
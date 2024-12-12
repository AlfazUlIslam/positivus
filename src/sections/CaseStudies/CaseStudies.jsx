import { Container, Content } from "../../containers"
import { Heading, Description, Study } from "../../components"
import { studiesData } from "../../data"

const CaseStudies = () => {
  return (
    // Case studies
    <section id="case-studies">
        <Container styles={`px-6 py-[70px]`}>
            <Content styles={`flex justify-start items-center 
            gap-[40px]`}>
                <Heading content={"Case Studies"} />
                <Description 
                    styles={`w-[580px]`}
                    content={"Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"}
                />
            </Content>
            {/* Studies */}
            <div className="w-[100%] rounded-[45px] 
            py-[90px] mt-[80px] bg-positivusDark flex 
            justify-center">
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
import { Container, Content } from "../../containers"
import { Heading, Description, Study } from "../../components"
import { studiesData } from "../../data"

const CaseStudies = () => {
  return (
    // Case studies
    <section id="case-studies">
        {/* py-[70px] */}
        <Container styles={`px-6 py-[40px]`}>
            {/* flex-col justify-start gap-[40px] */}
            <Content styles={`flex flex-col justify-center 
            items-center gap-[20px]`}>
                <Heading content={"Case Studies"} />
                {/* w-[580px] text-start */}
                <Description 
                    styles={`w-[280px] text-center`}
                    content={"Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"}
                />
            </Content>
            {/* Studies */}
            {/* w-[100%] rounded-[5px] py-[90px] mt-[40px] 
                mx-0 flex-row gap-0 divide-y */}
            <div className="w-[280px] rounded-[45px] 
            py-[40px] mt-[40px] mx-auto bg-positivusDark flex 
            flex-col justify-center items-center divide-y">
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
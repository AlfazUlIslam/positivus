import { Container } from "../../containers"
import { SectionBtn } from "../../components"

const Hero = () => {
  return (
    <section id="home">
        <Container styles={`px-6 py-[40px] flex 
        flex-col-reverse items-center gap-10 
        sm:py-[70px] md:py-[40px] md:flex-row 
        md:justify-between md:gap-0 lg:py-[70px]`}>
            {/* Hero content */}
            <div className="flex flex-col 
            items-start gap-[25px] xl:gap-[35px]">
                <h1 className="w-[300px] font-spaceGrotesk 
                font-normal text-[30px] text-black sm:w-[530px] 
                sm:text-[60px] md:w-[300px] md:text-[30px] lg:w-[430px] 
                lg:text-[50px] xl:w-[530px] xl:text-[60px]">
                    Navigating the digital landscape for success
                </h1>
                <p className="w-[300px] font-spaceGrotesk 
                font-normal text-[14px] leading-[22px] text-black 
                sm:w-[500px] sm:text-[20px] sm:leading-[28px] 
                md:w-[300px] md:text-[14px] md:leading-[22px] 
                lg:w-[430px] lg:text-[18px] lg:leading-[28px] 
                xl:w-[500px] xl:text-[20px]">
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                <SectionBtn 
                    styles={`w-[180px] sm:w-[220px] md:w-[180px] 
                    lg:w-[230px] xl:w-[270px]`}
                    content={"Book a consultation"}
                />
            </div>
            {/* Hero image */}
            <div>
                <img 
                    className="w-[300px] sm:w-[500px] 
                    md:w-[300px] lg:w-[450px] xl:w-auto"
                    src="images/hero-img.png"
                    alt="Hero Image" 
                />
            </div>
        </Container>
    </section>
  )
}
export default Hero
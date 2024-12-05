import { Container } from "../../containers"
import { SectionBtn } from "../../components"
import { heroImg } from "../../assets"

const Hero = () => {
  return (
    <section id="home">
        <Container styles={`px-6 py-[70px] flex 
        justify-between items-center`}>
            {/* Hero content */}
            <div className="flex flex-col 
            items-start gap-[35px]">
                <h1 className="w-[530px] font-spaceGrotesk 
                font-normal text-[60px] text-black">
                    Navigating the digital landscape for success
                </h1>
                <p className="w-[500px] font-spaceGrotesk 
                font-normal text-[20px] leading-[28px] text-black">
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                <SectionBtn 
                    styles={`w-[270px] bg-positivusDark text-white 
                    hover:border-positivusGreen hover:bg-positivusGreen 
                    hover:text-black`}
                    content={"Book a consultation"}
                />
            </div>
            {/* Hero image */}
            <div>
                <img 
                    src={heroImg} 
                    alt="Hero Image" 
                />
            </div>
        </Container>
    </section>
  )
}
export default Hero
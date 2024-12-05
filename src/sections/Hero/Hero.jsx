import { Container } from "../../containers"
import { SectionBtn } from "../../components"
import { heroImg } from "../../assets"

const Hero = () => {
  return (
    <section id="home">
        {/* py-[70px] flex-row justify-between gap-0 */}
        <Container styles={`px-6 py-[40px] flex 
        flex-col-reverse items-center gap-10`}>
            {/* Hero content */}
            {/* gap-[35px] */}
            <div className="flex flex-col 
            items-start gap-[25px]">
                {/* w-[530px] text-[60px] */}
                <h1 className="w-[300px] font-spaceGrotesk 
                font-normal text-[30px] text-black">
                    Navigating the digital landscape for success
                </h1>
                {/* w-[500px] text-[20px] leading-[28px] */}
                <p className="w-[300px] font-spaceGrotesk 
                font-normal text-[12px] leading-[18px] text-black">
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                {/* w-[270px] */}
                <SectionBtn 
                    styles={`w-[180px] bg-positivusDark text-white 
                    hover:border-positivusGreen hover:bg-positivusGreen 
                    hover:text-black`}
                    content={"Book a consultation"}
                />
            </div>
            {/* Hero image */}
            <div>
                {/* w-auto */}
                <img 
                    className="w-[300px]"
                    src={heroImg} 
                    alt="Hero Image" 
                />
            </div>
        </Container>
    </section>
  )
}
export default Hero
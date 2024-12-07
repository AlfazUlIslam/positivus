import { Container } from "../../containers"
import { SponsorImage } from "../../components"
import { amazonLogo, dribbleLogo, hubspotLogo, notionLogo, netflixLogo, zoomLogo } from "../../assets"

const Sponsors = () => {
  return (
    // Sponsors
    <section id="sponsors">
        <Container styles={`px-6 flex flex-col 
        items-center gap-6 sm:flex-row sm:flex-wrap 
        sm:justify-center lg:justify-between lg:gap-0 
        xl:py-[70px] xl:flex-nowrap`}>
            <SponsorImage image={amazonLogo} altText={"Amazon Logo"} />
            <SponsorImage image={dribbleLogo} altText={"Dribble Logo"} />
            <SponsorImage image={hubspotLogo} altText={"Hubspot Logo"} />
            <SponsorImage image={notionLogo} altText={"Notion Logo"} />
            <SponsorImage image={netflixLogo} altText={"Netflix Logo"} />
            <SponsorImage image={zoomLogo} altText={"Zoom Logo"} />
        </Container>
    </section>
  )
}
export default Sponsors
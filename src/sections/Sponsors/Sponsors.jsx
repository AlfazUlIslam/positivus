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
            <SponsorImage imagePath={"images/amazon-logo.png"} altText={"Amazon Logo"} />
            <SponsorImage imagePath={"images/dribble-logo.png"} altText={"Dribble Logo"} />
            <SponsorImage imagePath={"images/hubspot-logo.png"} altText={"Hubspot Logo"} />
            <SponsorImage imagePath={"images/notion-logo.png"} altText={"Notion Logo"} />
            <SponsorImage imagePath={"images/netflix-logo.png"} altText={"Netflix Logo"} />
            <SponsorImage imagePath={"images/zoom-logo.png"} altText={"Zoom Logo"} />
        </Container>
    </section>
  )
}
export default Sponsors
import { Container, Content, Row, ColumnOne, ColumnTwo } from "../../containers"
import { FooterLink, FooterLogo, FooterText } from "../../components"
import { footerLogo, linkedinIcon, facebookIcon, twitterIcon } from "../../assets"

const Footer = () => {
  return (
    // Footer
    <footer id="footer">
      <Container styles={`px-6 py-[40px] xl:py-[70px]`}>
        <Content styles={`rounded-t-[45px] bg-positivusDark px-[60px] py-[50px]`}>
          {/* Row 1 */}
          <Row styles={`flex justify-between items-center`}>
            {/* Footer logo */}
            <div>
              <img src={footerLogo} alt="Footer logo" />
            </div>
            {/* Footer links */}
            <div className="flex justify-center items-center gap-[40px]">
              <FooterLink linkRef={"#home"} content={"Home"} />
              <FooterLink linkRef={"#services"} content={"Services"} />
              <FooterLink linkRef={"#case-studies"} content={"Case Studies"} />
              <FooterLink linkRef={"#testimonials"} content={"Testimonials"} />
              <FooterLink linkRef={"#contact"} content={"Contact Us"} />
            </div>
            {/* Footer logos */}
            <div className="flex justify-center items-center gap-[20px]">
              <FooterLogo image={linkedinIcon} altText={"LinkedIn Icon"} />
              <FooterLogo image={facebookIcon} altText={"Facebook Icon"} />
              <FooterLogo image={twitterIcon} altText={"Twitter Icon"} />
            </div>
          </Row>
          {/* Row 2 - Newsletter */}
          <Row styles={`border-b-[1px] border-b-white pb-[50px] mt-[66px] flex justify-between 
          items-start`}>
            <ColumnOne styles={`h-[100%] flex flex-col justify-between gap-[27px]`}>
              {/* Newsletter title */}
              <h6 className="w-[126px] h-[26px] rounded-[7px] bg-positivusGreen 
              text-center content-center font-spaceGrotesk font-medium 
              text-[20px] text-black">
                Contact Us:
              </h6>
              {/* Newsletter info */}
              <div className="space-y-[20px]">
                <FooterText content={"Email: info@positivus.com"} />
                <FooterText content={"Phone: 555-567-8901"} />
                {/* Address */}
                <div>
                  <FooterText content={"Address: 1234 Main St"} />
                  <FooterText content={"Moonstone City, Stardust State 12345"} />
                </div>
              </div>
            </ColumnOne>
            <ColumnTwo styles={`w-[635px] rounded-[14px] bg-[#292A32] px-[40px] py-[60px] 
            flex justify-center items-center gap-[20px]`}>
              {/* Newsletter email input */}
              <input 
                className="w-[285px] h-[65px] bg-[#292A32] rounded-[14px] border 
                border-white pl-[35px] font-spaceGrotesk font-normal text-[18px] 
                text-white placeholder:font-spaceGrotesk placeholder:font-normal 
                placeholder:text-[18px] placeholder:text-white"
                type="text" 
                placeholder="Email"
              />
              <button className="w-[250px] h-[70px] rounded-[14px] 
              bg-positivusGreen font-spaceGrotesk font-normal text-[20px] 
              text-black">
                Subcribe to news
              </button>
            </ColumnTwo>
          </Row>
          {/* Row 3 */}
          <Row styles={`mt-[50px] flex justify-start items-center gap-[40px]`}>
              {/* Copyright text */}
              <FooterText content={"© 2023 Positivus. All Rights Reserved."} />
              <FooterLink linkRef={"#"} content={"Privacy Policy"} />
          </Row>
        </Content>
      </Container>
    </footer>
  )
}
export default Footer
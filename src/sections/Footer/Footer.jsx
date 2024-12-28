import { Container, Content, Row, ColumnOne, ColumnTwo } from "../../containers"
import { FooterLink, FooterLogo, FooterText } from "../../components"
import { footerLogo, linkedinIcon, facebookIcon, twitterIcon } from "../../assets"

const Footer = () => {
  return (
    // Footer
    // bg-transparent
    <footer id="footer" className="bg-positivusDark">
      {/* px-6 */}
      <Container styles={`px-0 py-[40px] xl:py-[70px]`}>
        {/* px-[60px] */}
        <Content styles={`rounded-t-[45px] bg-positivusDark px-0 py-[50px]`}>
          {/* Row 1 */}
          {/* flex-row justify-between */}
          <Row styles={`flex flex-col justify-center items-center`}>
            {/* Footer logo */}
            <div>
              {/* w-auto */}
              <img 
                className="w-[160px]"
                src={footerLogo} 
                alt="Footer logo" 
              />
            </div>
            {/* Footer links */}
            {/* my-[0px] flex-row gap-[40px] */}
            <div className="my-[30px] flex flex-col justify-center items-center 
            gap-[10px]">
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
          {/* w-[100%] mx-0 flex-row justify-between items-start  */}
          <Row styles={`w-[95%] border-b-[1px] border-b-white pb-[50px] mt-[66px] 
          mx-auto flex flex-col justify-center items-center`}>
            {/* items-start gap-[27px] */}
            <ColumnOne styles={`h-[100%] flex flex-col justify-between 
            items-center gap-[20px]`}>
              {/* Newsletter title */}
              {/* mx-0 text-[20px] */}
              <h6 className="w-[126px] h-[26px] rounded-[7px] bg-positivusGreen 
              text-center content-center mx-auto font-spaceGrotesk font-medium 
              text-[16px] text-black">
                Contact Us:
              </h6>
              {/* Newsletter info */}
              {/* mb-0 items-start gap-[20px] */}
              <div className="mb-[60px] flex flex-col justify-center items-center 
              gap-[10px]">
                <FooterText content={"Email: info@positivus.com"} />
                <FooterText content={"Phone: 555-567-8901"} />
                {/* Address */}
                {/* text-start */}
                <div className="text-center">
                  <FooterText content={"Address: 1234 Main St"} />
                  <FooterText content={"Moonstone City, Stardust State 12345"} />
                </div>
              </div>
            </ColumnOne>
            {/* Newsletter form */}
            {/* w-[635px] flex-row  */}
            <ColumnTwo styles={`w-[280px] rounded-[14px] bg-[#292A32] px-[40px] 
            py-[60px] flex flex-col justify-center items-center gap-[20px]`}>
              {/* Newsletter email input */}
              {/* w-[285px] h-[65px] rounded-[14px] pl-[35px] text-[20px] 
                  placeholder:text-[20px] */}
              <input 
                className="w-[220px] h-[45px] bg-[#292A32] rounded-[7px] border 
                border-white pl-[20px] font-spaceGrotesk font-normal text-[14px] 
                text-white placeholder:font-spaceGrotesk placeholder:font-normal 
                placeholder:text-[14px] placeholder:text-white focus:outline-none 
                focus:border focus:border-positivusGreen"
                type="text" 
                placeholder="Email"
              />
              {/* w-[250px] h-[70px] rounded-[14px] text-[20px] */}
              <button className="w-[220px] h-[45px] rounded-[7px] 
              bg-positivusGreen font-spaceGrotesk font-normal text-[14px] 
              text-black">
                Subcribe to news
              </button>
            </ColumnTwo>
          </Row>
          {/* Row 3 */}
          {/* flex-row justify-start gap-[40px] */}
          <Row styles={`mt-[50px] flex flex-col justify-center items-center 
          gap-[6px] text-center`}>
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
import { Container, Content, Row, ColumnOne, ColumnTwo } from "../../containers"
import { FooterLink, FooterLogo, FooterText } from "../../components"
import { footerLogo, linkedinIcon, facebookIcon, twitterIcon } from "../../assets"

const Footer = () => {
  return (
    // Footer
    <footer id="footer" className="bg-positivusDark xl:bg-transparent">
      <Container styles={`px-0 pt-[40px] xl:px-6 xl:pt-[70px]`}>
        <Content styles={`rounded-t-[45px] bg-positivusDark px-0 
        py-[50px] xl:px-[60px]`}>
          {/* Row 1 */}
          <Row styles={`flex flex-col justify-center items-center 
          md:flex-row md:justify-evenly xl:justify-between`}>
            {/* Footer logo */}
            <div>
              <img 
                className="w-[160px] sm:w-auto md:w-[120px] 
                lg:w-[160px] xl:w-auto"
                src={footerLogo} 
                alt="Footer logo" 
              />
            </div>
            {/* Footer links */}
            <div className="my-[30px] flex flex-col justify-center 
            items-center gap-[10px] sm:flex-row lg:gap-[20px] 
            xl:my-[0px] xl:gap-[40px]">
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
          <Row styles={`w-[95%] border-b-[1px] border-b-white pb-[50px] 
          mt-[66px] mx-auto flex flex-col justify-center items-center 
          sm:mt-[80px] md:mt-[56px] md:flex-row md:justify-evenly 
          xl:w-[100%] xl:mt-[80px] xl:mx-0 xl:justify-between 
          xl:items-start`}>
            <ColumnOne styles={`h-[100%] flex flex-col justify-between 
            items-center gap-[20px] sm:gap-[27px] md:items-start 
            md:gap-[18px] xl:gap-[27px]`}>
              {/* Newsletter title */}
              <h6 className="w-[126px] h-[26px] rounded-[7px] 
              bg-positivusGreen text-center content-center mx-auto 
              font-spaceGrotesk font-medium text-[16px] text-black 
              sm:text-[20px] md:mx-0 md:text-[14px] lg:text-[16px] 
              xl:text-[20px]">
                Contact Us:
              </h6>
              {/* Newsletter info */}
              <div className="mb-[60px] flex flex-col justify-center 
              items-center gap-[10px] sm:gap-[20px] md:items-start 
              md:gap-[8px] xl:mb-0 xl:gap-[20px]">
                <FooterText content={"Email: info@positivus.com"} />
                <FooterText content={"Phone: 555-567-8901"} />
                {/* Address */}
                <div className="text-center md:text-start">
                  <FooterText content={"Address: 1234 Main St"} />
                  <FooterText content={"Moonstone City, Stardust State 12345"} />
                </div>
              </div>
            </ColumnOne>
            {/* Newsletter form */}
            <ColumnTwo styles={`w-[280px] rounded-[14px] 
            bg-[#292A32] px-[40px] py-[60px] flex flex-col 
            justify-center items-center gap-[20px] sm:w-[500px] 
            md:w-[280px] xl:w-[635px] xl:flex-row`}>
              {/* Newsletter email input */}
              <input 
                className="w-[220px] h-[45px] bg-[#292A32] 
                rounded-[7px] border border-white pl-[20px] 
                font-spaceGrotesk font-normal text-[14px] 
                text-white placeholder:font-spaceGrotesk 
                placeholder:font-normal placeholder:text-[14px] 
                placeholder:text-white focus:outline-none 
                focus:border focus:border-positivusGreen 
                sm:w-[450px] sm:h-[55px] sm:rounded-[10px] 
                sm:text-[16px] sm:placeholder:text-[16px] 
                md:w-[220px] md:h-[45px] md:rounded-[7px] 
                md:text-[14px] md:placeholder:text-[14px] 
                xl:w-[285px] xl:h-[65px] xl:rounded-[14px] 
                xl:pl-[35px] xl:text-[20px] xl:placeholder:text-[20px]"
                type="text" 
                placeholder="Email"
              />
              {/* Newsletter button */}
              <button className="w-[220px] h-[45px] rounded-[7px] 
              bg-positivusGreen font-spaceGrotesk font-normal text-[14px] 
              text-black sm:w-[450px] sm:h-[55px] sm:rounded-[10px] 
              sm:text-[16px] md:w-[220px] md:h-[45px] md:rounded-[7px] 
              md:text-[14px] xl:w-[250px] xl:h-[70px] xl:rounded-[14px] 
              xl:text-[20px]">
                Subcribe to news
              </button>
            </ColumnTwo>
          </Row>
          {/* Row 3 */}
          <Row styles={`mt-[50px] flex flex-col justify-center 
          items-center gap-[6px] text-center xl:flex-row xl:justify-start 
          xl:gap-[40px]`}>
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
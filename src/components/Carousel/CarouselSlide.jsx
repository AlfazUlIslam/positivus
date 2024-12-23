import { bubble } from "../../assets"

const CarouselSlide = (props) => {
  const { quote, quotee, position } = props

  return (
    // Carousel slide
    <div className='w-[100%] p-[20px] relative overflow-hidden 
    flex flex-col justify-center items-center sm:w-[60%]'>
      {/* Bubble */}
      <div 
        className="w-[260px] h-[260px] bg-contain bg-center bg-no-repeat 
        px-[20px] pt-[75px] font-spaceGrotesk font-normal text-[9px] 
        text-white md:w-[400px] md:pt-[65px] md:text-[12px] lg:w-[500px] 
        lg:pt-[45px] lg:text-[16px] xl:w-[600px] xl:px-[50px] xl:pt-[40px] 
        xl:text-[18px]"
        style={{backgroundImage: `url(${bubble})`}}
      >
          {quote}
      </div>
      {/* Quotee and position */}
      <div className="w-[250px] pt-[0px] flex flex-col items-start 
      gap-[2px] md:w-[350px] lg:w-[420px] xl:w-[500px] xl:pt-[20px]">
        {/* Quotee */}
        <h6 className="font-spaceGrotesk font-bold text-[12px] 
        text-[#B9FF66] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          {quotee}
        </h6>
        {/* Position */}
        <span className="font-spaceGrotesk font-medium text-[10px] 
        text-white md:text-[12px] lg:text-[14px] xl:text-[16px]">
          {position}
        </span>
      </div>
    </div>
  )
}
export default CarouselSlide
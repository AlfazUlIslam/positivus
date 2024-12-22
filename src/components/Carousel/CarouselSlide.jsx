import { bubble } from "../../assets"

const CarouselSlide = (props) => {
  const { quote, quotee, position } = props

  return (
    // Carousel slide
    <div className='w-[60%] p-[20px] relative overflow-hidden'>
      {/* Bubble */}
      <div 
          className="w-[600px] h-[260px] bg-contain 
          bg-center bg-no-repeat px-[50px] pt-[40px] font-spaceGrotesk 
          font-normal text-[18px] text-white"
          style={{backgroundImage: `url(${bubble})`}}
      >
          {quote}
      </div>
      {/* Quotee and position */}
      <div className="pt-[40px] pl-[80px] flex flex-col items-start 
      gap-[2px]">
        {/* Quotee */}
        <h6 className="font-spaceGrotesk font-bold text-[18px] 
        text-[#B9FF66]">
          {quotee}
        </h6>
        {/* Position */}
        <span className="font-spaceGrotesk font-medium text-[16px] 
        text-white">
          {position}
        </span>
      </div>
    </div>
  )
}
export default CarouselSlide
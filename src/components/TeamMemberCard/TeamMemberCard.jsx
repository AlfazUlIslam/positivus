import { linkedinIconBlack } from "../../assets"

const TeamMemberCard = (props) => {
    const { avatar, altText, name, position, about } = props
        
    return (
        // Team member card
        <div className="w-[280px] h-[260px] rounded-[25px] border 
        border-b-[6px] border-positivusDark p-[20px] flex flex-col 
        justify-start items-start divide-y-[2px] sm:w-[250px] 
        sm:h-[280px] md:w-[350px] md:h-[320px] md:rounded-[35px] 
        md:p-[30px] xl:w-[387px] xl:h-[380px] xl:rounded-[45px] 
        xl:p-[40px]">
            {/* Team member card header */}
            <header className="w-full pb-[14px] flex justify-start 
            items-end gap-[8px] md:pb-[28px] md:gap-[15px] xl:pb-[28px] 
            xl:gap-[15px]">
                {/* DP */}
                <div>
                    <img 
                        className="w-[70px] md:w-[90px] xl:w-auto"
                        src={avatar} 
                        alt={altText} 
                    />
                </div>
                {/* Icon and info */}
                <div className="w-full flex flex-col justify-between 
                items-center">
                    {/* Icon */}
                    <div className="w-full flex justify-end">
                        <img 
                            className="w-[25px] md:w-[28px] xl:w-auto"
                            src={linkedinIconBlack} 
                            alt={"LinkedIn Icon"} 
                        />
                    </div>
                    {/* Info */}
                    <div className="w-full flex flex-col 
                    justify-center items-start gap-[6px]">
                        {/* Name */}
                        <h5 className="font-spaceGrotesk font-medium 
                        text-[16px] text-black md:text-[18px] xl:text-[20px]">
                            {name}
                        </h5>
                        {/* Position */}
                        <h6 className="font-spaceGrotesk font-normal 
                        text-[14px] text-black sm:text-[12px] md:text-[16px] xl:text-[18px]">
                            {position}
                        </h6>
                    </div>
                </div>
            </header>
            {/* About */}
            <p className="w-[220px] pt-[14px] font-spaceGrotesk 
            font-normal text-[14px] text-black text-start sm:w-[200px] 
            md:w-[250px] md:text-[16px] xl:w-[317px] xl:pt-[28px] 
            xl:text-[18px]">
                {about}
            </p>
        </div>
    )
}
export default TeamMemberCard
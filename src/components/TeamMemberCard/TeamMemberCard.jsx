import { linkedinIconBlack } from "../../assets"

const TeamMemberCard = (props) => {
    const { avatar, altText, name, position, about } = props
        
    return (
        // Team member card
        // w-[387px] h-[330px] rounded-[45px] p-[40px]
        <div className="w-[280px] h-auto rounded-[25px] border 
        border-b-[6px] border-positivusDark p-[20px] flex flex-col 
        justify-center items-center divide-y-[2px]">
            {/* Team member card header */}
            {/* pb-[28px] gap-[15px] */}
            <header className="w-full pb-[14px] flex justify-start 
            items-end gap-[8px]">
                {/* DP */}
                <div>
                    <img 
                        className="w-[70px]"
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
                            className="w-[25px]"
                            src={linkedinIconBlack} 
                            alt={"LinkedIn Icon"} 
                        />
                    </div>
                    {/* Info */}
                    <div className="w-full flex flex-col 
                    justify-center items-start gap-[6px]">
                        {/* Name */}
                        {/* text-[20px] */}
                        <h5 className="font-spaceGrotesk font-medium 
                        text-[16px] text-black">
                            {name}
                        </h5>
                        {/* Position */}
                        {/* text-[18px] */}
                        <h6 className="font-spaceGrotesk font-normal 
                        text-[14px] text-black">
                            {position}
                        </h6>
                    </div>
                </div>
            </header>
            {/* About */}
            {/* w-[317px] pt-[28px] text-[18px] */}
            <p className="w-[200px] pt-[14px] font-spaceGrotesk 
            font-normal text-[14px] text-black text-start">
                {about}
            </p>
        </div>
    )
}
export default TeamMemberCard
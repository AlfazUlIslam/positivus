import { linkedinIconBlack } from "../../assets"

const TeamMemberCard = (props) => {
    const { avatar, altText, name, position, about } = props
        
    return (
        // Team member card
        <div className="w-[387px] h-[330px] rounded-[45px] border 
        border-b-[6px] border-positivusDark p-[40px] flex flex-col 
        justify-center items-center divide-y-[2px]">
            {/* Team member card header */}
            <header className="w-full pb-[28px] flex justify-start 
            items-end gap-[15px]">
                {/* DP */}
                <div>
                    <img 
                        className=""
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
                            className=""
                            src={linkedinIconBlack} 
                            alt={"LinkedIn Icon"} 
                        />
                    </div>
                    {/* Info */}
                    <div className="w-full flex flex-col 
                    justify-center items-start gap-[6px]">
                        {/* Name */}
                        <h5 className="font-spaceGrotesk font-medium 
                        text-[20px] text-black">
                            {name}
                        </h5>
                        {/* Position */}
                        <h6 className="font-spaceGrotesk font-normal 
                        text-[18px] text-black">
                            {position}
                        </h6>
                    </div>
                </div>
            </header>
            {/* About */}
            <p className="w-[317px] pt-[28px] font-spaceGrotesk font-normal 
            text-[18px] text-black text-start">
                {about}
            </p>
        </div>
    )
}
export default TeamMemberCard
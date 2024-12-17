import { Container, Content } from "../../containers"
import { Heading, Description, TeamMemberCard, SectionBtn } from "../../components"
import { teamMembersData } from "../../data"

const Team = () => {
    return (
        // Team
        <section id="team">
            <Container styles={`px-6 py-[40px] xl:py-[70px]`}>
                <Content styles={`flex flex-col justify-center 
                items-center gap-[20px] xl:flex-row xl:justify-start 
                xl:gap-[40px]`}>
                    <Heading content={"Team"} />
                    <Description 
                        styles={`w-[280px] text-center sm:w-[500px] 
                        xl:w-[580px] xl:text-start`}
                        content={"Meet the skilled and experienced team behind our successful digital marketing strategies"}
                    />
                </Content>
                {/* Team members cards */}
                <div className="mt-[40px] mb-[20px] flex flex-col 
                items-center gap-[20px] sm:flex-row sm:flex-wrap 
                md:justify-center xl:mt-[80px] xl:mb-[40px] 
                xl:justify-between xl:gap-[40px]">
                    {teamMembersData.map((teamMemberDatum) => (
                        <TeamMemberCard 
                            key={teamMemberDatum.id}
                            avatar={teamMemberDatum.avatar}
                            altText={teamMemberDatum.altText}
                            name={teamMemberDatum.name}
                            position={teamMemberDatum.position}
                            about={teamMemberDatum.about}
                        />
                    ))}
                </div>
                {/* See all team button */}
                <div className="w-full text-center xl:text-end">
                    <SectionBtn 
                        styles={`w-[170px] xl:w-[270px]`}
                        content={"See all team"}
                    />
                </div>
            </Container>
        </section>
    )
}
export default Team
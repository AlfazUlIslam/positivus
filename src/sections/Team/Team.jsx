import { Container, Content } from "../../containers"
import { Heading, Description, TeamMemberCard, SectionBtn } from "../../components"
import { teamMembersData } from "../../data"

const Team = () => {
    return (
        // Team
        <section id="team">
            {/* py-[70px] */}
            <Container styles={`px-6 py-[40px]`}>
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
                {/* mt-[80px] mb-[40px] flex-wrap justify-between 
                gap-[40px] */}
                <div className="mt-[40px] mb-[20px] flex flex-col 
                items-center gap-[20px]">
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
                {/* text-end */}
                <div className="w-full text-center">
                    {/* w-[270px] */}
                    <SectionBtn 
                        styles={`w-[170px]`}
                        content={"See all team"}
                    />
                </div>
            </Container>
        </section>
    )
}
export default Team
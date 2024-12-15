import { v4 as uuidv4 } from "uuid"
import { seoLogo, ppcaLogo, smmLogo, emLogo, ccLogo, aatLogo, johnSmithDP, janeDoeDP, michaelBrownDP, emilyJohnsonDP, brianWilliamsDP, sarahKimDP } from "../assets"

export const servicesCardsData = [
    {
        id: uuidv4(),
        theme: "grey",
        titleOne: "Search engine",
        titleTwo: "optimization",
        logo: seoLogo,
        altText: "SEO Logo"
    },
    {
        id: uuidv4(),
        theme: "green",
        titleOne: "Pay-per-click",
        titleTwo: "advertising",
        logo: ppcaLogo,
        altText: "Pay-per-click advertising Logo"
    },
    {
        id: uuidv4(),
        theme: "black",
        titleOne: "Socail Media",
        titleTwo: "Marketing",
        logo: smmLogo,
        altText: "Socail Media Marketing"
    },
    {
        id: uuidv4(),
        theme: "grey",
        titleOne: "Email",
        titleTwo: "Marketing",
        logo: emLogo,
        altText: "Email Marketing"
    },
    {
        id: uuidv4(),
        theme: "green",
        titleOne: "Content",
        titleTwo: "Creation",
        logo: ccLogo,
        altText: "Content Creation"
    },
    {
        id: uuidv4(),
        theme: "black",
        titleOne: "Analytics and",
        titleTwo: "Tracking",
        logo: aatLogo,
        altText: "Analytics and Tracking"
    },
]

export const studiesData = [
    {
        id: uuidv4(),
        description: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
    },
    {
        id: uuidv4(),
        description: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
    },
    {
        id: uuidv4(),
        description: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
    },
]

export const teamMembersData = [
    {
        id: uuidv4(),
        avatar: johnSmithDP,
        altText: "John Smith",
        name: "John Smith",
        position: "CEO and Founder",
        about: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
    },
    {
        id: uuidv4(),
        avatar: janeDoeDP,
        altText: "Jane Doe",
        name: "Jane Doe",
        position: "Director of Operations",
        about: "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
    },
    {
        id: uuidv4(),
        avatar: michaelBrownDP,
        altText: "Michael Brown",
        name: "Michael Brown",
        position: "Senior SEO Specialist",
        about: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
    },
    {
        id: uuidv4(),
        avatar: emilyJohnsonDP,
        altText: "Emily Johnson",
        name: "Emily Johnson",
        position: "PPC Manager",
        about: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
    },
    {
        id: uuidv4(),
        avatar: brianWilliamsDP,
        altText: "Brian Williams",
        name: "Brian Williams",
        position: "Social Media Specialist",
        about: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
    },
    {
        id: uuidv4(),
        avatar: sarahKimDP,
        altText: "Sarah Kim",
        name: "Sarah Kim",
        position: "Content Creator",
        about: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"
    },
]
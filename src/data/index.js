import { v4 as uuidv4 } from "uuid"
import { seoLogo, ppcaLogo, smmLogo, emLogo, ccLogo, aatLogo } from "../assets"

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
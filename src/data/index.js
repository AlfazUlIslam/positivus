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
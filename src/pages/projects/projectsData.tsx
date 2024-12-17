import { assert } from "tsafe/assert";

import p24zen from "assets/project-gallery/p-zen.webp";
import p23dame from "assets/project-gallery/p-dame.webp";
import p23gmeta from "assets/project-gallery/p-gmeta.webp";
import p23iso from "assets/project-gallery/p-iso.webp";
import p21arti from "assets/project-gallery/p-arti.webp";
import p23gili from "assets/p-gili.webp";
import p21famed from "assets/project-gallery/p-famed.webp";
import p23badgeur from "assets/project-gallery/p-badgeur.webp";

import bgGmeta from "assets/projects-background/bg-gmeta.webp";
import bgBadgeur from "assets/projects-background/bg-badgeur.svg";
import bgFamed from "assets/projects-background/bg-famed.svg";

import zenPhoneUrl from "assets/zen-phone.png";
import zenMacUrl from "assets/zen-mac.png";
import zenLogoUrl from "assets/zen-logo.png";
import zenIpadUrl from "assets/zen-ipad.png";

import badgeurPhoneUrl from "assets/projects-images/badgeur/badgeur-phone.webp";
import badgeurLogoUrl from "assets/projects-images/badgeur/badgeur-logo.svg";
import badgeurColor1Url from "assets/projects-images/badgeur/badgeur-color1.svg";
import badgeurColor2Url from "assets/projects-images/badgeur/badgeur-color2.svg";
import badgeurColor3Url from "assets/projects-images/badgeur/badgeur-color3.svg";
import wfBadgeurUrl from "assets/projects-images/badgeur/badgeur-wf.webp";
import badgeurTestUrl from "assets/projects-images/badgeur/badgeur-test.webp";

import famedPhoneMUrl from "assets/famed-phoneM.svg";
import famedPhoneLUrl from "assets/famed-phoneL.svg";
import famedPhoneRUrl from "assets/famed-phoneR.svg";

import gmetaMacUrl from "assets/projects-images/gmeta/gmetaMac.webp";
import gmetaIpad1Url from "assets/projects-images/gmeta/gmetaIpad1.webp";
import gmetaIpad2Url from "assets/projects-images/gmeta/gmetaIpad2.webp";
import gmetaIpad3Url from "assets/projects-images/gmeta/gmetaIpad3.webp";

export const projectIds = ["zen", "gili", "gmeta", "badgeur", "iso", "dame", "famed", "arti"] as const;
export type ProjectId = (typeof projectIds)[number];

export type Project = {
    id: ProjectId;
    imageUrl: string;
    backgroundUrl: string;
    name: string;
    description: string;
    year: string;
    linkOnline?: string;
    linkFigma?: string;
    linkDownload?: string;
};

export const projects: Project[] = [
    {
        id: projectIds[0],
        year: "2024",
        imageUrl: p24zen,
        backgroundUrl: p24zen,
        name: "Zen Gourmet",
        description:
            "Zen Gourmet is the website for an upcoming Vietnamese restaurant in Mannheim. The site was designed entirely from scratch with Figma and built using React and TypeScript.",
        linkOnline: "https://ap-restaurant-template.vercel.app/",
        linkFigma:
            "https://www.figma.com/proto/j2u9A8Ni65LVpMZGTlwmHu/Restaurant-template?page-id=6%3A5805&node-id=349-26084&node-type=canvas&viewport=436%2C308%2C0.04&t=t97lpvEDD2t1a5ne-1&scaling=contain&content-scaling=fixed"
    },
    {
        id: projectIds[1],
        year: "2023",
        imageUrl: p23gili,
        backgroundUrl: p23gili,
        name: "GILI Platforms",
        description:
            "For three years, I had the opportunity to work as the website manager of an online training platform for a start-up specializing in LegalTech. My role involved designing prototypes with Figma and implementing these concepts using WordPress and Elementor. This experience allowed me to hone my technical skills while learning to manage large-scale projects effectively."
    },
    {
        id: projectIds[2],
        year: "2023",
        imageUrl: p23gmeta,
        backgroundUrl: bgGmeta,
        name: "Gméta",
        description:
            "Gméta is a Master's thesis project in Master 2 Digital Creation and Publishing at Saint-Denis University, developed in collaboration with the Global Institute for Law and Innovation. The project focused on the UX/UI design of an educational metaverse. The goal was to create a prototype of an immersive application aimed at replicating the natural cohesion that develops in an online classroom.",
        linkFigma:
            "https://www.figma.com/proto/LHeeTDYqxcQkhchANYCnKL/Gm%C3%A9ta?page-id=460%3A12006&type=design&node-id=460-12007&viewport=863%2C180%2C0.06&t=FKah8L7tzi4Duqlg-1&scaling=contain&starting-point-node-id=460%3A12007"
    },
    {
        id: projectIds[3],
        year: "2023",
        imageUrl: p23badgeur,
        backgroundUrl: bgBadgeur,
        name: "Badgeur",
        description:
            "Badgeur is an innovative academic project initially developed during my Bachelor's in Management at IAE Lyon 3 and later expanded during my Master's in Digital Creation and Publishing at Saint-Denis University. The project aims to replace traditional keychains with a compact chip and mobile app for seamless, secure access to personal spaces.",
        linkFigma:
            "https://www.figma.com/proto/FRiP6t08RfqX3K0GmZ9v8b/Projet-Badgeur?page-id=0%3A1&type=design&node-id=22-251&viewport=2613%2C363%2C0.56&scaling=scale-down&starting-point-node-id=22%3A251&mode=design&t=EeE3Tq5y9X2PPakM-1"
    },
    {
        id: projectIds[4],
        year: "2023",
        imageUrl: p23iso,
        backgroundUrl: p23iso,
        name: "“ISO 668”",
        description:
            "“ISO 668” is part of the MétaversCity initiative at Saint-Denis University, which aims to explore the potential applications of the metaverse in across a wide range of fields such as culture, education, economics, and politics. The 2023 edition, developed in collaboration with the University of the Aegean in Syros, received academic support and artistic evaluation from Maurice Benayoun, a renowned French pioneer in contemporary new-media art, curation, and theory. The project has been widely acclaimed for its innovative approach to cultural and artistic expression, as well as its practical applications within the metaverse.",
        linkDownload: "https://filedn.com/lY4kM0nseRFykf1NMPMRuoQ/MEMORY%20CONTAINER.exe"
    },
    {
        id: projectIds[5],
        year: "2022",
        imageUrl: p23dame,
        backgroundUrl: p23dame,
        name: "In the Shadow of La Dame de Canton",
        description:
            "“In the Shadow of La Dame de Canton” is an immersive cultural experience that merges traditional Chinese arts with modern technology. The show features elements such as Chinese shadow puppetry, dance, music, and projection. This creation is the result of a collaboration with Philippe Holvoet, an entrepreneur specializing in catering and events. The show is currently in the prototype stage."
    },
    {
        id: projectIds[6],
        year: "2021",
        imageUrl: p21famed,
        backgroundUrl: bgFamed,
        name: "Famed",
        description:
            "In the world of retail, “FAMED” is a groundbreaking innovation that transforms digital advertising and interactive shopping. By merging the engaging experience of a storefront-sized mirror with the power of digital marketing, FAMED creates an immersive, personalized shopping journey for consumers, while offering brands a unique and captivating advertising platform to connect with their audience.",
        linkFigma:
            "https://www.figma.com/proto/X726Gg4oq7oP5EQ2v6HVMF/Famed?page-id=0%3A1&type=design&node-id=2-68&viewport=1626%2C595%2C0.23&scaling=scale-down&starting-point-node-id=2%3A68"
    },
    {
        id: projectIds[7],
        year: "2021",
        imageUrl: p21arti,
        backgroundUrl: p21arti,
        name: "ARTI",
        description:
            "“ARTI” is an interactive application project exploring the critical question: “Will artificial intelligence surpass humans?” Our objective is to provoke thought and encourage users to reflect on this significant issue. Through the ARTI application, we aim to delve deeper into these inquiries and inspire users to reconsider their understanding of the current and future capabilities of artificial intelligence in relation to human abilities.",
        linkFigma:
            "https://www.figma.com/proto/3DT9DYB4yMnDL8OL2wWqSW/ArtI?page-id=0%3A1&type=design&node-id=23-31517&viewport=702%2C73%2C0.08&t=eHz3GGwuiCCmWaCp-1&scaling=scale-down&starting-point-node-id=23%3A31517"
    }
];

// Make sure we didn't messed up
assert(JSON.stringify(projectIds) === JSON.stringify(projects.map(({ id }) => id)));

export function getProjectByNameId(params: { projectId: Project["id"] }): Project {
    const { projectId } = params;

    const project = projects.find(project => project.id === projectId);

    assert(project !== undefined);

    return project;
}

export const detailImagesByProjectId = {
    zen: {
        zenPhoneUrl,
        zenMacUrl,
        zenLogoUrl,
        zenIpadUrl
    },
    gili: {},
    gmeta: {
        gmetaMacUrl,
        gmetaIpad1Url,
        gmetaIpad2Url,
        gmetaIpad3Url
    },
    badgeur: {
        badgeurPhoneUrl,
        badgeurLogoUrl,
        badgeurColor1Url,
        badgeurColor2Url,
        badgeurColor3Url,
        wfBadgeurUrl,
        badgeurTestUrl
    },
    iso: {},
    dame: {},
    famed: {
        famedPhoneMUrl,
        famedPhoneLUrl,
        famedPhoneRUrl
    },
    arti: {}
};

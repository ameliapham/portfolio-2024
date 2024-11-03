import { assert } from "tsafe/assert";

import backgroundUrl from "assets/p-arti.svg";

import pArtiWebpUrl from "assets/p-arti.webp";
import pZenWebpUrl from "assets/p-zen.webp";
import pGiliWebpUrl from "assets/p-gili.webp";
import pGmetaWebpUrl from "assets/p-gmeta.webp";
import pBadgeurWebpUrl from "assets/p-badgeur.webp";
import pIsoWebpUrl from "assets/p-iso.webp";
import pDameWebpUrl from "assets/p-dame.webp";
import pFamedWebpUrl from "assets/p-famed.webp";

export const projectIds = ["arti", "zen", "gili", "gmeta", "badgeur", "iso", "dame", "famed" ] as const;

type ProjectId = (typeof projectIds)[number];

export type Project = {
    id: ProjectId;
    imageUrl: string;
    background: string;
    name: string;
    description: string;
    year: string;
};

export const projects: Project[] = [
    {
        id: projectIds[0],
        year: "2021",
        imageUrl: pArtiWebpUrl,
        background: backgroundUrl,
        name: "ARTI",
        description:
            "“ARTI” is an interactive application project exploring the critical question: “Will artificial intelligence surpass humans?” Our objective is to provoke thought and encourage users to reflect on this significant issue. Through the ARTI application, we aim to delve deeper into these inquiries and inspire users to reconsider their understanding of the current and future capabilities of artificial intelligence in relation to human abilities."
    },
    {
        id: projectIds[1],
        year: "2024",
        imageUrl: pZenWebpUrl,
        background: backgroundUrl,
        name: "Zen Gourmet",
        description:
            "Zen Gourmet is the website for an upcoming Vietnamese restaurant in Mannheim. The site was designed entirely from scratch with Figma and built using React and TypeScript."
    },
    {
        id: projectIds[2],
        year: "2023",
        imageUrl: pGiliWebpUrl,
        background: backgroundUrl,
        name: "GILI Platforms",
        description:
            "For three years, I had the opportunity to work as the website manager of an online training platform for a start-up specializing in LegalTech. My role involved designing prototypes with Figma and implementing these concepts using WordPress and Elementor. This experience allowed me to hone my technical skills while learning to manage large-scale projects effectively."
    },
    {
        id: projectIds[3],
        year: "2023",
        imageUrl: pGmetaWebpUrl,
        background: backgroundUrl,
        name: "Gméta",
        description:
            "Gméta is a Master's thesis project in Master 2 Digital Creation and Publishing at Saint-Denis University, developed in collaboration with the Global Institute for Law and Innovation. The project focused on the UX/UI design of an educational metaverse. The goal was to create a prototype of an immersive application aimed at replicating the natural cohesion that develops in an online classroom."
    },
    {
        id: projectIds[4],
        year: "2023",
        imageUrl: pBadgeurWebpUrl,
        background: backgroundUrl,
        name: "Badgeur",
        description:
            "Badgeur is an innovative academic project initially developed during my Bachelor's in Management at IAE Lyon 3 and later expanded during my Master's in Digital Creation and Publishing at Saint-Denis University. The project aims to replace traditional keychains with a compact chip and mobile app for seamless, secure access to personal spaces."
    },
    {
        id: projectIds[5],
        year: "2023",
        imageUrl: pIsoWebpUrl,
        background: backgroundUrl,
        name: "“ISO 668”",
        description:
            "“ISO 668” is part of the MétaversCity initiative at Saint-Denis University, which aims to explore the potential applications of the metaverse in across a wide range of fields such as culture, education, economics, and politics. The 2023 edition, developed in collaboration with the University of the Aegean in Syros, received academic support and artistic evaluation from Maurice Benayoun, a renowned French pioneer in contemporary new-media art, curation, and theory. The project has been widely acclaimed for its innovative approach to cultural and artistic expression, as well as its practical applications within the metaverse."
    },
    {
        id: projectIds[6],
        year: "2022",
        imageUrl: pDameWebpUrl,
        background: backgroundUrl,
        name: "In the Shadow of La Dame de Canton",
        description:
            "“In the Shadow of La Dame de Canton” is an immersive cultural experience that merges traditional Chinese arts with modern technology. The show features elements such as Chinese shadow puppetry, dance, music, and projection. This creation is the result of a collaboration with Philippe Holvoet, an entrepreneur specializing in catering and events. The show is currently in the prototype stage."
    },
    {
        id: projectIds[7],
        year: "2021",
        imageUrl: pFamedWebpUrl,
        background: backgroundUrl,
        name: "Famed",
        description:
            "The “FAMED” project is an innovative initiative poised to transform the retail landscape. Developed in an academic setting, FAMED aims to redefine the shopping experience by combining advanced technologies (VR & AI) and personalization."
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

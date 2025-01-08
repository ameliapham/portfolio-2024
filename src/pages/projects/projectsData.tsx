import { assert } from "tsafe/assert";

import pZenUrl from "assets/project-gallery/p-zen.webp";
import pCclUrl from "assets/project-gallery/p-ccl.webp";
import pDameUrl from "assets/project-gallery/p-dame.webp";
import pGmetaUrl from "assets/project-gallery/p-gmeta.webp";
import pIsoUrl from "assets/project-gallery/p-iso.webp";
import pArtiUrl from "assets/project-gallery/p-arti.webp";
import pPvalUrl from "assets/project-gallery/p-pval.webp";
import pFamedUrl from "assets/project-gallery/p-famed.webp";
import pBadgeurUrl from "assets/project-gallery/p-badgeur.webp";

import bgGmetaUrl from "assets/projects-background/bg-gmeta.webp";
import bgBadgeurUrl from "assets/projects-background/bg-badgeur.svg";
import bgFamedUrl from "assets/projects-background/bg-famed.svg";
import bgCclUrl from "assets/projects-background/bg-ccl.svg";
import bgPvalUrl from "assets/projects-background/bg-pval.svg";
import bgArtiUrl from "assets/projects-background/bg-arti.svg";

import zenPhoneUrl from "assets/projects-images/zen/zen-phone.webp";
import zenMacUrl from "assets/projects-images/zen/zen-mac.webp";
import zenLogoUrl from "assets/projects-images/zen/zen-logo.webp";
import zenIpadUrl from "assets/projects-images/zen/zen-ipad.webp";

import badgeurPhoneUrl from "assets/projects-images/badgeur/badgeur-phone.webp";
import badgeurLogoUrl from "assets/projects-images/badgeur/badgeur-logo.svg";
import badgeurColor1Url from "assets/projects-images/badgeur/badgeur-color-1.svg";
import badgeurColor2Url from "assets/projects-images/badgeur/badgeur-color-2.svg";
import badgeurColor3Url from "assets/projects-images/badgeur/badgeur-color-3.svg";
import wfBadgeurUrl from "assets/projects-images/badgeur/badgeur-wf.webp";
import badgeurTestUrl from "assets/projects-images/badgeur/badgeur-test.webp";

import famedPhoneMUrl from "assets/projects-images/famed/famed-phoneM.svg";
import famedPhoneLUrl from "assets/projects-images/famed/famed-phoneL.svg";
import famedPhoneRUrl from "assets/projects-images/famed/famed-phoneR.svg";

import gmetaMacUrl from "assets/projects-images/gmeta/gmeta-mac.webp";
import gmetaMacbookUrl from "assets/projects-images/gmeta/gmeta-macbook.webp";
import gmetaImacUrl from "assets/projects-images/gmeta/gmeta-imac.webp";
import gmetaIpad1Url from "assets/projects-images/gmeta/gmeta-ipad-1.webp";
import gmetaIpad2Url from "assets/projects-images/gmeta/gmeta-ipad-2.webp";
import gmetaIpad3Url from "assets/projects-images/gmeta/gmeta-ipad-3.webp";
import gmetaIpad4Url from "assets/projects-images/gmeta/gmeta-ipad-4.webp";
import gmetaIpad5Url from "assets/projects-images/gmeta/gmeta-ipad-5.webp";
import gmetaComponent1Url from "assets/projects-images/gmeta/gmeta-component-1.webp";
import gmetaComponent2Url from "assets/projects-images/gmeta/gmeta-component-2.webp";
import gmetaComponent3Url from "assets/projects-images/gmeta/gmeta-component-3.webp";
import gmetaComponent4Url from "assets/projects-images/gmeta/gmeta-component-4.svg";
import gmetaComponent5Url from "assets/projects-images/gmeta/gmeta-component-5.svg";
import gmetaColorUrl from "assets/projects-images/gmeta/gmeta-color.svg";
import gmetaLogo1Url from "assets/projects-images/gmeta/gmeta-logo-1.svg";
import gmetaLogo2Url from "assets/projects-images/gmeta/gmeta-logo-2.svg";
import gmetaMoodboard1Url from "assets/projects-images/gmeta/gmeta-moodboard-1.webp";
import gmetaMoodboard2Url from "assets/projects-images/gmeta/gmeta-moodboard-2.webp";
import gmetaMoodboard3Url from "assets/projects-images/gmeta/gmeta-moodboard-3.webp";
import gmetaMoodboard4Url from "assets/projects-images/gmeta/gmeta-moodboard-4.webp";
import gmetaMoodboard5Url from "assets/projects-images/gmeta/gmeta-moodboard-5.webp";

import dameBookUrl from "assets/projects-images/dame/dame-book.webp";
import dameToileUrl from "assets/projects-images/dame/dame-toile.webp";
import dameImage1Url from "assets/projects-images/dame/dame-image-1.webp";
import dameImage2Url from "assets/projects-images/dame/dame-image-2.webp";
import dameImage3Url from "assets/projects-images/dame/dame-image-3.webp";
import dameImage4Url from "assets/projects-images/dame/dame-image-4.webp";
import dameImage5Url from "assets/projects-images/dame/dame-image-5.webp";
import dameImage6Url from "assets/projects-images/dame/dame-image-6.webp";

import cclMacUrl from "assets/projects-images/ccl/ccl-mac.webp";
import cclIpadUrl from "assets/projects-images/ccl/ccl-ipad.webp";
import cclPlatform1Url from "assets/projects-images/ccl/ccl-platform-1.webp";
import cclPlatform2Url from "assets/projects-images/ccl/ccl-platform-2.webp";

import pvalImacUrl from "assets/projects-images/pval/pval-imac.webp";
import pvalIpadUrl from "assets/projects-images/pval/pval-ipad.webp";
import pvalIphoneUrl from "assets/projects-images/pval/pval-iphone.webp";

import artiPhoneUrl from "assets/projects-images/arti/arti-phone.webp";
import artiPhone1Url from "assets/projects-images/arti/arti-phone-1.webp";
import artiPhone2Url from "assets/projects-images/arti/arti-phone-2.webp";
import artiPhone3Url from "assets/projects-images/arti/arti-phone-3.webp";

export const projectIds = ["zen", "pval", "ccl", "badgeur", "gmeta", "iso", "dame", "famed", "arti"] as const;
export type ProjectId = (typeof projectIds)[number];

/**
 * "zen" -> "gili"
 * "gmeta" -> "badgeur"
 * "arti" -> "zen"
 */
export function getNextProjectId(projectId: ProjectId): ProjectId {
    const index = projectIds.indexOf(projectId);

    if (index === projectIds.length - 1) {
        return projectIds[0];
    }

    return projectIds[index + 1];
}

/**
 * "zen" -> "arti"
 * "badgeur" -> "gmeta"
 * "arti" -> "famed"
 */
export function getPreviousProjectId(projectId: ProjectId): ProjectId {
    const index = projectIds.indexOf(projectId);

    if (index === 0) {
        return projectIds[projectIds.length - 1];
    }

    return projectIds[index - 1];
}

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
        imageUrl: pZenUrl,
        backgroundUrl: pZenUrl,
        name: "Zen Asia",
        description:
            "Zen Asia is the website for an upcoming Vietnamese restaurant in Mannheim. The site was designed entirely from scratch with Figma and built using React and TypeScript.",
        linkOnline: "https://ap-restaurant-template.vercel.app/",
        linkFigma:
            "https://www.figma.com/proto/j2u9A8Ni65LVpMZGTlwmHu/Restaurant-template?page-id=6%3A5805&node-id=349-26084&node-type=canvas&viewport=436%2C308%2C0.04&t=t97lpvEDD2t1a5ne-1&scaling=contain&content-scaling=fixed"
    },
    {
        id: projectIds[1],
        year: "2024",
        imageUrl: pPvalUrl,
        backgroundUrl: bgPvalUrl,
        name: "Legal Education's Website",
        description:
            "An introducing website created for Global for Law and Innovation to promote their legal education programs. The site was designed with Figma and built with Wordpress and Elementor.",
        linkFigma: "https://www.figma.com/proto/q7nmSUlBsp2Wlxq8X4GoQq/Les-formations-de-GILI?page-id=708%3A11&node-id=303-2&viewport=-560%2C-163%2C0.11&t=lecvN5xnOxsYq3vn-1&scaling=scale-down&content-scaling=fixed"
    },
    {
        id: projectIds[2],
        year: "2023",
        imageUrl: pCclUrl,
        backgroundUrl: bgCclUrl,
        name: "Certificate of Customary Law's Website and Platform",
        description:
            "A digital solution created for Global for Law and Innovation, combining a promo website to attract students and an interactive platform to manage and follow law courses.",
        linkFigma: "https://www.figma.com/proto/q7nmSUlBsp2Wlxq8X4GoQq/Les-formations-de-GILI?page-id=728%3A2209&type=design&node-id=740-850&viewport=939%2C451%2C0.27&t=kDEJwc4Y6kE9vbtK-1&scaling=scale-down"

    },
    {
        id: projectIds[3],
        year: "2023",
        imageUrl: pBadgeurUrl,
        backgroundUrl: bgBadgeurUrl,
        name: "Badgeur",
        description:
            "Badgeur is an innovative academic project initially developed during my Bachelor's in Management at IAE Lyon 3 and later expanded during my Master's in Digital Creation and Publishing at Saint-Denis University. The project aims to replace traditional keychains with a compact chip and mobile app for seamless, secure access to personal spaces.",
        linkFigma:
            "https://www.figma.com/proto/FRiP6t08RfqX3K0GmZ9v8b/Projet-Badgeur?page-id=0%3A1&type=design&node-id=22-251&viewport=2613%2C363%2C0.56&scaling=scale-down&starting-point-node-id=22%3A251&mode=design&t=EeE3Tq5y9X2PPakM-1"
    },
    {
        id: projectIds[4],
        year: "2023",
        imageUrl: pGmetaUrl,
        backgroundUrl: bgGmetaUrl,
        name: "Gméta",
        description:
            "Gméta is a Master's thesis project in Master 2 Digital Creation and Publishing at Saint-Denis University, developed in collaboration with the Global Institute for Law and Innovation. The project focused on the UX/UI design of an educational metaverse. The goal was to create a prototype of an immersive application aimed at replicating the natural cohesion that develops in an online classroom.",
        linkFigma:
            "https://www.figma.com/proto/LHeeTDYqxcQkhchANYCnKL/Gm%C3%A9ta?page-id=460%3A12006&type=design&node-id=460-12007&viewport=863%2C180%2C0.06&t=FKah8L7tzi4Duqlg-1&scaling=contain&starting-point-node-id=460%3A12007"
    },
    {
        id: projectIds[5],
        year: "2023",
        imageUrl: pIsoUrl,
        backgroundUrl: pIsoUrl,
        name: "“ISO 668”",
        description:
            "“ISO 668” is part of the MétaversCity initiative at Saint-Denis University, which aims to explore the potential applications of the metaverse in across a wide range of fields such as culture, education, economics, and politics. The 2023 edition, developed in collaboration with the University of the Aegean in Syros, received academic support and artistic evaluation from Maurice Benayoun, a renowned French pioneer in contemporary new-media art, curation, and theory. The project has been widely acclaimed for its innovative approach to cultural and artistic expression, as well as its practical applications within the metaverse.",
        linkDownload: "https://filedn.com/lY4kM0nseRFykf1NMPMRuoQ/MEMORY%20CONTAINER.exe"
    },
    {
        id: projectIds[6],
        year: "2022",
        imageUrl: pDameUrl,
        backgroundUrl: pDameUrl,
        name: "In the Shadow of La Dame de Canton",
        description:
            "“In the Shadow of La Dame de Canton” is an immersive cultural experience that merges traditional Chinese arts with modern technology. The show features elements such as Chinese shadow puppetry, dance, music, and projection. This creation is the result of a collaboration with Philippe Holvoet, an entrepreneur specializing in catering and events. The show is currently in the prototype stage."
    },
    {
        id: projectIds[7],
        year: "2021",
        imageUrl: pFamedUrl,
        backgroundUrl: bgFamedUrl,
        name: "Famed",
        description:
            "In the world of retail, “FAMED” is a groundbreaking innovation that transforms digital advertising and interactive shopping. By merging the engaging experience of a storefront-sized mirror with the power of digital marketing, FAMED creates an immersive, personalized shopping journey for consumers, while offering brands a unique and captivating advertising platform to connect with their audience.",
        linkFigma:
            "https://www.figma.com/proto/X726Gg4oq7oP5EQ2v6HVMF/Famed?page-id=0%3A1&type=design&node-id=2-68&viewport=1626%2C595%2C0.23&scaling=scale-down&starting-point-node-id=2%3A68"
    },
    {
        id: projectIds[8],
        year: "2021",
        imageUrl: pArtiUrl,
        backgroundUrl: bgArtiUrl,
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
    pval: {
        pvalImacUrl,
        pvalIpadUrl,
        pvalIphoneUrl
    },
    ccl: {
        cclMac: cclMacUrl,
        cclIpad: cclIpadUrl,
        cclPlatform1: cclPlatform1Url,
        cclPlatform2: cclPlatform2Url
    },
    gmeta: {
        gmetaMacUrl,
        gmetaMacbookUrl,
        gmetaImacUrl,
        gmetaIpad1Url,
        gmetaIpad2Url,
        gmetaIpad3Url,
        gmetaIpad4Url,
        gmetaIpad5Url,
        gmetaComponent1Url,
        gmetaComponent2Url,
        gmetaComponent3Url,
        gmetaComponent4Url,
        gmetaComponent5Url,
        gmetaColorUrl,
        gmetaLogo1Url,
        gmetaLogo2Url,
        gmetaMoodboard1Url,
        gmetaMoodboard2Url,
        gmetaMoodboard3Url,
        gmetaMoodboard4Url,
        gmetaMoodboard5Url
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
    dame: {
        dameBookUrl,
        dameToileUrl,
        dameImage1Url,
        dameImage2Url,
        dameImage3Url,
        dameImage4Url,
        dameImage5Url,
        dameImage6Url
    },
    famed: {
        famedPhoneMUrl,
        famedPhoneLUrl,
        famedPhoneRUrl
    },
    arti: {
        artiPhoneUrl,
        artiPhone1Url,
        artiPhone2Url,
        artiPhone3Url
    }
};

import p24zen from "assets/p-zen.webp";
import p23dame from "assets/p-dame.webp";
import p23gmeta from "assets/p-gmeta.webp";
import p23iso from "assets/p-iso.webp";
import p21arti from "assets/p-arti.svg";
import p23gili from "assets/p-gili.webp";
import p21famed from "assets/p-famed.webp";
import p23badgeur from "assets/p-badgeur.webp";

export type ItemData = {
    nameId: "zen" | "dame" | "gmeta" | "iso" | "arti" | "gili" | "famed" | "badgeur";
    img: string;
    name: string;
    des: string;
    year: string;
};

export const projectData: ItemData[] = [
    {
        nameId: "arti",
        year: "2021",
        img: p21arti,
        name: "ARTI",
        des: "“ARTI” is an interactive application project exploring the critical question: “Will artificial intelligence surpass humans?” Our objective is to provoke thought and encourage users to reflect on this significant issue. Through the ARTI application, we aim to delve deeper into these inquiries and inspire users to reconsider their understanding of the current and future capabilities of artificial intelligence in relation to human abilities."
    },
    {
        nameId: "zen",
        year: "2024",
        img: p24zen,
        name: "Zen Gourmet",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus."
    },
    {
        nameId: "gili",
        year: "2023",
        img: p23gili,
        name: "GILI Platforms",
        des: "For three years, I had the opportunity to work as the website manager of an online training platform for a start-up specializing in LegalTech. My role involved designing prototypes with Figma and implementing these concepts using WordPress and Elementor. This experience allowed me to hone my technical skills while learning to manage large-scale projects effectively."
    },
    {
        nameId: "gmeta",
        year: "2023",
        img: p23gmeta,
        name: "Gméta",
        des: "Gméta is a Master's thesis project in Master 2 Digital Creation and Publishing, developed in collaboration with the Global Institute for Law and Innovation. The project focused on the UX/UI design of an educational metaverse. The goal was to create a prototype of an immersive application aimed at replicating the natural cohesion that develops in an online classroom."
    },
    {
        nameId: "badgeur",
        year: "2023",
        img: p23badgeur,
        name: "Badgeur",
        des: "One of my key achievements during my university career was designing an innovative mobile application from scratch to prevent losing keys. Using Figma, I meticulously crafted the UX and UI design, and built a library of reusable components to ensure design consistency. Click here to test the prototype and explore my systematic approach to interface design."
    },
    {
        nameId: "iso",
        year: "2023",
        img: p23iso,
        name: "“ISO 668”",
        des: "ISO 668 is an artistic project developed as part of a cooperative program between Paris 8 University and the University of the Aegean in Syros. This project combines virtual reality (VR) and sound to create an immersive experience of Syros culture. Through a 3D landscape representing the island, players can interact with symbolic elements such as a container highlighting Syros' maritime aspect and blue eyes representing Greek culture. Each blue eye reveals a unique story narrated by a local, immersing the player in the island's collective memory."
    },
    {
        nameId: "dame",
        year: "2022",
        img: p23dame,
        name: "In the Shadow of La Dame de Canton",
        des: "“In the Shadow of La Dame de Canton” is an immersive cultural experience that merges traditional Chinese arts with modern technology. The show features elements such as Chinese shadow puppetry, dance, music, and projection. This creation is the result of a collaboration with Philippe Holvoet, an entrepreneur specializing in catering and events. The show is currently in the prototype stage."
    },
    {
        nameId: "famed",
        year: "2021",
        img: p21famed,
        name: "Famed",
        des: "The “FAMED” project is an innovative initiative poised to transform the retail landscape. Developed in an academic setting, FAMED aims to redefine the shopping experience by combining advanced technologies (VR & AI) and personalization."
    }
];

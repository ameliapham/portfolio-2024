import project1 from 'assets/food-pho.webp';
import project2 from 'assets/5webp.webp';

export type ItemData = {
    img: string;
    name: string;
    des: string;
    link?: string;
    year: string;
}

export const projectData: ItemData[] = [
    {
        "img": project2,
        "name": "Project 0",
        "des": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.",
        "year": "2024"
    }, {
        "img": project1,
        "name": "Project 1",
        "des": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.",
        "year": "2023"
    }, {
        "img": project2,
        "name": "Project 2",
        "des": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.",
        "year": "2022"
    }, {
        "img": project1,
        "name": "Project 3",
        "des": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.",
        "year": "2021"
    }, {
        "img": project2,
        "name": "Project 4",
        "des": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.",
        "year": "2020"
    }, {
        "img": project1,
        "name": "Project 5",
        "des": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.",
        "year": "2019"
    }, {
        "img": project1,
        "name": "Project 6",
        "des": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et elementum purus.",
        "year": "2019"
    }
];
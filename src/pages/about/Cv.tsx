import { Typography } from "@mui/material";
import { SeeMoreButton } from "shared/SeeMoreButton";

export function Cv() {
    return (
        <>
            <Typography variant="h2">Amélia Pham</Typography>

            <Typography variant="body1">
                I am Huong PHAM, also known as Amélia PHAM.
                <br />
                <br />
                As a UI/UX Designer, Web Designer, and Front-End Developer, my expertise spans a wide
                range of activities in the digital design field, including user research, the creation of
                interactive prototypes, web design and development, as well as user testing.
            </Typography>

            <SeeMoreButton href="https://github.com/ameliapham/portfolio-2024/releases/download/assets/CV.Amelia.PHAM.2025.en.pdf">
                Download CV
            </SeeMoreButton>
        </>
    );
}

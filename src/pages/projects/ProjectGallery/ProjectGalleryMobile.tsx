import type { Props } from "./Props";
import { useStyles } from "tss";
import pZenWebpUrl from "assets/p-zen.webp";

export default function ProjectGalleryMobile(props: Props) {
    const { className } = props;

    const { cx, css } = useStyles();

    return (
        <div
            className={cx(
                css({
                    backgroundImage: `url('${pZenWebpUrl}')` /* Replace with your image URL */,
                    backgroundSize: "cover" /* Scales the background image to cover the div */,
                    backgroundPosition: "center" /* Center the background image */,
                    backgroundAttachment: "fixed" /* Fix the background image */
                }),
                className
            )}
        >
            {new Array(300).fill("").map((_, index) => (
                <p key={index}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec{" "}
                </p>
            ))}
        </div>
    );
}

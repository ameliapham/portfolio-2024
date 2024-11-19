import type { Props } from "./Props";

export default function ProjectGalleryMobile(props: Props) {
    const { className } = props;

    return (
        <div className={className}>
            {new Array(300).fill("").map((_, index) => (
                <p key={index}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec{" "}
                </p>
            ))}
        </div>
    );
}

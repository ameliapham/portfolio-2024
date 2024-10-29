import { tss } from "tss-react";

export type Props = {
    className?: string;
};

export default function Page(props: Props) {
    const { className } = props;

    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <div>
                <h1>Not Found 🥲</h1>
            </div>
        </div>
    );
}

const useStyles = tss.withName({ Page }).create({
    root: {
        color: "red",
        border: "5px solid yellow",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
});

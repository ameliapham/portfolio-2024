import { tss } from "tss-react/mui";
import { ProjectId, projectIds } from "./projectIds";

export type Props = {
    className?: string;
};

export function Project(props: Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>

        </div>
    );
}

const useStyles = tss
    .withName("Project")
    .create({
        root: {
            border: "1px solid red"
        }
    })
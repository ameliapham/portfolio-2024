import { tss } from "tss-react/mui";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import { Page5 } from "./Page5";
import { PageRoute } from "./route";

type Props = {
    className?: string;
    route: PageRoute;
};

export function Badgeur(props: Props) {
    const { className, route } = props;
    const { cx, classes } = useStyles();
    return (
        <>
            <div className={cx(classes.root, className)}>
                {(() => {
                    switch (route.params.badgeurId) {
                        case "page1":
                            return <Page1 />;
                        case "page2":
                            return <Page2 />;
                        case "page3":
                            return <Page3 />;
                        case "page4":
                            return <Page4 />;
                        case "page5":
                            return <Page5 />;
                    }
                })()}
            </div>
        </>
    );
}

const useStyles = tss.withName({ Badgeur }).create(() => {
    return {
        root: {
            height: "100%",
            width: "100%"
        }
    };
});

import { tss } from "tss-react/mui";
import { useState } from "react";
import { type ProjectId } from "../projectIds";
import { useScrollNavigation } from "hooks/useScrollNavigation";
import { SeeMoreButton } from "shared/SeeMoreButton";
import { Zen } from "./Zen";
import { Gili } from "./Gili";

export type Props = {
    className?: string;
    projectId: ProjectId;
    onBackToGallery: () => void;
};

export function ProjectDetails(props: Props) {
    const { className, projectId, onBackToGallery } = props;
    const { cx, classes } = useStyles();

    const [detailsIndex, setDetailsIndex] = useState(0);

    const incrementDetailsIndex = () => {   
        setDetailsIndex(prevIndex => prevIndex + 1);
    }

    const decrementDetailsIndex = () => {
        setDetailsIndex(prevIndex => prevIndex - 1);
    }

    useScrollNavigation(direction => {
        switch (direction) {
            case "up": 
                decrementDetailsIndex();
                break;
            case "down":
                incrementDetailsIndex();
                break;
        }
    });

    return (
        <div className={cx(classes.root, className)}>
            <div>
                <SeeMoreButton className={classes.buttonBack} onClick={onBackToGallery}>
                    Back to Gallery
                </SeeMoreButton>
            </div>
            <div className={classes.content}>
                {(() => {
                    switch (projectId) {
                        case 'zen':
                            return <Zen detailsIndex = {detailsIndex}/>;
                        case 'gili':
                            return <Gili/>;
                        case 'badgeur':
                            return <Zen detailsIndex={detailsIndex}/>;
                    }
                })()}
            </div>
        </div>

    );
}

const useStyles = tss
    .withName("ProjectDetails")
    .create(({ theme }) => {
        return {
            root: {
                border: "1px solid red"
            },
            buttonBack: {
                position: "absolute",
                top: "100px",
                zIndex: 1,
                left: theme.spacing(10)
            },
            content: {
                flex: 1,
                marginLeft: 40,
                marginRight: 40,
                border: '5px solid orange',
            },
        };
    })
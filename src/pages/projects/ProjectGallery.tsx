import { useState, useEffect, useRef } from "react";
import { GalleryItem } from "./GalleryItem";
import { projects, type Project } from "./projectData";
import { type ProjectId } from "./projectIds";

type Props = {
    className?: string;
    projectId: ProjectId;
    onChangeProjectId: (pageId: ProjectId) => void;
    onSeeProjectDetails: () => void;
};

export function ProjectGallery(props: Props) {
    const { className, projectId, onChangeProjectId, onSeeProjectDetails } = props;

    const [items, setItems] = useState(() => {
        let newProjects = structuredClone(projects);

        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (newProjects[1].nameId === projectId) {
                break;
            }
            newProjects = rotateToTheRight(newProjects);
        }
        return newProjects;
    });

    const containerRef = useRef<HTMLDivElement | null>(null);
    const isAnimatingRef = useRef(false);

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = (event: WheelEvent) => {
            event.preventDefault();

            if (isAnimatingRef.current) {
                return;
            }

            isAnimatingRef.current = true;

            if (event.deltaY < 0) {
                setItems(prevItems => rotateToTheRight(prevItems));
            } else {
                setItems(prevItems => rotateToTheLeft(prevItems));
            }

            setTimeout(() => {
                isAnimatingRef.current = false;
            }, 500);
        };

        if (container) {
            container.addEventListener("wheel", handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener("wheel", handleScroll);
            }
        };
    }, []);

    return (
        <div className={className} ref={containerRef}>
            <div>
                {items.map((itemData, i) => (
                    <GalleryItem
                        key={itemData.nameId}
                        position={i + 1}
                        itemData={itemData}
                        onClick={() => {
                            onChangeProjectId(itemData.nameId);
                            onSeeProjectDetails();
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

function rotateToTheRight(projects: Project[]): Project[] {
    const [lastItem, ...otherItemsReversed] = structuredClone(projects).reverse();
    return [lastItem, ...otherItemsReversed.reverse()];
}

function rotateToTheLeft(projects: Project[]): Project[] {
    const [firstItem, ...otherItems] = structuredClone(projects);
    return [...otherItems, firstItem];
}

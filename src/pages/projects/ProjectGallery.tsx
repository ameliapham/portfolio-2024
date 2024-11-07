import { useMemo } from "react";
import { GalleryItem } from "./GalleryItem";
import { projects, Project, type ProjectId, projectIds  } from "./projectsData";
import { routes } from "routes";
import type { PageRoute } from "./route";
import { useScrollNavigation } from "utils/useScrollNavigation";
import { rotateArrayRight } from "utils/rotateArray";

type Props = {
    className?: string;
    //projectId: ProjectId;
    //onChangeProjectId: (pageId: ProjectId) => void;
    onSeeProjectDetails: () => void;
    route: PageRoute;
};

export default function ProjectGallery(props: Props) {
    const { className, route, onSeeProjectDetails } = props;

    const rotatedProjects = useMemo(() => {
      let rotatedProjects = [...projects];

      while (rotatedProjects[1].id !== route.params.projectId) {
          rotatedProjects = rotateArrayRight(rotatedProjects);
      }

      return rotatedProjects;
  }, [route.params.projectId]);

    /*
    const previousProjectRoute = (() => {
        const i = projectIds.indexOf(route.params.projectId);
    
        if (i === 0) {
          return undefined;
        }
    
        return routes.projects({
          ...route.params,
          projectId: projectIds[i - 1],
        });
      })();
    
      const nextProjectRoute = (() => {
        const i = projectIds.indexOf(route.params.projectId);
    
        if (i === projectIds.length - 1) {
          return undefined;
        }
    
        return routes.projects({
          ...route.params,
          projectId: projectIds[i + 1],
        });
      })();



      useScrollNavigation((direction) => {
        switch (direction) {
          case "up":
            previousProjectRoute?.replace();
            break;
          case "down":
            console.log(nextProjectRoute);
            nextProjectRoute?.replace();
            break;
        }
      });

    const [items, setItems] = useState(() => {
        let items = projects;
        structuredClone(projectId);

        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (items[1].nameId === projectId) {
                break;
            }
            items = rotateToTheRight(items);
        }
        return items;
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

    */ 

    return (
        <div className={className}>
            <div>
                {rotatedProjects.map((project, i) => (
                    <GalleryItem
                        key={project.id}
                        position={i + 1}
                        project={project}
                        onClick={() => {
                            onSeeProjectDetails();
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

function rotateToTheRight(items: Project[]): Project[] {
    const [lastItem, ...otherItemsReversed] = structuredClone(items).reverse();
    return [lastItem, ...otherItemsReversed.reverse()];
}

function rotateToTheLeft(items: Project[]): Project[] {
    const [firstItem, ...otherItems] = structuredClone(items);
    return [...otherItems, firstItem];
}


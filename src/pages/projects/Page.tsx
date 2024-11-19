import { ProjectGallery } from "./ProjectGallery";
import { ProjectDetails } from "./ProjectDetails";
import type { PageRoute } from "./route";

type Props = {
    className?: string;
    route: PageRoute;
};

export default function Page(props: Props) {
    const { className, route } = props;

    return route.params.isGalleryVisible ? (
        <ProjectGallery className={className} route={route} />
    ) : (
        <ProjectDetails className={className} route={route} />
    );
}

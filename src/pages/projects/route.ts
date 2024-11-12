import {
    createRouter,
    defineRoute,
    createGroup,
    param,
    noMatch,
    type Route,
    type ValueSerializer
} from "type-route";
import { projectIds, type Project } from "./projectsData";
import { id } from "tsafe/id";

export const routeDefs = {
    projects: defineRoute(
        {
            projectId: param.query.optional
                .ofType(
                    id<ValueSerializer<Project["id"]>>({
                        parse: raw =>
                            !id<readonly string[]>(projectIds).includes(raw)
                                ? noMatch
                                : (raw as Project["id"]),
                        stringify: value => value
                    })
                )
                .default(projectIds[0]),
            isGalleryVisible: param.query.optional.boolean.default(true),
            detailsIndex: param.query.optional.number.default(0)

        },
        () => "/projects"
    )
};

export const routeGroup = createGroup(Object.values(createRouter(routeDefs).routes));

export type PageRoute = Route<typeof routeGroup>;

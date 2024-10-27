import {
    createRouter,
    defineRoute,
    createGroup,
    type Route
} from "type-route";
export const routeDefs = {
    projects: defineRoute("/about")
};

export const routeGroup = createGroup(Object.values(createRouter(routeDefs).routes));

export type PageRoute = Route<typeof routeGroup>;
import { createRouter } from "type-route";
import { routeDefs, routerOpts } from "./pages";

export const { RouteProvider, useRoute, routes, session } = createRouter(routerOpts, routeDefs);

export type Route = ReturnType<typeof useRoute>;

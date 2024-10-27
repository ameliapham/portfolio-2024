import * as about from "./About";
import * as projects from "./Projects";
import * as contact from "./Contact";
import * as home from "./Home";


import { objectKeys } from "tsafe/objectKeys";
import type { UnionToIntersection } from "tsafe";
import type { RouterOpts } from "type-route";


export const pages = {
    home,
    projects,
    about,
    contact
};


export const routeDefs = {} as UnionToIntersection<
    (typeof pages)[keyof typeof pages]["routeDefs"]
>;

export const pageIds = objectKeys(pages);
export type PageId = typeof pageIds[number];

pageIds.forEach(pageName =>
    Object.assign(routeDefs, pages[pageName].routeDefs)
);

export const routerOpts = {} satisfies RouterOpts;
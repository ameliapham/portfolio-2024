import * as about from "./about";
import * as projects from "./projects";
import * as contact from "./contact";
import * as home from "./home";
import * as page404 from "./page404";

import { objectKeys } from "tsafe/objectKeys";
import type { UnionToIntersection } from "tsafe";
import type { RouterOpts } from "type-route";

export const pages = {
    home,
    about,
    projects,
    contact,
    page404
};

export const routeDefs = {} as UnionToIntersection<(typeof pages)[keyof typeof pages]["routeDefs"]>;

export const pageIds = objectKeys(pages);
export type PageId = (typeof pageIds)[number];

pageIds.forEach(pageName => Object.assign(routeDefs, pages[pageName].routeDefs));

export const routerOpts = {} satisfies RouterOpts;

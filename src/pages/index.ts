import * as about from "./about_";
import * as projects from "./projects_";
import * as contact from "./contact_";
import * as home from "./home_";
import * as page404 from "./page404_";

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

import {
    createRouter,
    defineRoute,
    createGroup,
    param,
    noMatch,
    type Route,
    type ValueSerializer
} from "type-route";
import { id } from "tsafe/id";
import { badgeurIds, type BadgeurId } from "./badgeurIds";

export const routeDefs = {
    about: defineRoute(
        {
            badgeurId: param.query.optional
                .ofType(
                    id<ValueSerializer<BadgeurId>>({
                        parse: raw =>
                            !id<readonly string[]>(badgeurIds).includes(raw)
                                ? noMatch
                                : (raw as BadgeurId),
                        stringify: value => value
                    })
                )
                .default(badgeurIds[0])
        },
        () => "/badgeur"
    )
};

export const routeGroup = createGroup(Object.values(createRouter(routeDefs).routes));

export type PageRoute = Route<typeof routeGroup>;

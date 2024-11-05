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
import { aboutDetailsIds, type AboutDetailsId } from "./aboutDetailsIds";

export const routeDefs = {
    about: defineRoute(
        {
            aboutDetailsId: param.query.optional
                .ofType(
                    id<ValueSerializer<AboutDetailsId>>({
                        parse: raw =>
                            !id<readonly string[]>(aboutDetailsIds).includes(raw)
                                ? noMatch
                                : (raw as AboutDetailsId),
                        stringify: value => value
                    })
                )
                .default(aboutDetailsIds[0])
        },
        () => "/about"
    )
};

export const routeGroup = createGroup(Object.values(createRouter(routeDefs).routes));

export type PageRoute = Route<typeof routeGroup>;
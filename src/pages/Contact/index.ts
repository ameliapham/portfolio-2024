export * from "./route";
import { lazy } from "react";
export const LazyComponent = lazy(() => import("./Contact"));
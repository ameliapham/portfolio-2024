export const aboutDetailsIds = ["cv", "skills"] as const;

export type AboutDetailsId = (typeof aboutDetailsIds)[number];

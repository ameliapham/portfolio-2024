export const badgeurIds = ["page1", "page2", "page3", "page4", "page5"] as const;

export type BadgeurId = (typeof badgeurIds)[number];

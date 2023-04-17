export const SITE_TITLE = "nize";
export const SITE_DESCRIPTION =
    "A developer from the Philippines with a passion for full-stack web and game development.";

export interface ProjectProps {
    name: string;
    description: string;
    stack: string;
    repo: string;
    demo?: string;
}

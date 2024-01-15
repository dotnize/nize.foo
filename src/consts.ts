export const SITE_TITLE = "nize";
export const SITE_DESCRIPTION = "A developer from the Philippines.";

export interface ProjectProps {
  name: string;
  description: string;
  stack: string;
  repo: string;
  demo?: string;
}

export interface LayoutProps {
  title?: string;
  description?: string;
  image?: string;
  children: any;
}

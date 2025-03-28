export const SITE_TITLE = "nize";
export const SITE_DESCRIPTION =
  "A software engineer from the Philippines who loves to build stuff on the web.";

export interface LayoutProps {
  title?: string;
  description?: string;
  image?: string;
  children: any;
}

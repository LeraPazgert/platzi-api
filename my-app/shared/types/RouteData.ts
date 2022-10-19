import { LayoutType } from "../components";

export type RouteData = {
  name: string;
  title: string;
  isPublic: boolean;
  layoutType: LayoutType;
  onlyNonAuth: boolean;
};

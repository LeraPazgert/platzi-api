import { createContext, useContext } from "react";
import { AppUrlBuilder } from "../UrlBuilders";


export const AppBuilderContext = createContext<AppUrlBuilder>(undefined!);

export const useAppUrlBuilderContext = () => {
  return useContext(AppBuilderContext);
};
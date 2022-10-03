import { createContext, useContext } from "react";
import { ApiUrlBuilder } from "../UrlBuilders/ApiUrlBuilder";

export const ApiBuilderContext = createContext<ApiUrlBuilder>(undefined!);

export const useApiUrlBuilderContext = () => {
  return useContext(ApiBuilderContext);
};

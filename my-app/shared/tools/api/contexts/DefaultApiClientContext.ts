import { createContext, useContext } from "react";
import { DefaultApiClient } from "../ApiClientBuilder";

export const DefaultApiClientContext = createContext<DefaultApiClient>(undefined!);

export const useDefaultApiClientContext = () => {
  return useContext(DefaultApiClientContext);
};

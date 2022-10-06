import { createContext, useContext } from "react";
import { DefaultStorageClient } from "../LocalStorageClientBuilder";

export const DefaultLocalStorageContext = createContext<DefaultStorageClient>(
  undefined!
);

export const useDefaultLocalStorageContext = () => {
  return useContext(DefaultLocalStorageContext);
};

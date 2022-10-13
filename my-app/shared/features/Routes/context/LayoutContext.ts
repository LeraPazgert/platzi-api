import { createContext, useContext } from "react";

export const LayoutContext = createContext<boolean>(undefined!);
export const useLayoutContext = () => useContext(LayoutContext);

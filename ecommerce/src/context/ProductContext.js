import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="Jkode">{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };

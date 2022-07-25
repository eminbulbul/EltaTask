import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const values = { allData, setAllData };

  return (
    <AppContext.Provider value={{ values }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;

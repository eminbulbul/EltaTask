import { createContext, useState, useContext } from "react";

export const AppContext = createContext();

const appName1 = "Virtual Tour";
const appName2 = "Rendered Images";
const appName3 = "Animated Videos";

const AppContextProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const values = { allData, setAllData, appName1, appName2, appName3 };

  return (
    <AppContext.Provider value={ values }>
        {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;

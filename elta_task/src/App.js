import AppRouter from "./app-router/AppRouter";
import { AppContext } from "./context/AppContext";
import {useState} from "react"

function App() {

  const [allData, setAllData] = useState([]);
  const values = {allData, setAllData}

  return (
    <div>
      <AppContext.Provider value={values}>
        <AppRouter />
      </AppContext.Provider>
    </div>
  );
}

export default App;

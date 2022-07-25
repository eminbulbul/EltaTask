import AppRouter from "./app-router/AppRouter";
import AppContextProvider from "./context/AppContext";

function App() {
  return (
    <div>
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </div>
  );
}

export default App;

import Home from "./pages/Home";
import WeatherProvider from "./context/WeatherContext";
import SuggestionProvider from "./context/SuggestionContext";

function App() {
  return (
    <WeatherProvider>
      <SuggestionProvider>
        <Home />
      </SuggestionProvider>
    </WeatherProvider>
  );
}

export default App;

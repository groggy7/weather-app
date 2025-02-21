import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Map from "./pages/Map";
import Settings from "./pages/Settings";
import WeatherProvider from "./context/WeatherContext";
import SuggestionProvider from "./context/SuggestionContext";

function App() {
  return (
    <WeatherProvider>
      <SuggestionProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/map" element={<Map />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </SuggestionProvider>
    </WeatherProvider>
  );
}

export default App;

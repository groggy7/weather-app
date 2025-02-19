import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import Map from "./pages/Map"
import Settings from "./pages/Settings"
import WeatherProvider from "./context/Weather"

function App() {
  return (
    <WeatherProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/map" element={<Map />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </WeatherProvider>
  )
}

export default App

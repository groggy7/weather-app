import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import Map from "./pages/Map"
import Settings from "./pages/Settings"

function App() {
  return (
    <div className="p-6 w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/map" element={<Map />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

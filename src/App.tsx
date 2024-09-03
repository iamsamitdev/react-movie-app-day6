import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

// rfce
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import Nav from "./components/Nav"
import Home from "./components/Home"
import Footer from "./components/footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from "./components/Education"
import './App.css'
import StateGov from "./components/StateGov";
import CentralGov from "./components/central_gov";
import Weather_pest from "./components/Weather_pest";

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/state_gov" element={<StateGov />} />
          <Route path="/central_gov" element={<CentralGov />} />
          <Route path="/weather" element={<Weather_pest/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App











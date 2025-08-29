import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import AllCases from "./components/AllCases";
import Contact from "./components/Contact";
import Works from "./pages/Works";
import "./styles/Navbar.css";
import "./styles/Home.css";
import "./styles/Services.css";
import "./styles/About.css";
import "./styles/Works.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Services />
                <Portfolio />
                <AllCases />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Works />} />
          <Route path="/cases" element={<AllCases />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

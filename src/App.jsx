import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import AllCases from "./components/AllCases";
import Contact from "./components/Contact";
import "./styles/Navbar.css";
import "./styles/Home.css";
import "./styles/Services.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Portfolio />
      <AllCases />
      <Contact />
    </div>
  );
}

export default App;

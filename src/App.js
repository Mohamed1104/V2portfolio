import "./App.css";
import Navbarr from "./components/Navbar/navbar";
import ParticlesBg from "./components/Particles/particles";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ParticlesBg />
        <Navbarr />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;

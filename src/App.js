import "./App.css";
import Navbarr from "./components/Navbar/navbar";
import ParticlesBg from "./components/Particles/particles";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/projects";
import Contact from "./pages/Contact/contact";
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

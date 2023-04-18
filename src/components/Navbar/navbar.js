import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { BsMoonFill } from "react-icons/bs";
import "./navbar.css";
import logo from "../../assets/images/Screenshot 2023-03-27 at 17.59.46.png";
import { HashLink as Link } from "react-router-hash-link";

function Navbarr() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={logo} alt="logo" />
      <nav ref={navRef}>
        <Link to="#home" smooth>
          <a href="/#">Home</a>
        </Link>
        <Link to="#about" smooth>
          <a href="/#">About</a>
        </Link>
        <Link to="#projects" smooth>
          <a href="/#">Projects</a>
        </Link>
        <Link to="#contact" smooth>
          <a href="/#">Contact</a>
        </Link>
        {/* <BsMoonFill /> */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbarr;

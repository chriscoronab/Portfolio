import "./style.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="name">
        <Link to="/">
          <p><b>Christian Corona</b></p>
        </Link>
      </div>
      <div className="items">
        <a href="#about">
          <p><b>About me</b></p>
        </a>
        <a href="#skills">
          <p><b>Skills</b></p>
        </a>
        <a href="#projects">
          <p><b>Projects</b></p>
        </a>
        <a href="#contact">
          <p><b>Contact</b></p>
        </a>
      </div>
    </nav>
  )
};

export default Nav;
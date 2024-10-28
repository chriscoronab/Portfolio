import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import whatsapp from "/assets/whatsapp-orange-icon.png?url";
import email from "/assets/email-icon.png?url";
import linkedin from "/assets/linkedin-orange-icon.png?url";
import github from "/assets/github-orange-icon.png?url";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav>
      <div className="name">
        <Link to="/">
          <p><b>Christian Corona</b></p>
        </Link>
      </div>
      <div className="items">
        <a href="#about">
          <p><b>About</b></p>
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
      <div className="socialMedia">
        <div>
          <Link to="https://wa.me/5491132006857" target="_blank">
            <img src={whatsapp} alt="whatsapp" />
          </Link>
        </div>
        <div>
          <Link to="mailto:chriscoronab@gmail.com" target="_blank">
            <img src={email} alt="email" />
          </Link>
        </div>
        <div>
          <Link to="https://www.linkedin.com/in/chriscoronab" target="_blank">
            <img src={linkedin} alt="linkedin" />
          </Link>
        </div>
        <div>
          <Link to="https://www.github.com/chriscoronab" target="_blank">
            <img src={github} alt="github" />
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
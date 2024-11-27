import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import whatsapp from "/assets/whatsapp-orange-icon.png?url";
import email from "/assets/email-icon.png?url";
import linkedin from "/assets/linkedin-orange-icon.png?url";
import github from "/assets/github-orange-icon.png?url";
import menu from "/assets/menu.png?url";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className={`${clicked ? "menuOpen" : ""}`}>
      <div className="name" data-aos="fade-down">
        <Link to="/">
          <p><b>Christian Corona</b></p>
        </Link>
      </div>
      <div className="items" data-aos="fade-down">
        <a href="#about" onClick={handleClick}>
          <p><b>About</b></p>
        </a>
        <a href="#skills" onClick={handleClick}>
          <p><b>Skills</b></p>
        </a>
        <a href="#projects" onClick={handleClick}>
          <p><b>Projects</b></p>
        </a>
        <a href="#contact" onClick={handleClick}>
          <p><b>Contact</b></p>
        </a>
      </div>
      <div className="socialMedia" data-aos="fade-down">
        <div>
          <Link to="https://wa.me/5491132006857" target="_blank" onClick={handleClick}>
            <img src={whatsapp} alt="whatsapp" />
          </Link>
        </div>
        <div>
          <Link to="mailto:chriscoronab@gmail.com" target="_blank" onClick={handleClick}>
            <img src={email} alt="email" />
          </Link>
        </div>
        <div>
          <Link to="https://www.linkedin.com/in/chriscoronab" target="_blank" onClick={handleClick}>
            <img src={linkedin} alt="linkedin" />
          </Link>
        </div>
        <div>
          <Link to="https://www.github.com/chriscoronab" target="_blank" onClick={handleClick}>
            <img src={github} alt="github" />
          </Link>
        </div>
      </div>
      <div className="menu" onClick={handleClick} data-aos="fade-down">
        <img src={menu} alt="menu" />
      </div>
    </nav>
  );
};

export default Nav;
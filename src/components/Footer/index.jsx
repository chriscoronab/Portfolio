import "./style.css";
import { Link } from "react-router-dom";
import whatsapp from "/assets/whatsapp-orange-icon.png?url";
import email from "/assets/email-icon.png?url";
import linkedin from "/assets/linkedin-orange-icon.png?url";
import github from "/assets/github-orange-icon.png?url";

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div>
        <div className="name">
          <p><b>Christian Corona</b></p>
          <h3>Full Stack Developer</h3>
        </div>
        <div className="footerItems">
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
      </div>
      <p>© 2024 Christian Corona.
      <br />
      All rights reserved.</p>
    </footer>
  );
};

export default Footer;
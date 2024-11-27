import "./style.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import whatsapp from "/assets/whatsapp-orange-icon.png?url";
import email from "/assets/email-orange-icon.png?url";
import linkedin from "/assets/linkedin-orange-icon.png?url";
import github from "/assets/github-orange-icon.png?url";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  return (
    <div className="home" data-aos="fade-up">
      <div data-aos="fade-up">
        <h1>Hi, I'm Christian <span className="handEmoji">👋</span></h1>
        <h2>Full Stack <span>Developer</span></h2>
      </div>
      <div className="socialMedia">
        <div className="contact" data-aos="fade-up">
          <div>
            <Link to="https://wa.me/5491132006857" target="_blank">
              <img src={whatsapp} alt="whatsapp" />
              <h4>+54 9 1132006857</h4>
            </Link>
          </div>
          <div>
            <Link to="mailto:chriscoronab@gmail.com" target="_blank">
              <img src={email} alt="email" />
              <h4>chriscoronab@gmail.com</h4>
            </Link>
          </div>
        </div>
        <div className="links" data-aos="fade-up">
          <h3>Follow Me</h3>
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
    </div>
  );
};

export default Home;
import "./style.css";
import about from "/assets/about.png?url";
import avatar from "/assets/avatar.jpg?url";
import location from "/assets/location-icon.png?url";
import experience from "/assets/work-icon.png?url";
import download from "/assets/download-icon.png?url";
import contact from "/assets/send-icon.png?url";

const About = () => {
  return (
    <section id="about">
      <div className="title">
        <img src={about} alt="about" />
        <h2>About Me</h2>
      </div>
      <div className="about">
        <div className="aboutMe">
          <h3>Hi there, I'm Christian <span className="handEmoji">👋</span></h3>
          <h4>I'm a <span>Full Stack Developer</span> who enjoys developing intuitive and efficient web applications.
          <br />
          <br />
          I'm committed to writing quality code using good practices and attention to details, collaborating on challenging projects that allow me to apply my technical skills and grow professionally in the IT world.</h4>
        </div>
        <figure className="avatar">
          <img src={avatar} alt="Christian Corona" />
        </figure>
        <div className="aboutComponents">
          <div>
            <img src={location} alt="location" />
            <h4>Buenos Aires, Argentina</h4>
          </div>
          <div>
            <img src={experience} alt="experience" />
            <h4>Experience: +1 year</h4>
          </div>
          <a href="/assets/cv-christiancorona.pdf" download>
            <div>
              <img src={download} alt="download" />
              <h4>Download Resume</h4>
            </div>
          </a>
          <a href="#contact">
            <div>
              <img src={contact} alt="contact" />
              <h4>Contact Me</h4>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
import "./style.css";
import { Link } from "react-router-dom";
import contact from "/assets/send-icon.png?url";
import whatsapp from "/assets/whatsapp-orange-icon.png?url";
import email from "/assets/email-orange-icon.png?url";
import linkedin from "/assets/linkedin-orange-icon.png?url";
import Form from "./form.jsx";

const Contact = () => {
  return (
    <section id="contact">
      <div className="title contactTitle" data-aos="fade-up">
        <img src={contact} alt="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="contactMe">
        <div className="contactComponents">
          <div data-aos="fade-up">
            <Link to="https://wa.me/5491132006857" target="_blank">
              <img src={whatsapp} alt="whatsapp" />
              <h4>+54 9 1132006857</h4>
            </Link>
          </div>
          <div data-aos="fade-up">
            <Link to="mailto:chriscoronab@gmail.com" target="_blank">
              <img src={email} alt="email" />
              <h4>chriscoronab@gmail.com</h4>
            </Link>
          </div>
          <div data-aos="fade-up">
            <Link to="https://www.linkedin.com/in/chriscoronab" target="_blank">
              <img src={linkedin} alt="linkedin" />
              <h4>in/chriscoronab</h4>
            </Link>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
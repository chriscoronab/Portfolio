import "./style.css";
import { Link } from "react-router-dom";
import avatar from "../../../public/assets/avatar.jpg";
import linkedin from "../../../public/assets/linkedin-white-icon.png";
import github from "../../../public/assets/github-white-icon.png";

const Home = () => {
  return (
    <>
      <div className="process">
        <h3>In process...</h3>
      </div>
      <div className="home">
        <div>
          <h1>Hi, I'm Christian 👋</h1>
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div>
          <h2>Full Stack<br /><span>Developer</span></h2>
          <div className="links">
            <h3>Follow Me</h3>
            <Link to="https://www.linkedin.com/in/chriscoronab" target="_blank">
              <img src={linkedin} alt="linkedin" />
            </Link>
            <Link to="https://www.github.com/chriscoronab" target="_blank">
              <img src={github} alt="github" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;
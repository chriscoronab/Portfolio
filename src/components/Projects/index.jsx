import "./style.css";
import { Link } from "react-router-dom";
import projects from "../../constants/projects.js";
import Card from "./card.jsx";
import portfolio from "/assets/portfolio.png?url";
import github from "/assets/github-orange-icon.png?url";

const Projects = () => {
  return (
    <section id="projects">
      <div className="title">
        <img src={portfolio} alt="portfolio" />
        <h2>My Projects</h2>
      </div>
      <div className="projects">
        {projects.map(project => (
          <Card key={project.name} project={project} />
        ))}
      </div>
      <div className="github">
        <h4>Thank you for exploring my work 😎
          <br />
          <br />
          Feel free to discover more on my GitHub:
        </h4>
        <div>
          <Link to="https://www.github.com/chriscoronab" target="_blank">
            <img src={github} alt="github" />
            <h4>chriscoronab</h4>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import "./style.css";
import projects from "../../constants/projects.js";
import Card from "./card.jsx";
import portfolio from "/assets/portfolio.png?url";

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
    </section>
  );
};

export default Projects;
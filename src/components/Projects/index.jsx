import "./style.css";
import projects from "../../constants/projects.js";
import Card from "./card.jsx";

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map(project => (
          <Card key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
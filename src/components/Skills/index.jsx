import "./style.css";
import { proficientStack, learningStack, toLearnStack } from "../../constants/skills.js";

const Tech = ({ technologies, title }) => {
  return (
    <div className="skills">
      <h3>{title}</h3>
      <div className="technologies">
        {technologies.map(technology => (
          <div key={technology.name} className="technology">
            <div>
              <img src={technology.icon} alt={technology.name} />
            </div>
            <h5>{technology.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <Tech
        technologies={proficientStack}
        title="Technologies I'm proficient in:"
      />
      <Tech
        technologies={learningStack}
        title="Technologies I'm learning:"
      />
      <Tech
        technologies={toLearnStack}
        title="Technologies I want to learn:"
      />
    </section>
  );
};

export default Skills;
import "./style.css";
import { proficientStack, learningStack, toLearnStack } from "../../constants/skills.js";
import skills from "/assets/skills.png?url";

const Tech = ({ technologies, title }) => {
  return (
    <div className="skills">
      <h3 data-aos="fade-up">{title}</h3>
      <div className="technologies">
        {technologies.map(technology => (
          <div key={technology.name} className="technology" data-aos="fade-up">
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
      <div className="title" data-aos="fade-up">
        <img src={skills} alt="skills" />
        <h2>My Skills</h2>
      </div>
      <Tech
        technologies={proficientStack}
        title="Technologies I'm proficient in:"
      />
      <Tech
        technologies={learningStack}
        title="Technologies I'm focusing on mastering:"
      />
      <Tech
        technologies={toLearnStack}
        title="Technologies I want to learn:"
      />
    </section>
  );
};

export default Skills;
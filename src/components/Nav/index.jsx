import "./style.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="name">
        <Link to="/">
          <p><b>Christian Corona</b></p>
        </Link>
      </div>
      <div className="items">
        <Link to="/about">
          <p><b>Sobre mí</b></p>
        </Link>
        <Link to="/skills">
          <p><b>Habilidades</b></p>
        </Link>
        <Link to="/projects">
          <p><b>Proyectos</b></p>
        </Link>
        <Link to="/contact">
          <p><b>Contacto</b></p>
        </Link>
      </div>
    </nav>
  )
};

export default Nav;
import "./style.css";
import avatar from "../../../public/assets/avatar.jpg";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Hola, soy Christian 👋</h1>
      </div>
      <div>
        <img src={avatar} />
      </div>
      <div>
        <h2>Full Stack<br /><span>Developer</span></h2>
      </div>
    </div>
  )
};

export default Home;
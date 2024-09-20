import "./style.css";
import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const About = () => {
  return (
    <div id="about">
      <div className="section">
        <h2>About me</h2>
        <p>Hi, I'm Chris from Buenos Aires, Argentina.
        {/* Experience: +1 year */}
        <br />
        <br />
        I enjoy developing intuitive and efficient web applications with React, Express and Node; however, my idea is to expand my knowledge beyond the MERN stack with technologies such as Angular, Vue.js, Next.js and Redux on the front, and .NET, #C, MySQL and PostgreSQL on the back.
        <br />
        <br />
        I'm comitted to delivering high-quality work, collaborating on challenging projects that allow me to apply my technical skills and grow professionally in the IT world.</p>
        <div className="buttons">
          <a href="/assets/cv-christiancorona.pdf" download>
            <Button variant="outlined" color="error">
              <FileDownloadOutlinedIcon />Download CV
            </Button>
          </a>
        </div>
      </div>
      {/* <div className="section">
        <h2>MIS CERTIFICADOS</h2>
      </div> */}
    </div>
  )
};

export default About;
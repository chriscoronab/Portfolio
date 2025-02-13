import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

const Card = ({ project }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="card" onClick={handleOpen} data-aos="fade-up">
        <div>
          <img src={project.image} alt={project.name} />
        </div>
        <h3>{project.name}</h3>
        <Button variant="outlined" color="error" onClick={handleOpen}>Learn More</Button>
      </div>
      <Modal open={open} onClose={handleClose} data-aos="fade-up">
        <Box
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "black"
          }}
          className="modal"
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              bgcolor: "rgba(27, 25, 25, 0.315)"
            }}
          >
            <CloseIcon />
          </IconButton>
          <div>
            <img src={project.image} alt={project.name} />
          </div>
          <h3>{project.name}</h3>
          <h5>{project.description}</h5>
          <div className="tech">
            {project.tech.map(tag => (
              <h5
                key={tag.name}
                style={{
                  background: tag.color,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent"
                }}>
                #{tag.name}
              </h5>
            ))}
          </div>
          <div className="projectLinks">
            <Link to={project.link} target="_blank">
              <Button variant="outlined" color="error"><LinkOutlinedIcon />Link</Button>
            </Link>
            <Link to={project.repository} target="_blank">
              <Button variant="outlined" color="error"><CodeOutlinedIcon />Repository</Button>
            </Link>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Card;
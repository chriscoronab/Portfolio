import "./style.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import success from "/assets/success.png?url";

const CssTextField = styled(TextField)({
    "& label": {
        color: "white",
        fontFamily: "Montserrat"
    },
    "& label.Mui-focused": {
        color: "white",
        fontFamily: "Montserrat"
    },
    "& .MuiOutlinedInput-root": {
        "& input": {
            color: "white",
            fontFamily: "Montserrat"
        },
        "& fieldset": {
            borderColor: "rgb(255, 51, 0)"
        },
        "&:hover fieldset": {
            borderColor: "rgb(165, 0, 0)"
        },
        "&.Mui-focused fieldset": {
            borderColor: "rgb(165, 0, 0)"
        }
    }
});

const Form = () => {
  const [clicked, setClicked] = useState(false);
  const [sending, setSending] = useState(false);
  const sendEmail = () => {
    emailjs.init("XKf7V2J_ZwcECDBKV");
    emailjs.sendForm("service_cq286sm", "template_t5s3qbc", ".form")
      .then(result => {
        console.log("SUCCESS: ", result.text);
        setClicked(true);
        setSending(false);
      }, error => {
        console.log("FAILED: ", error.text);
      });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    sendEmail();
  };
  return (
    <>
      {clicked ?
        <div className="sent" data-aos="fade-up">
          <img src={success} alt="success" />
          <h4>Your message was sent successfully!
            <br />
            <br />
            I'll get back to you as soon as I can. 
            <br />
            <br />
            Thank you for getting in touch 😎
          </h4>
        </div>
      :
        <Box
          component="form"
          autoComplete="on"
          className="form"
          onSubmit={handleSubmit}
          data-aos="fade-up"
        >
          <CssTextField
            name="name"
            label="Full Name"
            type="text"
            variant="outlined"
            style={{ marginBottom: 11 }}
            required />
          <CssTextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            style={{ marginBottom: 11 }}
            required />
          <CssTextField
            name="phone"
            label="Phone"
            type="tel"
            variant="outlined"
            style={{ marginBottom: 11 }}
            required />
          <CssTextField
            name="message"
            label="Message"
            type="text"
            variant="outlined"
            style={{ marginBottom: 11 }}
            required />
          <div>
            <Button
              type="submit"
              disabled={sending}
              variant="outlined"
              color="error">
                <SendOutlinedIcon />
                {sending ? "Sending..." : "Send"}
            </Button>
          </div>
        </Box>
      }
    </>
  );
};

export default Form;
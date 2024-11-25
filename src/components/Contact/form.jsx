import "./style.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const CssTextField = styled(TextField)({
    "& label": {
        color: "white"
    },
    "& label.Mui-focused": {
        color: "white"
    },
    "& .MuiOutlinedInput-root": {
        "& input": {
            color: "white"
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
  return (
    <>
      {clicked ?
        <div className="sent">
          <h4>Your message was sent successfully. Thank you for getting in touch 😎</h4>
        </div>
      :
        <Box
          component="form"
          autoComplete="on"
          className="form"
          onSubmit="">
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
            multiline
            rows={4}
            variant="outlined"
            style={{ marginBottom: 11 }}
            required />
            <Button type="submit" variant="outlined" color="error"><SendOutlinedIcon />Send</Button>
      </Box>
    }
    </>
  );
};

export default Form;
import React, { useState } from "react";

// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";

// import { useSnackbar } from "notistack";
// import emailjs from "emailjs-com";

const Button = ({ children }: any) => <button>{children}</button>;
const TextField = ({ label }: any) => (
  <>
    <label>{label}</label>
    <input type="text" />
  </>
);
const emailjs: any = { send: () => {} };

export default function ContactForm() {
  // const { enqueueSnackbar } = useSnackbar();
  const enqueueSnackbar = (msg, json) => {
    console.log(msg, json);
  };
  const [contactForm, setContactForm] = useState({
    name: "",
    contact: "",
    message: "",
  });

  function submitForm(e) {
    e.preventDefault();

    if (contactForm.name === "") {
      enqueueSnackbar("Name Missing", { variant: "error" });
      return;
    }

    if (contactForm.contact === "") {
      enqueueSnackbar("Contact Info Missing", { variant: "error" });
      return;
    }

    if (contactForm.message === "") {
      enqueueSnackbar("Message Missing", { variant: "error" });
      return;
    }

    emailjs
      .send(
        "Vincentktieu101Gmail",
        "VincentktieuContactForm",
        contactForm,
        "user_zSfjegoCh9d1rl8s1eCa9"
      )
      .then(
        (response) => {
          enqueueSnackbar("Message Sent! I'll answer back shortly :)", {
            variant: "success",
          });
        },
        (err) => {
          enqueueSnackbar("Try Again", { variant: "error" });
        }
      );

    setContactForm({
      name: "",
      contact: "",
      message: "",
    });
  }

  return (
    <div id="contact-form">
      <h2 className="text-center">Contact Me</h2>
      <form onSubmit={submitForm}>
        <TextField
          label="Name"
          variant="outlined"
          style={{ width: "100%", marginBottom: "5px" }}
          value={contactForm.name}
          onChange={(e) => {
            setContactForm({ ...contactForm, name: e.target.value });
          }}
        />
        <TextField
          label="Contact Info"
          variant="outlined"
          style={{ width: "100%", marginBottom: "5px" }}
          value={contactForm.contact}
          onChange={(e) => {
            setContactForm({ ...contactForm, contact: e.target.value });
          }}
        />
        <TextField
          label="Send Me A Message!"
          variant="outlined"
          multiline
          rows={3}
          style={{ width: "100%", marginBottom: "5px" }}
          value={contactForm.message}
          onChange={(e) => {
            setContactForm({ ...contactForm, message: e.target.value });
          }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ width: "100%", marginBottom: "5px" }}
          type="submit"
        >
          <h6>Submit</h6>
        </Button>
      </form>
    </div>
  );
}

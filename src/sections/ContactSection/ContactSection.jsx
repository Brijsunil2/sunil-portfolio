import "./ContactSection.scss";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();
  const [submitMsg, setSubmitMsg] = useState({
    msg: "",
    color: "black",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (res) => {
          setSubmitMsg({
            msg: "Message was sent successfully!",
            color: "green",
          });
          console.log(res.text);
        },
        (err) => {
          setSubmitMsg({ msg: "Error: Unable to send message.", color: "red" });
          console.log(err.text);
        }
      );
  };

  return (
    <motion.section
      className="contact-section"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label htmlFor="userFirstnameInput" className="form-label">
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="userFirstnameInput"
              name="user_firstname"
              required
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="userLastnameInput" className="form-label">
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              id="userLastnameInput"
              name="user_lastname"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="userEmailInput" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="userEmailInput"
            aria-describedby="emailHelp"
            name="user_email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userSubjectInput" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="userSubjectInput"
            name="user_subject"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userMessageInput" className="form-label">
            Message
          </label>
          <textarea
            type="text"
            className="form-control"
            id="userMessageInput"
            name="user_message"
            required
          />
        </div>
        <p className="form-msg" style={{ color: submitMsg.color }}>
          {submitMsg.msg}
        </p>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </motion.section>
  );
};

export default ContactSection;

import "./ContactSection.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useIntersectionAnimation from "../../components/hooks/useIntersectionAnimation";

const ContactSection = () => {
  const form = useRef();
  const fadeInRef = useIntersectionAnimation((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });

  const [submitMsg, setSubmitMsg] = useState({
    msg: "",
    color: "black",
    hidden: true,
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
            hidden: false,
          });
        },
        (err) => {
          setSubmitMsg({
            msg: "Error: Unable to send message.",
            color: "red",
            hidden: false,
          });
          console.log(err.text);
        }
      );
  };

  return (
    <section className="contact-section wrapper-width-xl section-bottom-margin">
      <hr />
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col input-label">
            <label htmlFor="userFirstnameInput" className="form-label">
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="userFirstnameInput"
              name="user_firstname"
              required
              ref={fadeInRef}
              style={{
                "--delay": `${1 * 100}ms`,
              }}
            />
          </div>
          <div className="col input-label">
            <label htmlFor="userLastnameInput" className="form-label">
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              id="userLastnameInput"
              name="user_lastname"
              required
              ref={fadeInRef}
              style={{
                "--delay": `${2 * 100}ms`,
              }}
            />
          </div>
        </div>
        <div className="input-label">
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
            ref={fadeInRef}
            style={{
              "--delay": `${3 * 100}ms`,
            }}
          />
        </div>
        <div className="input-label">
          <label htmlFor="userSubjectInput" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="userSubjectInput"
            name="user_subject"
            required
            ref={fadeInRef}
            style={{
              "--delay": `${4 * 100}ms`,
            }}
          />
        </div>
        <div className="input-label">
          <label htmlFor="userMessageInput" className="form-label">
            Message
          </label>
          <textarea
            type="text"
            className="form-control"
            id="userMessageInput"
            name="user_message"
            required
            ref={fadeInRef}
            style={{
              "--delay": `${5 * 100}ms`,
            }}
          />
        </div>
        <p hidden={submitMsg.hidden}>{submitMsg.msg}</p>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
      <hr />
    </section>
  );
};

export default ContactSection;

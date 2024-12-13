import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleForm = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!data.username.trim()) {
      validationErrors.username = "Fullname is required";
    }

    if (!data.email.trim()) {
      validationErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationErrors.email = "Invalid Email Address";
    }

    if (!data.phone.trim()) {
      validationErrors.phone = "Phone is required";
    } else if (!/(0|91)?[6-9][0-9]{9}/.test(data.phone)) {
      validationErrors.phone = "Enter a valid Phone number";
    }

    if (!data.subject.trim()) {
      validationErrors.subject = "Subject is required";
    }

    if (!data.message.trim()) {
      validationErrors.message = "Message is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm(
          "service_lj01fcb",
          "template_72ueyyq",
          e.target,
          "ztsGrnSz7JAta8blb"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      e.target.reset();

      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div className="contact">
      <h1 className="contact-me">Contact me?</h1>

      <form onSubmit={sendEmail}>
        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              placeholder="Full Name"
              name="username"
              className="item left"
              autoComplete="off"
              onChange={handleForm}
            />
            {errors.username && (
              <div className="error-text">{errors.username}</div>
            )}
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              className="item right"
              autoComplete="off"
              onChange={handleForm}
            />
            {errors.email && <div className="error-text">{errors.email}</div>}
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              className="item left"
              autoComplete="off"
              onChange={handleForm}
            />
            {errors.phone && <div className="error-text">{errors.phone}</div>}
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="item right"
              autoComplete="off"
              onChange={handleForm}
            />
            {errors.subject && (
              <div className="error-text">{errors.subject}</div>
            )}
          </div>
        </div>

        <div className="textArea-field">
          <textarea
            placeholder="Your Message..."
            name="message"
            cols={30}
            rows={5}
            className="item zoom-in"
            autoComplete="off"
            onChange={handleForm}
          ></textarea>
          {errors.message && <div className="error-text">{errors.message}</div>}
        </div>
        <button type="submit" className="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

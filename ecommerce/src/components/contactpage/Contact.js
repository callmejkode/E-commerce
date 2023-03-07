import React from "react";

function Contact() {
  return (
    <>
      <h1 className="text-center pb-2 mt-4">Let's talk </h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.11463249853!2d79.9288068224522!3d13.048043802725354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1678168318853!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container pt-4">
        <form
          action="https://formspree.io/f/moqzwzza"
          method="POST"
          className="d-grid justify-content-center"
        >
          <input
            type="text"
            name="username"
            required
            placeholder="Enter yout name"
            autoComplete="off"
            className="mb-3"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            autoComplete="off"
            className="mb-3"
          />
          <textarea
            rows="10"
            cols="30"
            name="message"
            placeholder="Enter your thoughts about our ecommerce website"
            className="mb-3"
          />
          <input type="submit" value="send" />
        </form>
      </div>
    </>
  );
}

export default Contact;

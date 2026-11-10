import "./ContactMe.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function ContactMe() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent("Portfolio Contact Message");

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:likhithavelamala842@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contactme-section" id="contact">
      <div className="contactme-heading">
        <span>LET'S CONNECT</span>
        <h2>Contact Me</h2>
        <p>Have a question or an opportunity? I'd love to hear from you!</p>
      </div>

      <div className="contactme-container">
        {/* Contact Information */}

        <div className="contactme-info">
          <h3>Get In Touch</h3>

          <div className="contactme-item">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <a href="mailto:likhithavelamala842@gmail.com">
                likhithavelamala842@gmail.com
              </a>
            </div>
          </div>

          <div className="contactme-item">
            <FaPhone />
            <div>
              <h4>Phone</h4>
              <a href="tel:+919948475229">+91 9948475229</a>
            </div>
          </div>

          <div className="contactme-item">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Hyderabad, Telangana, India</p>
            </div>
          </div>

          <div className="contactme-socials">
            <a
              href="https://github.com/likhi-01"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/velamala-likhitha/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Contact Form */}

        <div className="contactme-form">
          <h3>Send Me a Message</h3>

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;

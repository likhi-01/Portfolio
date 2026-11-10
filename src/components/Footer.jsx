
import "./Footer.css";

import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>Likhitha<span>.</span></h2>
          <p>Aspiring Full Stack Developer</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/likhi-01"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/velamala-likhitha/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <a href="#home" className="back-to-top">
          <FaArrowUp />
          Back to Top
        </a>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Likhitha Velamala.
          All Rights Reserved.
        </p>
        <p>Designed & Built with ❤️ using React</p>
      </div>

    </footer>
  );
}

export default Footer;

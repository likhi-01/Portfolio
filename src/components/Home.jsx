import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <p className="welcome-text">HELLO, WELCOME TO MY PORTFOLIO</p>

        <h1>
          I'm <span>Likhitha Velamala</span>
        </h1>

        <h2>Aspiring Full Stack Developer</h2>

        <p className="home-description">
          Aspiring Software Developer with knowledge of Java, JavaScript,
          React.js and SQL. Passionate about building responsive and
          user-friendly web applications. Strong understanding of
          Object-Oriented Programming and Data Structures and Algorithms.
        </p>

        <div className="home-buttons">
          <a href="/resume.pdf" download className="btn primary-btn">
            Download Resume
          </a>

          <a href="/resume.pdf" className="btn secondary-btn">
            View Resume
          </a>
        </div>

        <div className="home-contact">
          <p>📍 Hyderabad, Telangana</p>
          <p>✉️ likhithavelamala842@gmail.com</p>
          <p>📞 +91 9948475229</p>
        </div>
      </div>

      <div className="home-image">
        <img src="/profile.jpg.png" alt="Likhitha Velamala" />
      </div>
    </section>
  );
}

export default Home;

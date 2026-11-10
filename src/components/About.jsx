import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <p>GET TO KNOW ME</p>
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-description">
          <h3>Who am I?</h3>

          <p>
             I am an aspiring Full Stack Developer with a strong
          interest in building interactive and user-friendly
          web applications. I have completed more than 100
          problems on LeetCode, which has helped me improve my
          problem-solving and logical thinking skills.
          </p>

          <p>
             I have gained 300+ hours of hands-on experience
          working with frontend technologies, React.js, and SQL.
          I enjoy exploring new technologies, developing
          projects, and continuously improving my coding skills.
          </p>
           <p>
          My goal is to become a skilled software developer
          and contribute to real-world projects while growing
          professionally.
        </p>

          <div className="achievement">
            <h3>Achievements</h3>
            <ul>
              <li>Cleared the NMMS Scholarship Examination.</li>
              <li>First place in Physics Talent Test.</li>
              <li>Strong academic performance in school.</li>
            </ul>
          </div>
        </div>

        <div className="education">
          <h3>My Education</h3>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <h4>B.Tech</h4>
              <p>
                Rajiv Gandhi University of Knowledge Technologies, Srikakulam
              </p>
              <span>2022 – 2026</span>
              <p>80.5%</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <h4>Pre-University Course</h4>
              <p>RGUKT Srikakulam</p>
              <span>2020 – 2022</span>
              <p>90.3%</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <h4>10th Standard</h4>
              <p>School Education</p>
              <span>2020</span>
              <p>99.6%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

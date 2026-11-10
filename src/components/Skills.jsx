
import "./Skills.css";

import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "SQL", icon: FaDatabase, color: "#4479A1" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>My Skills</h2>
      <p className="skills-intro">
        Technologies and tools I use to build applications.
      </p>

      <div className="skills-container">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div className="skill-card" key={skill.name}>
              <Icon
                className="skill-icon"
                style={{ color: skill.color }}
              />
              <h3>{skill.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;


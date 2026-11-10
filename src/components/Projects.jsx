
import "./Projects.css";

const projects = [
  {
    title: "ACCA Website",
    image: "/images/acca.png",
    description:
      "Developed a responsive web application using React.js with reusable components and a user-friendly interface.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/likhi-01/ACCA_React_Project",
    demo: "https://acca-react-project-azure.vercel.app/",
  },
  {
    title: "IRP LMS Course",
    image: "/images/irp-lms.png",
    description:
      "Built a responsive learning management system project using React.js and frontend technologies.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/likhi-01/IRP_LMS_COURSE",
    demo: "",
  },
  {
    title: "ATM Interface",
    image: "/images/atm.png",
    description:
      "Developed a console-based ATM application with deposit, withdrawal, balance inquiry, and input validation.",
    technologies: ["Java", "OOP", "Exception Handling"],
    github: "https://github.com/likhi-01/DecodelabsIntern",
    demo: "",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>

      <p className="projects-intro">
        Here are some projects I have worked on.
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;


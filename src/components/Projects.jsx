import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold tracking-tight text-white">
          My Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-xl p-6 flex flex-col justify-between transition-transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-white">
              {project.title}
            </h3>
            <p className="text-white mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-white/20 text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline flex items-center gap-2 "
                >
                  <FaGithub size={20} />
                  GitHub
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline flex items-center gap-2"
                >
                  <FiExternalLink size={20} className="" />
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

// src/components/Projects.jsx
const Projects = () => {
  const projects = [
    {
      title: "CodeHub",
      description: "GitHub clone with full repository features",
    },
    {
      title: "WanderLust",
      description: "Travel booking platform with map integrations",
    },
    {
      title: "LetsCall",
      description: "Video calling app using WebRTC and socket.io",
    },
  ];

  return (
    <section>
      <div className="container">
        <h2>Projects</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                padding: "20px",
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

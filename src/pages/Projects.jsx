import React, { useState, useEffect } from "react";
import ProjectCard from '../../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    fetch(`${apiUrl}/projects/`)
    .then((response) => response.json())
    .then((data) => setProjects(data))
    .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="relative z-10 w-full h-full overflow-y-auto flex flex-col font-sans text-white bg-black/60">
      <div className="flex-grow flex flex-col items-center w-full pb-12 pt-28 px-4 sm:px-8">

        <header className="text-center mb-16 max-w-[900px] animate-[fadeIn_1s_ease-out]">
          <h2
            className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-tight uppercase 
            bg-gradient-to-br from-white to-[#00aaff] bg-clip-text text-transparent
            drop-shadow-[0_0_40px_rgba(0,170,255,0.6)]"
          >
            Registro de Proyectos
          </h2>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Una muestra de nuestros sistemas desplegados y desarrollos activos.
          </p>
        </header>

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

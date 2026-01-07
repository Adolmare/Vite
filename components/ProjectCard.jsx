import React from 'react'

const ProjectCard = ({ project, index }) => (
  <div
    className="group relative bg-[#0a0f1e]/60 border border-[#00aaff]/20 rounded-xl overflow-hidden
    hover:border-[#00aaff]/60 hover:bg-[#0a1428]/80 transition-all duration-500 hover:-translate-y-2
    backdrop-blur-md flex flex-col animate-[fadeInUp_0.8s_ease-out_forwards]"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    {/* Image Placeholder / Visual Header */}
    <div className="h-48 w-full bg-gradient-to-br from-[#001122] to-[#003366] relative overflow-hidden group-hover:from-[#001a33] group-hover:to-[#004488] transition-colors duration-500">
      
      {/* Project Image (if available) */}
      {project.image ? (
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
        />
      ) : (
        /* Fallback decorative elements if no image */
        <>
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(0,170,255,0.4),transparent)] group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </>
      )}

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00aaff] to-transparent opacity-50"></div>

      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-[#00aaff] uppercase tracking-wider z-10">
        {project.status}
      </div>
      <div className="absolute bottom-4 left-4 font-bold text-4xl text-white/10 select-none group-hover:text-white/20 transition-colors z-10">
        0{index + 1}
      </div>
    </div>

    {/* Content */}
    <div className="p-8 flex-grow flex flex-col">
      <div className="mb-4">
        <span className="text-xs text-[#00aaff] font-bold uppercase tracking-widest block mb-2">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-white group-hover:text-[#00aaff] transition-colors duration-300">
          {project.title}
        </h3>
      </div>

      <p className="text-gray-400 leading-relaxed mb-6 text-sm flex-grow">
        {project.description}
      </p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {Array.isArray(project.tech) ? (
          project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 font-mono hover:bg-[#00aaff]/10 hover:border-[#00aaff]/30 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))
        ) : (
          <span className="text-xs text-gray-500 font-mono">
            {project.tech ? JSON.stringify(project.tech).replace(/"/g, "") : ""}
          </span>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const projectList = [
    {
      title: "FlowForge",
      subtitle: "Full Stack Kanban Project Management Platform",
      description: "A full-stack, enterprise-ready Kanban project management platform designed to optimize workflow tracking, task allocation, and team collaboration. Inspired by modern project management tools like Linear.",
      highlights: [
        "Built a full-stack Kanban-style dashboard using React, Node.js, Express, and MongoDB.",
        "Implemented JWT-based secure authentication and role-based access control.",
        "Created an intuitive drag-and-drop workflow for tasks, stages, and project states.",
        "Designed a highly responsive modern dark UI with Tailwind CSS and deployed via Netlify (frontend) and Render (backend).",
        "Integrated MongoDB Atlas for persistence and configured production-ready REST APIs."
      ],
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth", "REST APIs"],
      link: "#" // Can be filled or customized
    },
    {
      title: "Spotify-Inspired Web App",
      subtitle: "Responsive Music Player with Dockerized CI/CD Pipeline",
      description: "A visually stunning music player web interface featuring containerization and modern DevOps automation for smooth development-to-production workflows.",
      highlights: [
        "Developed a responsive Spotify-inspired interface using clean HTML and CSS.",
        "Containerized the application using Docker to ensure consistent cross-platform execution.",
        "Implemented a robust CI/CD pipeline using GitHub Actions for automated builds and testing on every push."
      ],
      tags: ["HTML5", "CSS3", "JavaScript", "Docker", "GitHub Actions", "CI/CD DevOps"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="bg-black py-32 px-6 md:px-12 w-full relative border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-20">
          <span className="text-[#ff2a2a] text-xs font-bold tracking-[0.2em] uppercase block mb-3">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Featured Projects</h2>
          <div className="w-20 h-1 bg-[#ff2a2a] mt-6"></div>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-24">
          {projectList.map((project, idx) => (
            <div 
              key={idx}
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              className="flex flex-col lg:flex-row gap-12 items-start"
            >
              {/* Left Column: Title & Tags */}
              <div className="w-full lg:w-[40%] shrink-0">
                <span className="text-gray-500 font-mono text-sm block mb-2">0{idx + 1}.</span>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
                  {project.title}
                </h3>
                <h4 className="text-[#ff2a2a] text-sm md:text-base font-bold mb-6">
                  {project.subtitle}
                </h4>
                
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white hover:text-[#ff2a2a] transition-colors group"
                  >
                    View Project Details
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Right Column: Description & Highlights */}
              <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md">
                <p className="text-gray-300 text-base md:text-lg mb-8 font-medium leading-relaxed">
                  {project.description}
                </p>
                
                <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-4 text-[#ff2a2a]">Key Highlights</h5>
                <ul className="space-y-4">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-sm text-gray-400 font-medium leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0 mt-2"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

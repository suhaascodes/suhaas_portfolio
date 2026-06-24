import stackImage from '../assets/about/Suhaas badge image.png';
import DevTerminal from './DevTerminal';

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">About Me</h2>
          <p className="text-lg font-medium mb-8 leading-relaxed max-w-3xl text-red-50">
            I am a B.E. student in Computer Science and Engineering specializing in IoT, Cyber Security, and Blockchain Technology at Chaitanya Bharathi Institute of Technology, Hyderabad. I am a passionate developer with a strong foundation in modern web technologies, cloud platforms, and cybersecurity. I love building robust solutions, from full-stack platforms to containerized CI/CD pipelines, and I am always eager to learn and innovate.
          </p>

          {/* Education Grid Card */}
          <div className="bg-black/25 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8 max-w-3xl">
            <h3 className="text-xl font-black text-black mb-3 uppercase tracking-wider">Education</h3>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
              <div>
                <h4 className="font-bold text-white text-base sm:text-lg">B.E. in Computer Science and Engineering</h4>
                <p className="text-sm text-red-200">IoT, Cyber Security, and Blockchain Technology</p>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold text-white mb-1">07/2023 - Present</span>
                <p className="text-xs text-red-100 font-semibold">CBIT, Hyderabad | CGPA: 8.62</p>
              </div>
            </div>
            <p className="text-xs text-red-100/90 leading-relaxed font-medium">
              <span className="font-bold text-white">Relevant Coursework:</span> OOPS, Data Structures & Algorithms (DSA), DBMS, Operating Systems, Computer Networks, Software Engineering, Cybersecurity, Blockchain.
            </p>
          </div>

          {/* Skills Section */}
          <div id="about-skills" className="scroll-mt-28 mb-8 max-w-3xl">
            <h3 className="text-xl font-black text-black mb-4 uppercase tracking-wider">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-black/15 rounded-xl p-4 border border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-2">Languages & Web</h4>
                <p className="text-sm font-medium text-white">Java, Python, JavaScript, SQL, HTML, CSS</p>
              </div>
              
              <div className="bg-black/15 rounded-xl p-4 border border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-2">Tools & Frameworks</h4>
                <p className="text-sm font-medium text-white">React, Node.js, Express.js, MongoDB, VS Code</p>
              </div>

              <div className="bg-black/15 rounded-xl p-4 border border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-2">Cloud & DevOps</h4>
                <p className="text-sm font-medium text-white">Oracle Cloud Infrastructure (OCI) - Certified, Docker, CI/CD (GitHub Actions), Git, GitHub</p>
              </div>

              <div className="bg-black/15 rounded-xl p-4 border border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-2">CS Fundamentals & Info</h4>
                <p className="text-sm font-medium text-white">OOPS, DSA, DBMS, OS, Computer Networks</p>
              </div>
              
            </div>
          </div>

          {/* Interactive Dev Terminal with annotation */}
          <div className="relative w-full max-w-3xl mt-16 md:mt-20">
            {/* Hand-drawn prompt arrow */}
            <div 
              className="absolute -top-10 left-0 md:-left-68 md:top-1 flex flex-row items-center gap-1 text-black font-['Caveat',cursive] text-2xl md:text-3xl rotate-[-6deg] select-none pointer-events-none z-30"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <span>Try this! Type 'help'</span>
              <svg 
                className="w-12 h-12 transform rotate-[85deg] md:rotate-[15deg] text-black" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3 3c3 6 8 9 14 6m0 0l-4-4m4 4l-4 4" 
                />
              </svg>
            </div>
            
            <DevTerminal />
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute -bottom-[4px] left-0 w-full pointer-events-none z-30 transform translate-y-[4px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-black">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;

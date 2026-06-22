import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Certifications = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const certList = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
      issuer: "Oracle",
      year: "2025",
      description: "Validation of expertise in automating cloud deployments, container orchestration, CI/CD operations, and infrastructure-as-code engineering practices on OCI.",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=9BC7609ACE5EF97DFD370E8A248D268E071A732BB49FB3C24A5E9D3F1422098D",
      icon: (
        <svg className="w-8 h-8 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      description: "Demonstrates core knowledge of public cloud services, security concepts, infrastructure setup, database instances, and governance practices.",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=192B53726C3CB3F20BA316F8D409C555E94FA9F3395725905D8DC9E3F7FA1719",
      icon: (
        <svg className="w-8 h-8 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Cisco Junior Cybersecurity Analyst Career Path",
      issuer: "Cisco",
      year: "2024",
      description: "Covers crucial networking security foundations, threat intelligence, security monitoring, network defense structures, and incident response logic.",
      link: "https://www.credly.com/badges/dce55d46-8980-48ae-9354-cb077d6e49af/public_url",
      icon: (
        <svg className="w-8 h-8 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Ethical Hacking Certificate",
      issuer: "NPTEL / IIT",
      year: "2024",
      description: "Rigorous academic training on network vulnerability analysis, cryptographic tools, wireless security, system hacking, and prevention protocols.",
      link: "https://drive.google.com/file/d/1AT9qtdQmLbKcx780rtfn6vkmzalxSrDg/view",
      icon: (
        <svg className="w-8 h-8 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section id="certifications" className="bg-[#ff2a2a] py-32 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-30 transform -translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-black transform rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-20">
          <span className="text-black text-xs font-bold tracking-[0.2em] uppercase block mb-3">Validation</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Professional Certifications</h2>
          <div className="w-20 h-1 bg-black mt-6"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certList.map((cert, idx) => (
            <a 
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-black/35 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="bg-white rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                  {cert.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-2 leading-tight group-hover:text-black/85 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-red-200 text-xs font-bold uppercase tracking-wider mb-4">
                  Issued by {cert.issuer} &bull; {cert.year}
                </p>
                <p className="text-white/80 text-sm font-medium leading-relaxed group-hover:text-white transition-colors">
                  {cert.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;

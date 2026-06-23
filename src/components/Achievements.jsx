import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Achievements = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const activities = [
    {
      title: "Hackathons & Tech Competitions",
      category: "Academic & Tech",
      description: "Participating in hackathons and college-level coding challenges, solving complex logic puzzles and designing prototypes under tight time constraints.",
      icon: (
        <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 113.536 0V21h2v-5.464a5.004 5.004 0 01-.707-.707z" />
        </svg>
      )
    },
    {
      title: "Music Production & Sound Design",
      category: "Creative Interest",
      description: "Extracurricular interest in music production, producing digital tracks, arranging melodies, and synthesizing custom soundscapes.",
      icon: (
        <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    },
    {
      title: "Vocal & Piano Performances",
      category: "Cultural Events",
      description: "Active performer of singing and piano/keyboard, displaying stage presence and musical creativity at various college cultural events and fests.",
      icon: (
        <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    }
  ];

  return (
    <section id="achievements" className="bg-black py-32 px-6 md:px-12 w-full relative border-t border-gray-900 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-950 via-black to-black">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div data-aos="fade-up" className="mb-20">
          <span className="text-[#ff2a2a] text-xs font-bold tracking-[0.2em] uppercase block mb-3">Beyond Code</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Achievements & Creative Outlets</h2>
          <div className="w-20 h-1 bg-[#ff2a2a] mt-6"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((act, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300 hover:border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#ff2a2a]/10 transition-colors">
                  {act.icon}
                </div>
                <span className="text-[#ff2a2a] text-[10px] font-bold uppercase tracking-widest block mb-2">
                  {act.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {act.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;

import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import path for optimized videos (Desktop 1080p)
import heroVideoMp4 from '../assets/hero video/Portfolio_video_compressed.mp4';
import heroVideoWebm from '../assets/hero video/Portfolio_video_compressed.webm';
// Import path for mobile optimized videos (720p)
import heroVideoMobileMp4 from '../assets/hero video/Portfolio_video_mobile.mp4';
import heroVideoMobileWebm from '../assets/hero video/Portfolio_video_mobile.webm';
// Import path for static video poster frame (1st frame)
import posterImage from '../assets/hero video/Portfolio_poster.jpg';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Try with sound by default
  const [videoQuality, setVideoQuality] = useState('high'); // 'high' | 'mobile'
  const [videoLoaded, setVideoLoaded] = useState(false); // Track when video can play without buffering

  // Typewriter state
  const words = ["Full Stack Developer", "DevOps Engineer", "CS & Cybersecurity Student"];
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[wordIndex].length + 1 && !reverse) {
      const timer = setTimeout(() => setReverse(true), 1500); // Pause at end of word
      return () => clearTimeout(timer);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 35 : 70); // Typing & deleting speeds

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, wordIndex]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    const handleEnter = () => {
      setTimeout(() => {
        if (videoRef.current) {
          // Play with sound after a 1.5 second delay
          videoRef.current.muted = false;
          videoRef.current.play()
            .then(() => {
              setIsPlaying(true);
              setIsMuted(false);
            })
            .catch((error) => {
              console.log("Autoplay unmuted blocked:", error);
            });
        }
      }, 1500);
    };

    // Trigger video fade-in once ready and broadcast load completion to preloader
    const handleCanPlayThrough = () => {
      setVideoLoaded(true);
      window.isVideoReady = true;
      window.dispatchEvent(new Event('videoReady'));
    };

    const videoEl = videoRef.current;
    let speedCheckTimer;

    if (videoEl) {
      videoEl.addEventListener('canplaythrough', handleCanPlayThrough);
      
      // Dynamic connection check: if loading the high-quality desktop video takes
      // longer than 3.5 seconds on mobile screens, downgrade to mobile-optimized 720p version.
      if (videoQuality === 'high') {
        speedCheckTimer = setTimeout(() => {
          const isMobileScreen = window.innerWidth < 768;
          if (isMobileScreen && videoEl.readyState < 4) {
            console.log("Slow mobile connection detected (threshold 3.5s). Downgrading video quality to 720p.");
            setVideoQuality('mobile');
          }
        }, 3500);
      }

      if (videoEl.readyState >= 4) {
        handleCanPlayThrough();
      }
    }

    window.addEventListener('portfolioEnter', handleEnter);
    return () => {
      window.removeEventListener('portfolioEnter', handleEnter);
      if (videoEl) {
        videoEl.removeEventListener('canplaythrough', handleCanPlayThrough);
      }
      if (speedCheckTimer) {
        clearTimeout(speedCheckTimer);
      }
    };
  }, [videoQuality]);

  // Reload video element when dynamic source quality changes
  useEffect(() => {
    if (videoRef.current) {
      setVideoLoaded(false);
      videoRef.current.load();
    }
  }, [videoQuality]);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isMuted) {
        // Unmute and ensure it's playing
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        // Toggle play/pause if already unmuted
        if (videoRef.current.paused) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Static Poster Image Placeholder (1st frame) */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 z-[1] pointer-events-none ${
          videoLoaded && isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: `url(${posterImage})` }}
      />

      {/* Background Video */}
      <video
        ref={videoRef}
        muted={isMuted}
        playsInline
        preload="auto"
        onEnded={handleVideoEnded}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoQuality === 'high' ? heroVideoWebm : heroVideoMobileWebm} type="video/webm" />
        <source src={videoQuality === 'high' ? heroVideoMp4 : heroVideoMobileMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay Gradients for Cinematic Vignette and Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 md:from-black/40 md:via-transparent md:to-transparent z-10 pointer-events-none"></div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-4xl md:text-6xl font-black mb-2 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:drop-shadow-none"
          >
            Hi, I’m <span className="text-[#ff2a2a] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)]">Suhaas Bandari</span>
          </h1>

          {/* Typewriter Subtitle Box */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="h-10 md:h-14 flex items-center mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:drop-shadow-none"
          >
            <span className="bg-gradient-to-r from-white to-[#ff2a2a] bg-clip-text text-transparent font-black uppercase text-xl sm:text-2xl md:text-4xl tracking-tight font-creative">
              {words[wordIndex].substring(0, subIndex)}
            </span>
            <span className="text-[#ff2a2a] text-xl sm:text-2xl md:text-4xl font-light animate-pulse ml-0.5">|</span>
          </div>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/90 text-sm md:text-lg font-medium mb-8 max-w-md drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-relaxed"
          >
            Computer Science student specializing in IoT, Cybersecurity & Blockchain. I design and build secure, scalable full-stack applications with robust CI/CD pipelines.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <a 
              href="#projects" 
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md text-center"
            >
              View My Work
            </a>
            
            {/* Secondary Button - Glassmorphism style */}
            <a 
              href="#contact" 
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Play Video Button */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
          onClick={toggleVideo}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
            {!isPlaying || isMuted ? (
              // Play Icon
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              // Pause Icon
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            {!isPlaying || isMuted ? "Play" : "Pause"}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

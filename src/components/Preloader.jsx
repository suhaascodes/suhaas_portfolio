import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let animationDone = false;
    let videoReady = window.isVideoReady || false;

    const checkAndShowButton = () => {
      if (animationDone && videoReady) {
        setShowButton(true);
      }
    };

    // 1. Water fill animation timer (2s)
    const animTimer = setTimeout(() => {
      animationDone = true;
      checkAndShowButton();
    }, 2000);

    // 2. Fallback timer (5s) to guarantee user can enter
    const fallbackTimer = setTimeout(() => {
      videoReady = true;
      animationDone = true;
      setShowButton(true);
    }, 5000);

    // 3. Listen to videoReady event
    const handleVideoReady = () => {
      videoReady = true;
      checkAndShowButton();
    };

    window.addEventListener('videoReady', handleVideoReady);

    return () => {
      clearTimeout(animTimer);
      clearTimeout(fallbackTimer);
      window.removeEventListener('videoReady', handleVideoReady);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isLoading]);

  const handleEnter = () => {
    window.playUiClick?.(); // Trigger click sound immediately
    setIsLoading(false);
    // Dispatch global event to trigger unmuted video play
    window.dispatchEvent(new Event('portfolioEnter'));
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center touch-none"
          id="preloader"
        >
          {/* Logo & Button Container */}
          <div className="flex flex-col items-center gap-12">
            <motion.div 
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter"
            >
              {/* Background text (empty state) */}
              <div className="text-red-900/30 whitespace-nowrap">
                Suhaas Bandari<span className="text-red-900/30">.</span>
              </div>

              {/* Foreground text (water fill state) */}
              <motion.div 
                className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
              >
                Suhaas Bandari<span className="text-black">.</span>
              </motion.div>
            </motion.div>

            {/* Enter Button */}
            <div className="h-12 flex items-center justify-center">
              <AnimatePresence>
                {showButton && (
                  <motion.button
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onClick={handleEnter}
                    className="px-8 py-3.5 rounded-full border border-white text-white font-bold tracking-[0.2em] text-[10px] uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-2xl cursor-pointer"
                  >
                    Enter Experience
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

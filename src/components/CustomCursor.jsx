import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [isTextInput, setIsTextInput] = useState(false);
  const [isOverTerminal, setIsOverTerminal] = useState(false);
  const [isOverRed, setIsOverRed] = useState(false);
  const [hidden, setHidden] = useState(true);

  // Helper to check recursively if cursor is over a red background container
  const checkRedBackground = (el) => {
    if (!el) return false;
    
    // Check IDs of red sections
    if (el.id === 'about' || el.id === 'certifications' || el.id === 'preloader') {
      return true;
    }
    
    // Check classList for the specific red background class
    if (el.classList && (
      el.classList.contains('bg-[#ff2a2a]') || 
      el.classList.contains('bg-[#ff2a2a]/20') || 
      el.classList.contains('bg-[#ff2a2a]/40')
    )) {
      return true;
    }
    
    // Recurse up the DOM tree
    return checkRedBackground(el.parentElement);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Check if target is a text input, textarea, or has a cursor-text helper
      const isText = 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.classList.contains('cursor-text') || 
        target.closest('.cursor-text');
        
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer');
      
      setHovered(!!isInteractive);
      setIsTextInput(!!isText);
      setIsOverTerminal(!!target.closest('#dev-terminal'));
      setIsOverRed(checkRedBackground(target));
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [hidden]);

  if (hidden) return null;

  // Color selection:
  // - Neon green inside terminal (black bg)
  // - Black over red background sections (for contrast)
  // - Brand red everywhere else
  const primaryColor = isOverTerminal ? '#4ade80' : (isOverRed ? '#000000' : '#ff2a2a');
  const primaryColorGlow = isOverTerminal ? 'rgba(74, 222, 128, 0.4)' : (isOverRed ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 42, 42, 0.8)');
  const hoverBg = isOverTerminal ? 'rgba(74, 222, 128, 0.15)' : (isOverRed ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 42, 42, 0.2)');
  const borderOpacityColor = isOverTerminal ? 'rgba(74, 222, 128, 0.6)' : (isOverRed ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 42, 42, 0.6)');

  return (
    <>
      {/* Outer Follow Circle: hides when typing (scale to 0) to avoid distraction */}
      <div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border pointer-events-none z-[999999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isTextInput ? 0 : (hovered ? 1.6 : 1)})`,
          backgroundColor: hovered ? hoverBg : 'transparent',
          borderColor: hovered ? primaryColor : borderOpacityColor,
          transition: 'transform 0.15s ease-out, background-color 0.2s ease, border-color 0.2s ease',
        }}
      />
      {/* Inner Core: morphs into a vertical text I-beam indicator when over text fields/terminal */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[999999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          width: isTextInput ? '2px' : '12px',
          height: isTextInput ? '16px' : '12px',
          borderRadius: isTextInput ? '1px' : '50%',
          backgroundColor: primaryColor,
          boxShadow: isTextInput ? 'none' : `0 0 10px ${primaryColorGlow}`,
          transition: 'width 0.15s ease, height 0.15s ease, border-radius 0.15s ease, background-color 0.2s ease, box-shadow 0.2s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;

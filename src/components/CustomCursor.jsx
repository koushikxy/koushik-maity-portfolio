import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if we are hovering over a clickable element
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Hide on mobile/touch screens using Tailwind's 'hidden md:block'
  return (
    <>
      {/* Outer Ring */}
      <div 
        className={`hidden md:block fixed top-0 left-0 w-10 h-10 rounded-full border border-[#E79418] pointer-events-none z-[9999] transition-transform duration-200 ease-out transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(231,148,24,0.3)] ${isPointer ? 'scale-[1.8] bg-[#E79418]/10' : 'scale-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      
      {/* Inner Dot */}
      <div 
        className={`hidden md:block fixed top-0 left-0 w-2 h-2 rounded-full bg-[#E79418] pointer-events-none z-[9999] transition-transform duration-75 ease-out transform -translate-x-1/2 -translate-y-1/2 ${isPointer ? 'scale-0' : 'scale-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </>
  );
};

export default CustomCursor;

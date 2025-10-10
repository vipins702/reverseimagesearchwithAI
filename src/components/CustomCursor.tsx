import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    let particleId = 0;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Create particle trail
      if (Math.random() > 0.7) {
        const newParticle = {
          id: particleId++,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
        };
        
        setParticles(prev => [...prev, newParticle]);
        
        // Remove particle after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, 800);
      }
    };

    const handleMouseDown = () => setIsClick(true);
    const handleMouseUp = () => setIsClick(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, .btn-cosmic, .glass, .hover-lift, [role="button"]')) {
        setIsHover(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, .btn-cosmic, .glass, .hover-lift, [role="button"]')) {
        setIsHover(false);
      }
    };

    // Add magnetic effect to interactive elements
    const addMagneticEffect = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElement = target.closest('.magnetic, .btn-cosmic, .glass');
      
      if (interactiveElement) {
        const rect = interactiveElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * 0.1;
        const deltaY = (e.clientY - centerY) * 0.1;
        
        (interactiveElement as HTMLElement).style.transform = 
          `translate(${deltaX}px, ${deltaY}px) scale(1.02)`;
      }
    };

    const removeMagneticEffect = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElement = target.closest('.magnetic, .btn-cosmic, .glass');
      
      if (interactiveElement) {
        (interactiveElement as HTMLElement).style.transform = '';
      }
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mousemove', addMagneticEffect);
    document.addEventListener('mouseleave', removeMagneticEffect);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mousemove', addMagneticEffect);
      document.removeEventListener('mouseleave', removeMagneticEffect);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`cursor-main ${isHover ? 'cursor-hover' : ''} ${isClick ? 'cursor-click' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      
      {/* Cursor Trail */}
      <div
        className="cursor-trail"
        style={{
          left: position.x,
          top: position.y,
          opacity: isClick ? 0.8 : 0.4,
        }}
      />
      
      {/* Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="cursor-particle"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
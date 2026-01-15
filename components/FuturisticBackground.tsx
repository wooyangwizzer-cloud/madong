
import React from 'react';

const FuturisticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      ></div>

      {/* Pulsing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Floating Particles Simulation (CSS-based) */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-20"></div>
      <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-4/5 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default FuturisticBackground;

import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Engrenagens animadas */}
      <div className="absolute top-20 right-20 w-32 h-32 animate-spin-slow opacity-20">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-500">
          <path d="M12 15H7a3 3 0 0 1-3-3V6m8 9v6m0-6h5a3 3 0 0 0 3-3V6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
      
      <div className="absolute bottom-40 left-20 w-24 h-24 animate-spin-reverse-slow opacity-20">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-purple-500">
          <path d="M12 15H7a3 3 0 0 1-3-3V6m8 9v6m0-6h5a3 3 0 0 0 3-3V6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      {/* Robô */}
      <div className="absolute bottom-10 right-10 w-48 h-48 animate-float opacity-20">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-500">
          <rect x="4" y="9" width="16" height="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="13" r="1" fill="currentColor"/>
          <circle cx="15" cy="13" r="1" fill="currentColor"/>
          <path d="M9 17h6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      {/* Texto animado */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-40 font-mono text-sm animate-type-1 opacity-10 text-blue-500">
          {'{'} automate(); {'}'}
        </div>
        <div className="absolute top-40 right-40 font-mono text-sm animate-type-2 opacity-10 text-purple-500">
          {'{'} optimize(); {'}'}
        </div>
      </div>
    </div>
  );
};

export default BackgroundAnimation;

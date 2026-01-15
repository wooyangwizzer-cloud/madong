
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 text-center max-w-4xl">
        <div className="inline-block px-4 py-1 mb-6 border border-blue-500/50 rounded-full bg-blue-500/10 text-blue-400 text-sm tracking-widest uppercase animate-pulse">
          Visionary Leader & Strategist
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none">
          마 동 석 <br />
          <span className="text-blue-500 text-glow">미래 전략 수립가</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          20년의 통찰로 비즈니스의 미래를 설계합니다. <br />
          정교한 데이터와 창의적 직관이 만나는 지점에서 전략이 탄생합니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#experience" 
            className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all transform hover:scale-105 futuristic-glow text-lg uppercase tracking-wider"
          >
            전략 포트폴리오 보기
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-bold rounded-lg transition-all text-lg uppercase tracking-wider"
          >
            협업 문의하기
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] tracking-[0.5em] text-blue-400 uppercase">Scroll Down</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;

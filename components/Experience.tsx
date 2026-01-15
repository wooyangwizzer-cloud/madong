
import React from 'react';

const Experience: React.FC = () => {
  const achievements = [
    {
      year: '현재',
      role: '시니어 미래 전략 총괄',
      company: '글로벌 전략 연구소',
      desc: '신성장 동력 발굴 및 5개년 중장기 미래 비즈니스 로드맵 수립'
    },
    {
      year: '2018 - 2022',
      role: '비즈니스 모델 디자이너',
      company: '메가테크 솔루션',
      desc: '디지털 트랜스포메이션 가속화 및 AI 도입 최적화 컨설팅 수행'
    },
    {
      year: '2010 - 2017',
      role: '전략 기획 파트장',
      company: '퍼스트 코퍼레이션',
      desc: '전사 KPI 관리 시스템 구축 및 시장 점유율 15% 성장 견인'
    },
    {
      year: '2004 - 2009',
      role: '마켓 애널리스트',
      company: '헤리티지 벤처스',
      desc: '글로벌 트렌드 분석 및 초창기 데이터 분석 기반 전략 프레임워크 개발'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-black mb-4 uppercase italic">Milestones</h2>
        <p className="text-slate-400">20년의 세월, 그 깊이가 다른 전략의 발자취</p>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:left-1/2">
        {achievements.map((item, idx) => (
          <div key={idx} className={`relative mb-16 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:-left-full' : 'md:pl-12 md:left-0'}`}>
            <div className={`absolute top-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-950 -left-[17px] md:left-auto ${idx % 2 === 0 ? 'md:-right-[17px]' : 'md:-left-[17px]'} shadow-[0_0_10px_rgba(37,99,235,1)]`}></div>
            
            <div className="glass-panel p-8 rounded-2xl hover:border-blue-500/50 transition-all group">
              <span className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 text-xs font-bold rounded mb-4 tracking-widest uppercase group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {item.year}
              </span>
              <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
              <p className="text-blue-500 font-bold mb-4">{item.company}</p>
              <p className="text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <div className="inline-block p-10 bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl">
          <h4 className="text-xl font-bold mb-4 text-blue-400">Total Career: 20 Years</h4>
          <p className="text-slate-500">
            수백 개의 프로젝트, 수천 번의 미팅, 그리고 하나의 목표.<br />
            당신의 비즈니스를 위한 최상의 한 수(Move)를 준비합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;


import React from 'react';
import { Zap, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const coreSkills = [
    { name: '전략 수립 능력', percent: 98, desc: '거시적 시장 분석 및 정교한 로드맵 설계' },
    { name: '정보 검색/분석', percent: 95, desc: '고급 데이터 마이닝 및 인사이트 추출' },
    { name: '글로벌 커뮤니케이션', percent: 88, desc: '다양한 외국어 능력을 바탕으로 한 해외 비즈니스' },
  ];

  const tools = [
    'Tableau', 'Power BI', 'Python (Data Analysis)', 'AI Strategy Tools', 'Advanced Excel', 'Figma'
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 uppercase italic tracking-widest">Expertise</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-10">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Zap className="w-6 h-6 text-blue-500" />
            <span className="tracking-tighter uppercase">Core Competencies</span>
          </h3>
          {coreSkills.map((skill, idx) => (
            <div key={idx} className="group">
              <div className="flex justify-between items-end mb-2">
                <span className="text-lg font-bold group-hover:text-blue-400 transition-colors">{skill.name}</span>
                <span className="text-blue-500 font-black tracking-tighter">{skill.percent}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(37,99,235,0.8)]"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
              <p className="text-slate-500 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-blue-500" />
            <span className="tracking-tighter uppercase">Digital Stack</span>
          </h3>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool, idx) => (
              <div key={idx} className="glass-panel px-6 py-4 rounded-lg border-l-4 border-blue-500 flex-grow text-center font-bold tracking-wider hover:bg-blue-600 transition-all cursor-default group">
                <span className="group-hover:scale-110 inline-block transition-transform">{tool}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 border border-dashed border-slate-700 rounded-2xl bg-slate-900/30 group">
            <p className="text-slate-400 italic text-center group-hover:text-blue-300 transition-colors">
              "기술은 전략을 완성하는 마지막 퍼즐 조각입니다. 도구를 넘어 그 본질의 가치를 설계합니다."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

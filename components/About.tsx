
import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const keywords = [
    { title: '꼼꼼함', desc: '모든 데이터의 이면을 파고드는 철저함', icon: <Target className="w-8 h-8 text-blue-500" /> },
    { title: '창의성', desc: '기존의 틀을 깨는 혁신적 솔루션 도출', icon: <Lightbulb className="w-8 h-8 text-blue-500" /> },
    { title: '미래 예측성', desc: '트렌드를 분석하여 앞서 나가는 인사이트', icon: <TrendingUp className="w-8 h-8 text-blue-500" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-700 scanner-effect">
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" 
            alt="Ma Dong Seok Profile" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950 to-transparent">
            <h3 className="text-3xl font-black italic tracking-tighter">THE ARCHITECT</h3>
            <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">since 2004</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-black mb-8 border-l-4 border-blue-500 pl-6 uppercase italic tracking-wider">Strategic Vision</h2>
        <p className="text-lg text-slate-300 mb-10 leading-relaxed">
          저는 단순한 계획가가 아닌, <span className="text-blue-400 font-bold">미래를 현실로 구현하는 전략가</span>입니다. 
          20년 동안 수많은 비즈니스 현장에서 변수를 상수로 바꾸고, 불확실한 시장 환경에서 명확한 이정표를 제시해 왔습니다. 
          저의 모든 전략은 세 가지 핵심 가치에 뿌리를 두고 있습니다.
        </p>

        <div className="grid gap-6">
          {keywords.map((item, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-xl flex items-start gap-6 hover:translate-x-2 transition-transform duration-300 group">
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-400 mb-1">{item.title}</h4>
                <p className="text-slate-400 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

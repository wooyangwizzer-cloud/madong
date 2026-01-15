
import React from 'react';
import { Mail, Phone, Share2, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-black mb-8 uppercase italic leading-tight tracking-tighter">
            Build The <br />
            <span className="text-blue-500 text-glow">Future Together</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            새로운 도약이 필요한 기업, 미래를 선점하고자 하는 리더를 기다립니다.<br />
            지금 바로 전략적 파트너십을 제안해 주세요.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center group-hover:border-blue-500 transition-colors shadow-inner">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Email</p>
                <a href="mailto:mds@wooyang.co.kr" className="text-2xl font-bold hover:text-blue-400 transition-colors">mds@wooyang.co.kr</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center group-hover:border-blue-500 transition-colors shadow-inner">
                <Phone className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Phone</p>
                <a href="tel:010-0000-0000" className="text-2xl font-bold hover:text-blue-400 transition-colors">010-0000-0000</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group opacity-50 cursor-not-allowed">
              <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-inner">
                <Share2 className="w-8 h-8 text-slate-600" />
              </div>
              <div>
                <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Social</p>
                <span className="text-2xl font-bold">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-10 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-blue-600/20 transition-colors"></div>
          
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></span> 
            <span className="tracking-tight italic">Direct Message Channel</span>
          </h3>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-500 text-[10px] mb-2 font-bold uppercase tracking-[0.2em]">Full Name</label>
                <input 
                  type="text" 
                  placeholder="성함을 입력하세요"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-700"
                />
              </div>
              <div>
                <label className="block text-slate-500 text-[10px] mb-2 font-bold uppercase tracking-[0.2em]">Organization</label>
                <input 
                  type="text" 
                  placeholder="소속 회사/단체"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-700"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-500 text-[10px] mb-2 font-bold uppercase tracking-[0.2em]">Inquiry Category</label>
              <select className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all text-white appearance-none cursor-pointer">
                <option>전략 컨설팅 문의</option>
                <option>비즈니스 협업 제안</option>
                <option>강연 및 인터뷰 요청</option>
                <option>기타</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-500 text-[10px] mb-2 font-bold uppercase tracking-[0.2em]">Transmission Body</label>
              <textarea 
                rows={4}
                placeholder="세부 내용을 입력해 주세요."
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-700 resize-none"
              ></textarea>
            </div>
            <button className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all shadow-lg shadow-blue-900/40 uppercase tracking-[0.3em] flex items-center justify-center gap-3 active:scale-95">
              <Send className="w-5 h-5" />
              Send Transmission
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

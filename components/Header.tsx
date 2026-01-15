
import React from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Intro' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-blue-500/20 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center font-black italic text-xl shadow-lg shadow-blue-500/50">
          M
        </div>
        <span className="font-black text-xl tracking-tighter hidden sm:inline">MA DONG SEOK</span>
      </div>

      <nav className="flex gap-4 md:gap-8">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`text-sm uppercase tracking-widest transition-all duration-300 hover:text-blue-400 ${
              activeSection === item.id ? 'text-blue-400 font-bold' : 'text-slate-400'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;

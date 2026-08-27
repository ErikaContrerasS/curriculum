import { Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 h-screen flex flex-col items-center justify-center">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 flex items-center justify-center text-5xl font-bold relative group">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500"></span>
                <span className="relative">EC</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-400">
                Erika Contreras
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Desarrolladora Full Stack &amp; Líder Técnica — CRM multitenant, automatización con IA e integraciones de mensajería
              </p>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://linkedin.com/in/erika-julieth-contreras-castillo-b683a1144" target="_blank" rel="noopener noreferrer"
                 className="group p-3 rounded-full bg-white/10 hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20">
                <Linkedin className="w-6 h-6 group-hover:text-white" />
              </a>
              <a href="mailto:juliethcontreras28@hotmail.com"
                 className="group p-3 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20">
                <Mail className="w-6 h-6 group-hover:text-white" />
              </a>
              <a href="tel:+573044063406"
                 className="group p-3 rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20">
                <Phone className="w-6 h-6 group-hover:text-white" />
              </a>
            </div>

            <div className="pt-8">
              <button className="group flex items-center gap-2 mx-auto text-cyan-300 hover:text-cyan-100 transition-colors">
                <span className="text-sm font-medium">Descubre mi trabajo</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>
      </header>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </>
  );
}

export default Header;

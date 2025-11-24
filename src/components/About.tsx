import { Zap, Target, Lightbulb } from 'lucide-react';

function About() {
  const highlights = [
    {
      icon: Zap,
      title: 'Rendimiento',
      description: 'Optimizo apps para velocidad y eficiencia, reduciendo tiempos de carga'
    },
    {
      icon: Target,
      title: 'Precisión',
      description: 'Código limpio y escalable que mantiene calidad a largo plazo'
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Siempre explorando nuevas tecnologías y mejores prácticas'
    }
  ];

  return (
    <section id="about" className="scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-8">Sobre mí</h2>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-12 border border-blue-100 mb-12">
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Soy una ingeniera de software apasionada por crear experiencias digitales que impacten. Con especialidad en desarrollo full-stack, diseño e implemento soluciones que no solo funcionan bien, sino que escalan eficientemente.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Mi enfoque combina arquitectura robusta, código limpio y diseño intuitivo. Me encanta resolver problemas complejos y trabajar en equipos que comparten la visión de excelencia técnica.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed">
            Desde startups en crecimiento hasta empresas consolidadas, he liderado proyectos que generan valor real para usuarios y negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;

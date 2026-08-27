import { Users, Bot, MessageCircle } from 'lucide-react';

function About() {
  const highlights = [
    {
      icon: Users,
      title: 'Liderazgo Técnico',
      description: 'Lidero el Departamento de Sistemas y coordino un equipo técnico entregando soluciones para múltiples cuentas de cliente'
    },
    {
      icon: Bot,
      title: 'Automatización con IA',
      description: 'Diseño workflows en n8n integrados con GPT-4o para bots conversacionales de atención y ventas'
    },
    {
      icon: MessageCircle,
      title: 'Integraciones de Mensajería',
      description: 'WhatsApp Business API, Meta Business Suite y Twilio para mensajería empresarial regulada'
    }
  ];

  return (
    <section id="about" className="scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-8">Sobre mí</h2>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-12 border border-blue-100 mb-12">
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Desarrolladora Full Stack con más de 6 años de experiencia y liderazgo técnico en curso como Líder del Departamento de Sistemas en Konekthub (AMCL Group). Especializada en el diseño y mantenimiento de plataformas CRM multitenant, automatización de procesos con IA (n8n, GPT-4o) e integraciones de mensajería (WhatsApp Business API, Meta, Twilio).
          </p>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Tengo experiencia gestionando infraestructura en la nube, liderando equipos técnicos y entregando soluciones para múltiples cuentas de cliente de forma simultánea.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed">
            Busco una oportunidad remota donde aportar experiencia full stack y de liderazgo técnico a un equipo dinámico.
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

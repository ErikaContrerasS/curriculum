import { Briefcase, TrendingUp } from 'lucide-react';

interface Job {
  title: string;
  company: string;
  period: string;
  description: string[];
  impact: string;
}

const jobs: Job[] = [
  {
    title: 'Líder de Departamento de Sistemas / Desarrolladora Full Stack',
    company: 'Konekthub (AMCL Group LLC)',
    period: '01/2025 – 08/2026',
    impact: 'Reducción del 77% en costo de hosting',
    description: [
      'Lidero la infraestructura técnica de una plataforma CRM multitenant con IA, coordinando un equipo compuesto por un programador y una asistente',
      'Gestiono el desarrollo y soporte de múltiples cuentas de cliente en simultáneo (Element Insurance, Partner Group, Unity Financial), como principal punto de contacto técnico',
      'Diseño y despliego workflows de automatización en n8n integrados con Evolution API (WhatsApp) y modelos de OpenAI (GPT-4o) para bots conversacionales de atención y ventas',
      'Construyo y mantengo el stack backend/frontend: Vue.js, NestJS, TypeScript, PostgreSQL y Firebase/Firestore',
      'Administro infraestructura en servidores VPS (Contabo) con Docker, PM2 y Redis, incluyendo recuperación de contenedores y gestión de bases de datos en producción',
      'Lidero integraciones de Meta Business Suite (WhatsApp Business, Facebook/Instagram) y resolución de flujos OAuth para clientes empresariales',
      'Gestioné el registro y cumplimiento de campañas A2P 10DLC en Twilio para mensajería empresarial regulada',
      'Evalué y propuse una migración de infraestructura que reduciría el costo de hosting en un 77% (de ~$150 a ~$34 USD/mes)'
    ]
  },
  {
    title: 'Desarrolladora Full Stack',
    company: 'Cooweb',
    period: '03/2022 – 12/2024',
    impact: 'De junior a líder técnica',
    description: [
      'Crecí de desarrolladora junior a senior, asumiendo responsabilidades de liderazgo técnico dentro del equipo de desarrollo',
      'Contribuí al desarrollo de los proyectos Affinity, Raudoc y Tiktime, y lideré el desarrollo del CRM de Element Insurance (Vue.js, NestJS, Firebase/Firestore, PostgreSQL)',
      'Diseñé el pipeline de ventas y procesamiento del CRM (Nuevo Lead → Agendado → Venta Cerrada), incluyendo creación automática de pólizas al cierre de negocio',
      'Implementé Firebase Cloud Functions para sincronización de estados con PostgreSQL, contadores de ventas y manejo de condiciones de carrera mediante transacciones de Firestore',
      'Desarrollé control de acceso basado en roles (RBAC) para 8+ perfiles de usuario (Admin, Supervisor, Vendedor, Procesador, Calidad, entre otros)'
    ]
  },
  {
    title: 'Desarrolladora Full Stack — Líder de Desarrollo y Proyectos',
    company: 'Exiware',
    period: '02/2020 – 03/2022',
    impact: 'Liderazgo de equipo técnico',
    description: [
      'Lideré el desarrollo y la gestión de proyectos del equipo técnico',
      'Tecnologías: PHP, JavaScript, Ajax, Laravel, MySQL, PostgreSQL'
    ]
  },
  {
    title: 'Desarrolladora Web',
    company: 'Up Marketing',
    period: '02/2017 – 12/2018',
    impact: 'Inicio de carrera',
    description: [
      'Desarrollo y mantenimiento de sitios y aplicaciones web'
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-12">
        <Briefcase className="w-8 h-8 text-blue-600" />
        <h2 className="text-4xl font-bold text-slate-900">Experiencia Profesional</h2>
      </div>
      <div className="relative">
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div key={index} className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></div>
              <div className="ml-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-blue-100 hover:border-blue-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0 bg-blue-50 px-4 py-2 rounded-full">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600">{job.impact}</span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm mb-4">{job.period}</p>
                <ul className="space-y-3">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-slate-700 flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">▸</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

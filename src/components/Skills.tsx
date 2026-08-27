import { Award } from 'lucide-react';

interface SkillCategory {
  category: string;
  level: number;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    level: 90,
    skills: ['Vue.js', 'Nuxt', 'JavaScript', 'TypeScript'],
    color: 'from-blue-600 to-cyan-600'
  },
  {
    category: 'Backend',
    level: 92,
    skills: ['Node.js', 'NestJS', 'PHP', 'Laravel'],
    color: 'from-green-600 to-emerald-600'
  },
  {
    category: 'Bases de Datos',
    level: 88,
    skills: ['PostgreSQL', 'MySQL', 'Firebase/Firestore', 'Redis'],
    color: 'from-teal-600 to-cyan-600'
  },
  {
    category: 'Automatización e IA',
    level: 90,
    skills: ['n8n', 'OpenAI GPT-4o', 'Evolution API'],
    color: 'from-indigo-600 to-blue-600'
  },
  {
    category: 'Infraestructura',
    level: 85,
    skills: ['Docker', 'PM2', 'VPS (Contabo)', 'Nginx'],
    color: 'from-orange-600 to-red-600'
  },
  {
    category: 'Integraciones',
    level: 90,
    skills: ['Meta Business Suite (WhatsApp/Facebook/Instagram)', 'Twilio (A2P 10DLC)'],
    color: 'from-cyan-600 to-blue-600'
  },
  {
    category: 'Herramientas',
    level: 85,
    skills: ['Git', 'Postman', 'Prisma'],
    color: 'from-slate-600 to-slate-800'
  },
  {
    category: 'Liderazgo & Habilidades Blandas',
    level: 95,
    skills: ['Liderazgo de equipos técnicos', 'Gestión de múltiples cuentas de cliente', 'Adaptación al cambio', 'Mejora continua', 'Comunicación con clientes', 'Trabajo en equipo'],
    color: 'from-purple-600 to-pink-600'
  }
];

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-12">
        <Award className="w-8 h-8 text-blue-600" />
        <h2 className="text-4xl font-bold text-slate-900">Habilidades y Competencias</h2>
      </div>
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900">{category.category}</h3>
              <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.level}%
              </span>
            </div>
            <div className="relative h-3 bg-slate-200 rounded-full overflow-hidden mb-4">
              <div
                className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-700 ease-out`}
                style={{ width: `${category.level}%` }}
              ></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

import { ExternalLink, Github, Code2 } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  github?: string;
  demo?: string;
  color: string;
}

const projects: Project[] = [
  {
    title: 'CRM Multitenant Konekthub',
    description: 'Plataforma CRM multitenant con automatización de IA',
    fullDescription: 'Plataforma CRM multitenant que atiende simultáneamente a múltiples cuentas de cliente (Element Insurance, Partner Group, Unity Financial), con bots conversacionales de atención y ventas construidos en n8n + GPT-4o e integraciones de WhatsApp vía Evolution API y Meta Business Suite.',
    tech: ['Vue.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Firebase/Firestore', 'n8n', 'GPT-4o'],
    color: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'CRM Element Insurance',
    description: 'CRM de ventas y procesamiento de pólizas',
    fullDescription: 'Diseño del pipeline de ventas y procesamiento (Nuevo Lead → Agendado → Venta Cerrada) con creación automática de pólizas al cierre de negocio, sincronización de estados mediante Firebase Cloud Functions y control de acceso basado en roles (RBAC) para 8+ perfiles de usuario.',
    tech: ['Vue.js', 'NestJS', 'Firebase/Firestore', 'PostgreSQL'],
    color: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Affinity, Raudoc & Tiktime',
    description: 'Contribuciones a proyectos de producto en Cooweb',
    fullDescription: 'Desarrollo de features en tres productos del equipo de Cooweb, usando JavaScript, TypeScript, Node.js, PHP, Vue.js, Nuxt y Firebase, en el marco del crecimiento de desarrolladora junior a líder técnica.',
    tech: ['JavaScript', 'TypeScript', 'Node.js', 'PHP', 'Vue.js', 'Nuxt'],
    color: 'from-orange-600 to-red-600'
  }
];

function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-12">
        <Code2 className="w-8 h-8 text-blue-600" />
        <h2 className="text-4xl font-bold text-slate-900">Proyectos Destacados</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group relative h-full"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
            <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-200 hover:border-slate-300 flex flex-col">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 flex-1">{project.title}</h3>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                <p className="text-slate-600 text-sm mb-4 font-medium">{project.description}</p>
                <p className={`text-slate-700 leading-relaxed transition-all duration-300 overflow-hidden ${
                  hoveredProject === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {project.fullDescription}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-300 ${
                        hoveredProject === index
                          ? `bg-gradient-to-r ${project.color} text-white`
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Código</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Ver Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

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
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico escalable',
    fullDescription: 'Plataforma completa de comercio electrónico con carrito de compras inteligente, pasarela de pagos integrada con Stripe, panel de administración en tiempo real y sistema de inventario automático.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redux'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Visualización de datos en tiempo real',
    fullDescription: 'Dashboard interactivo con gráficos animados, métricas personalizables, exportación de reportes y análisis predictivos usando machine learning.',
    tech: ['TypeScript', 'Next.js', 'Chart.js', 'Supabase', 'TensorFlow.js'],
    github: 'https://github.com',
    color: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Mobile App',
    description: 'Aplicación mobile cross-platform',
    fullDescription: 'Aplicación móvil nativa para iOS y Android con gestión de tareas inteligente, sincronización en tiempo real con la nube y notificaciones push personalizadas.',
    tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
    github: 'https://github.com',
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

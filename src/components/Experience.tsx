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
    title: 'Senior Software Engineer',
    company: 'Empresa Tecnológica',
    period: '2022 - Presente',
    impact: '100k+ usuarios activos',
    description: [
      'Lideré el desarrollo de una plataforma web que maneja más de 100k usuarios activos',
      'Implementé arquitectura de microservicios con Node.js y React',
      'Reduje el tiempo de carga de la aplicación en un 40%'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Startup Innovadora',
    period: '2020 - 2022',
    impact: 'Producto en producción',
    description: [
      'Desarrollé features end-to-end desde el diseño hasta el deployment',
      'Colaboré con equipos multidisciplinarios en metodología ágil',
      'Mentoré a desarrolladores junior'
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

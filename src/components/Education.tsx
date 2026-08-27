import { GraduationCap, Award } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

const education: Education[] = [
  {
    degree: 'Ingeniería de Software',
    institution: 'Universidad Iberoamericana',
    period: '04/2022 – 2024'
  },
  {
    degree: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
    institution: 'SENA',
    period: '02/2014 – 12/2016'
  },
  {
    degree: 'Técnico en Programación de Software',
    institution: 'SENA',
    period: '02/2012 – 12/2014'
  },
  {
    degree: 'Diplomado en PHP',
    institution: 'Politécnico Grancolombiano',
    period: '03/2019 – 12/2020'
  }
];

const certifications: Certification[] = [
  {
    name: 'Claude 101',
    issuer: 'Anthropic',
    year: '2026'
  }
];

function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-8 h-8 text-cyan-600" />
        <h2 className="text-3xl font-bold text-slate-900">Educación</h2>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
              <span className="text-slate-500 text-sm mt-2 md:mt-0">{edu.period}</span>
            </div>
            <p className="text-cyan-600 font-medium mb-2">{edu.institution}</p>
            {edu.description && (
              <p className="text-slate-600">{edu.description}</p>
            )}
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-cyan-600" />
            <h3 className="text-xl font-bold text-slate-900">Certificaciones</h3>
          </div>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                <div>
                  <p className="font-medium text-slate-900">{cert.name}</p>
                  <p className="text-sm text-slate-600">{cert.issuer}</p>
                </div>
                <span className="text-sm text-slate-500">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

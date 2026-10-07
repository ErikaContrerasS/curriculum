export const profile = {
  name: 'Erika Julieth Contreras Castillo',
  shortName: 'Erika Contreras',
  role: 'Full Stack Developer & Tech Lead',
  location: 'Bogotá, Colombia',
  email: 'ingerikacontreras@outlook.com',
  phone: '+57 304 406 3406',
  phoneHref: 'tel:+573044063406',
  linkedin: 'https://www.linkedin.com/in/ing-erika-julieth-contreras-castillo',
  github: 'https://github.com/ErikaContrerasS',
  cv: '/Erika-Contreras-CV.pdf',
};

export type YamlLine = { indent: 0 | 1; key: string; value?: string; accent?: boolean };

export const profileYaml: YamlLine[] = [
  { indent: 0, key: 'profile' },
  { indent: 1, key: 'subject', value: profile.name },
  { indent: 1, key: 'role', value: profile.role },
  { indent: 1, key: 'origin', value: profile.location },
  { indent: 1, key: 'experience', value: '6+ años en producción' },
  { indent: 1, key: 'focus', value: 'CRM multitenant · IA aplicada · liderazgo' },
  { indent: 1, key: 'current', value: 'Freelance @ En Stock' },
  { indent: 0, key: 'stack' },
  { indent: 1, key: 'frontend', value: 'Vue · Nuxt · React · Next.js · TypeScript' },
  { indent: 1, key: 'backend', value: 'Node.js · NestJS · Laravel · Python' },
  { indent: 1, key: 'data', value: 'PostgreSQL · MySQL · Firestore · Redis' },
  { indent: 1, key: 'cloud', value: 'GCP · AWS · Docker · GitHub Actions' },
  { indent: 1, key: 'ai', value: 'n8n · GPT-4o · Claude Code · Copilot' },
  { indent: 0, key: 'contact' },
  { indent: 1, key: 'linkedin', value: '/in/ing-erika-julieth-contreras-castillo' },
  { indent: 1, key: 'github', value: 'ErikaContrerasS' },
  { indent: 1, key: 'status', value: '● open to work · remoto / híbrido', accent: true },
];

export const about = [
  'Soy Ingeniera de Software con más de 6 años como desarrolladora Full Stack y líder técnica en seguros, automotriz, retail B2B y SaaS.',
  'Construí desde cero un CRM multitenant que gestionó 15.000 pólizas activas y 300.000 leads, y llevé a producción un agente de IA que subió la efectividad de agendamiento de ventas del 20% al 50%.',
  'Lideré equipos Scrum, implanté revisiones de código por Pull Requests y mentoreé a 10 desarrolladores junior. Hoy uso Claude Code y GitHub Copilot a diario, revisando con criterio el código que generan.',
];

export type StackItem = { name: string; icon?: string };

export type StackGroup = {
  key: string;
  items: StackItem[];
};

export const stack: StackGroup[] = [
  {
    key: 'frontend',
    items: [
      { name: 'Vue.js', icon: 'vue' },
      { name: 'Nuxt', icon: 'nuxtjs' },
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'PHP', icon: 'php' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Python', icon: 'py' },
    ],
  },
  {
    key: 'data',
    items: [
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Firebase/Firestore', icon: 'firebase' },
      { name: 'Redis', icon: 'redis' },
    ],
  },
  {
    key: 'infra',
    items: [
      { name: 'Docker', icon: 'docker' },
      { name: 'GCP', icon: 'gcp' },
      { name: 'AWS (EC2, S3)', icon: 'aws' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Nginx', icon: 'nginx' },
      { name: 'PM2' },
    ],
  },
  {
    key: 'automation_ai',
    items: [
      { name: 'n8n' },
      { name: 'OpenAI GPT-4o' },
      { name: 'Agentes con herramientas' },
      { name: 'WhatsApp Business API' },
      { name: 'Meta Business Suite' },
      { name: 'Twilio' },
      { name: 'Claude Code' },
      { name: 'GitHub Copilot' },
    ],
  },
];

export type Job = {
  ref: string;
  role: string;
  company: string;
  period: string;
  place: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const career: Job[] = [
  {
    ref: 'HEAD',
    role: 'Full Stack Developer (Freelance)',
    company: 'En Stock',
    period: 'Sep 2026 - Actual',
    place: 'Bogotá',
    summary: 'Sistema de cotizaciones internas de un mayorista B2B conectado a las bodegas de 5 proveedores.',
    highlights: [
      'Unifiqué en una sola base de datos el catálogo de 5 proveedores (5.000 productos únicos).',
      'Panel de administración de categorías: cambios de catálogo de semanas a un par de horas.',
      'Optimización del servidor con timeouts y sincronización incremental (reducción proyectada de 309 a 141 USD/mes).',
    ],
    tags: ['Node.js', 'React'],
  },
  {
    ref: 'HEAD~1',
    role: 'Líder del Departamento de Sistemas / Full Stack',
    company: 'Konekthub (AMCL Group LLC)',
    period: 'Ene 2025 - Ago 2026',
    place: 'Remoto',
    summary: 'Plataforma CRM multitenant con IA para agencias de seguros en EE. UU. Equipo Scrum de 2 desarrolladores y 1 QA, 3 productos en paralelo.',
    highlights: [
      'CRM multitenant desde cero: 15.000 pólizas activas, 300.000 leads y 1.500 ventas mensuales.',
      'Agente de IA (GPT-4o + n8n + WhatsApp) que subió la efectividad de agendamiento del 20% al 50%.',
      'Contacto técnico principal de 3 cuentas de cliente; implanté revisión de código por Pull Requests.',
    ],
    tags: ['Vue.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'n8n', 'GPT-4o', 'GCP'],
  },
  {
    ref: 'HEAD~2',
    role: 'Desarrolladora Full Stack',
    company: 'CooWeb LLC',
    period: 'Mar 2022 - Ene 2025',
    place: 'Remoto',
    summary: 'Fábrica de software que provee equipos de desarrollo a terceros, bajo Scrum.',
    highlights: [
      'Lideré el CRM de Element Insurance: pipeline de ventas y control de acceso por roles para más de 8 perfiles.',
      'Ascendí de junior a senior en menos de 3 años, hasta liderar a 10 desarrolladores junior.',
      'Contribuí a Raudoc (150 clientes B2B) y Tiktime (más de 2.500 usuarios recurrentes).',
    ],
    tags: ['Vue.js', 'NestJS', 'Firestore', 'Laravel', 'Nuxt'],
  },
  {
    ref: 'HEAD~3',
    role: 'Full Stack Developer, Líder de Desarrollo y Proyectos',
    company: 'Exiware Software',
    period: 'Feb 2020 - Mar 2022',
    place: 'Colombia',
    summary: 'Software para el sector automotriz.',
    highlights: [
      'Software crítico del ERP de ensamblaje y la plataforma de Trazabilidad de Chevrolet en Colombia y Uruguay.',
      'Funcionalidades en SmartSales, CRM usado por concesionarios en 5 países, y el cotizador Clickmi.',
    ],
    tags: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'PostgreSQL'],
  },
  {
    ref: 'HEAD~4',
    role: 'Desarrolladora Web (Prácticas)',
    company: 'Up Marketing',
    period: 'Feb 2017 - Dic 2018',
    place: 'Colombia',
    summary: 'Sitios y landing pages en WordPress para campañas digitales.',
    highlights: [],
    tags: ['WordPress'],
  },
];

export type Project = {
  icon: string;
  name: string;
  description: string;
  tags: string[];
  url?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    icon: '🤖',
    name: 'helpdesk-agentes',
    description:
      'Mesa de soporte multiagente: 3 agentes de GitHub Copilot (clasificación, diagnóstico y aprovisionamiento) con un motor de reglas en Node.js. El LLM extrae los datos y el código decide severidad, riesgo y transiciones válidas.',
    tags: ['Node.js', 'GitHub Copilot', 'Multiagente', 'Spec-driven'],
    url: 'https://github.com/ErikaContrerasS/helpdesk-agentes',
  },
  {
    icon: '📚',
    name: 'Andawanda / SamuLearn',
    description:
      'Plataforma educativa gamificada que nació en casa para mi hijo y hoy conecta a docentes, padres y estudiantes: 6 módulos de aprendizaje y panel de estadísticas para padres.',
    tags: ['React 19', 'Tailwind CSS', 'Claude Code'],
    url: 'https://github.com/ErikaContrerasS/SamuLearn',
  },
  {
    icon: '🏢',
    name: 'CRM Multitenant Konekthub',
    description:
      'CRM para agencias de seguros con bots de atención y ventas en n8n + GPT-4o e integraciones de WhatsApp y Meta. Atiende varias cuentas de cliente en una sola plataforma.',
    tags: ['Vue.js', 'NestJS', 'PostgreSQL', 'n8n', 'GPT-4o'],
    note: 'privado',
  },
  {
    icon: '📋',
    name: 'CRM Element Insurance',
    description:
      'Pipeline de ventas (Nuevo Lead → Agendado → Venta Cerrada) con creación automática de pólizas, sincronización con Cloud Functions y control de acceso por roles.',
    tags: ['Vue.js', 'NestJS', 'Firestore', 'PostgreSQL'],
    note: 'privado',
  },
];

export const education = [
  { title: 'Ingeniería de Software', place: 'Corporación Universitaria Iberoamericana', year: '2024' },
  { title: 'Tecnóloga en Análisis y Desarrollo de Sistemas de Información', place: 'SENA', year: '2016' },
  { title: 'Técnico en Programación de Software', place: 'SENA', year: '2014' },
];

export const certifications = [
  { title: 'Claude 101', place: 'Anthropic', year: '2026' },
  { title: 'Diplomado en Análisis de Datos con Python y Pandas (144 h)', place: 'Corporación Universitaria Iberoamericana', year: '2023' },
  { title: 'Diplomado en PHP', place: 'Politécnico Grancolombiano', year: '2020' },
];

export const languages = 'Español (nativo) · Inglés (A2, en formación)';

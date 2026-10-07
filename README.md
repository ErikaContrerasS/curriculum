# Erika Contreras — CV interactivo

Sitio web personal con mi hoja de vida interactiva, con estética de terminal: experiencia, stack, proyectos, educación y contacto, en una sola página responsive.

🔗 **Demo:** https://curriculum-steel-kappa.vercel.app

![Vista previa del sitio](docs/preview.png)

## Secciones

Cada sección es un "comando" de terminal:

- `whoami --verbose`: portada con efecto de escritura y enlaces de contacto
- `cat about.md`: perfil profesional
- `cat tech-stack.yaml`: frontend, backend, datos, infraestructura y automatización con IA
- `git log --career`: trayectoria profesional como un historial de commits
- `ls ~/projects`: proyectos destacados
- `cat education.txt`: formación, certificaciones e idiomas
- `connect --socials`: contacto y descarga del CV en PDF

## Tecnologías

- **React 18** + **TypeScript**
- **Vite** (build y servidor de desarrollo)
- **Tailwind CSS** (estilos y diseño responsive)
- **lucide-react** (íconos)
- **ESLint** (calidad de código)

## Cómo ejecutarlo

Requisitos: Node.js 18 o superior.

```bash
npm install
npm run dev        # servidor de desarrollo en http://localhost:5173
npm run build      # build de producción en /dist
npm run preview    # previsualizar el build
npm run lint       # revisar el código
npm run typecheck  # verificar tipos de TypeScript
```

## Estructura

```
src/
├── data.ts              # todo el contenido del CV (editar aquí para actualizar)
├── App.tsx              # composición de la página
└── components/
    ├── Nav.tsx          # barra de navegación
    ├── Hero.tsx         # portada con whoami animado
    ├── Terminal.tsx     # ventana de terminal reutilizable
    ├── Section.tsx      # encabezado tipo comando ($ ...)
    ├── About.tsx
    ├── Stack.tsx
    ├── Career.tsx
    ├── Projects.tsx
    ├── Education.tsx
    └── Contact.tsx
public/
└── Erika-Contreras-CV.pdf  # CV descargable
```

## Notas

Proyecto iniciado con [bolt.new](https://bolt.new) y rediseñado con estética de terminal, a juego con mi [perfil de GitHub](https://github.com/ErikaContrerasS). Respeta `prefers-reduced-motion`: sin animaciones para quien las desactiva.

---

**Erika Julieth Contreras Castillo** · Bogotá, Colombia
[LinkedIn](https://www.linkedin.com/in/erika-julieth-contreras-castillo-a6456235b) · [GitHub](https://github.com/ErikaContrerasS)

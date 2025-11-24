import { Github, Linkedin, Mail, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-slate-300 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© 2024 - Hecho con dedicación</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

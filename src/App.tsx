import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Career from './components/Career';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <main className="mx-auto max-w-5xl space-y-20 px-5 py-16">
        <About />
        <Stack />
        <Career />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-term-line/50 py-8 text-center font-mono text-xs text-term-muted">
        Made with 💜 and lots of coffee from Bogotá, Colombia · © {new Date().getFullYear()} Erika Contreras
      </footer>
    </div>
  );
}

export default App;

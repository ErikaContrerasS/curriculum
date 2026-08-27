import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Contacto</h2>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <p className="text-slate-700 text-lg mb-8">
          ¿Tienes un proyecto en mente o te gustaría colaborar? No dudes en contactarme.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <Mail className="w-6 h-6 text-cyan-600 mt-1" />
            <div>
              <h3 className="font-medium text-slate-900 mb-1">Email</h3>
              <a href="mailto:juliethcontreras28@hotmail.com" className="text-slate-600 hover:text-cyan-600 transition-colors">
                juliethcontreras28@hotmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-6 h-6 text-cyan-600 mt-1" />
            <div>
              <h3 className="font-medium text-slate-900 mb-1">Teléfono</h3>
              <a href="tel:+573044063406" className="text-slate-600 hover:text-cyan-600 transition-colors">
                +57 304 406 3406
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Linkedin className="w-6 h-6 text-cyan-600 mt-1" />
            <div>
              <h3 className="font-medium text-slate-900 mb-1">LinkedIn</h3>
              <a href="https://linkedin.com/in/erika-julieth-contreras-castillo-b683a1144" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-600 transition-colors">
                erika-julieth-contreras-castillo
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-cyan-600 mt-1" />
            <div>
              <h3 className="font-medium text-slate-900 mb-1">Ubicación</h3>
              <p className="text-slate-600">Bogotá D.C., Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

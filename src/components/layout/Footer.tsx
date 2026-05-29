import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-graphite text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
          
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="font-heading font-bold text-2xl tracking-tighter text-white">Yullmar <span className="text-gold">LLC.</span></span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Facilitadores internacionales de soluciones financieras, logísticas, energéticas y aeronáuticas de alto impacto con alcance global.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-heading font-semibold uppercase tracking-wider mb-6 text-xs">Servicios</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Soluciones Financieras</Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Logística Internacional</Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Energía e Infraestructura</Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">FBO Aéreo VIP</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading font-semibold uppercase tracking-wider mb-6 text-xs">Compañía</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/#nosotros" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/#portafolio" className="text-gray-400 hover:text-white transition-colors">Portafolio</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading font-semibold uppercase tracking-wider mb-6 text-xs">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gold shrink-0 mt-0.5" />
                <span className="text-gray-400">11440 N. Kendall Drive,<br />Suite 401<br />Miami, FL 33176</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gold shrink-0" />
                <span className="text-gray-400">+1 305-746-1273</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gold shrink-0" />
                <span className="text-gray-400">info@yullmar.com</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Yullmar LLC. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/politica-privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link to="/terminos-servicio" className="hover:text-white transition-colors">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

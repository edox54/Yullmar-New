import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="bg-primary-700 text-white py-2 text-xs">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center max-w-7xl">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> 11440 N. Kendall Drive, Miami, FL</span>
          </div>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1" /> +1 305-746-1273</span>
            <span>EN | ES</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-heading font-bold text-2xl tracking-tighter text-primary-700">Yullmar <span className="text-gold">LLC.</span></span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "transition-colors hover:text-primary-600 font-heading uppercase tracking-wider text-xs",
                  location.pathname === link.path ? "text-primary-600 font-semibold" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-primary-700 text-white px-5 py-2.5 rounded hover:bg-primary-600 transition-colors uppercase text-xs font-heading tracking-wider font-semibold"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block px-2 py-1 text-sm font-heading uppercase tracking-wider",
                  location.pathname === link.path ? "text-primary-700 font-semibold" : "text-gray-600"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="block w-full text-center bg-primary-700 text-white px-5 py-3 rounded mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

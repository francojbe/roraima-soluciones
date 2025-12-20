import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#trust' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img src={logo} alt="Roraima Soluciones" className="h-10 w-auto" />
          <span className="text-2xl font-bold tracking-tighter text-blue-900">
            Roraima<span className="text-blue-600">Soluciones</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-slate-700' : 'text-slate-800'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/56993460120"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-0.5"
          >
            <Phone size={18} />
            <span>Agendar Visita</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 font-medium py-2 px-4 hover:bg-blue-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/56993460120"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-blue-600 text-white py-3 rounded-lg font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agendar Visita
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ThermometerSnowflake } from 'lucide-react';
import content from '../content.json';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Nosotros', href: '#nosotros' },
        { name: 'Testimonios', href: '#testimonios' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            // Small delay to ensure menu closes and layout stabilizes
            setTimeout(() => {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 100);
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <img
                        src={logo}
                        alt="Roraima Soluciones"
                        className={`h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${!scrolled && !isOpen ? 'drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' : ''}`}
                    />
                    <div className="flex flex-col justify-center">
                        <span className={`text-xl md:text-2xl font-extrabold tracking-wide uppercase leading-none transition-colors duration-300 ${scrolled || isOpen ? 'text-slate-900' : 'text-white'}`}>
                            Roraima
                        </span>
                        <span className={`text-[0.60rem] md:text-[0.70rem] font-bold tracking-[0.2em] uppercase leading-none mt-0.5 transition-colors duration-300 ${scrolled || isOpen ? 'text-slate-700' : 'text-white/90'}`}>
                            Soluciones SPA
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`text-sm font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={content.contact_info.whatsapp_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        <Phone size={18} />
                        <span>Contáctanos</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`md:hidden p-2 rounded-lg transition-colors ${scrolled || isOpen ? 'text-slate-800' : 'text-white bg-white/10 backdrop-blur-sm hover:bg-white/20'}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href={content.contact_info.whatsapp_url}
                                className="btn-primary w-full mt-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Solicitar Cotización
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

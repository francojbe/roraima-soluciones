import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12 mb-16">

                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Roraima<span className="text-blue-500">.</span></h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Servicios de climatización y refrigeración con un enfoque humano.
                            Llevamos confort a tu hogar con la calidad que mereces.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" aria-label="Síguenos en Instagram" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                                <Instagram size={20} />
                            </a>
                            <a href="#" aria-label="Síguenos en Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            <li><a href="#hero" className="hover:text-blue-400 transition-colors">Inicio</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition-colors">Servicios</a></li>
                            <li><a href="#trust" className="hover:text-blue-400 transition-colors">Nosotros</a></li>
                            <li><a href="/login" className="hover:text-blue-400 transition-colors">Acceso Clientes / Admin</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contáctanos</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone size={20} className="text-blue-500 mt-1" />
                                <span>+56 9 9346 0120<br /><span className="text-sm text-slate-500">Lunes a Sábado 9:00 - 19:00</span></span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-blue-500" />
                                <a href="mailto:contacto@roraimasoluciones.cl" className="hover:text-blue-400 transition-colors">contacto@roraimasoluciones.cl</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-blue-500 mt-1" />
                                <span>Santiago, Chile<br /><span className="text-sm text-slate-500">Cobertura en toda la región metropolitana</span></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Roraima Soluciones. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;

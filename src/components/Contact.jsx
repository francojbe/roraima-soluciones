import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import content from '../content.json';

const Contact = () => {
    return (
        <section id="contacto" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="p-10 bg-blue-600 text-white flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                                <p className="mb-10 text-blue-100">
                                    {content.contact_info.description}
                                </p>

                                <div className="space-y-6">
                                    <a href={`tel:${content.contact_info.phone}`} className="flex items-center gap-4 hover:translate-x-1 transition-transform">
                                        <div className="w-10 h-10 bg-blue-500/50 rounded-lg flex items-center justify-center">
                                            <Phone size={20} />
                                        </div>
                                        <span>{content.contact_info.phone}</span>
                                    </a>

                                    <a href={`mailto:${content.contact_info.email}`} className="flex items-center gap-4 hover:translate-x-1 transition-transform">
                                        <div className="w-10 h-10 bg-blue-500/50 rounded-lg flex items-center justify-center">
                                            <Mail size={20} />
                                        </div>
                                        <span>{content.contact_info.email}</span>
                                    </a>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-blue-500/50 rounded-lg flex items-center justify-center">
                                            <MapPin size={20} />
                                        </div>
                                        <span>{content.contact_info.address}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 md:mt-0">
                                <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden shadow-lg border-2 border-white/20">
                                    <iframe
                                        title="Ubicación Roraima Soluciones"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.073439974558!2d-70.6482736848008!3d-33.43777568077582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1715012345678!5m2!1ses!2scl"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="p-10">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Cotice con Nosotros</h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                                    <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Su nombre" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                                    <input type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="+56 9..." />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                                    <textarea rows="4" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="¿En qué podemos ayudarle?"></textarea>
                                </div>
                                <button type="submit" className="w-full btn-primary bg-slate-900 hover:bg-slate-800 text-white">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

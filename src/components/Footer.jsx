import React from 'react';
import { ThermometerSnowflake } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Footer = () => {
    const { content } = useContent();
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <ThermometerSnowflake size={24} className="text-blue-500" />
                            <span className="text-xl font-bold">Roraima Soluciones</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Expertos en climatización y refrigeración. Comprometidos con la calidad y la eficiencia energética.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Servicios</h4>
                        <ul className="space-y-2 text-sm">
                            {content.footer_info.services_list.map((item, i) => (
                                <li key={i}><a href="#servicios" className="hover:text-blue-400 transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Contacto</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href={`tel:${content.contact_info.phone}`} className="hover:text-blue-400 transition-colors">{content.contact_info.phone}</a></li>
                            <li><a href={`mailto:${content.contact_info.email}`} className="hover:text-blue-400 transition-colors">{content.contact_info.email}</a></li>
                            <li>Santiago, Chile</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidad</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-sm">
                    <p>{content.footer_info.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

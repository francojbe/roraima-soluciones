import React from 'react';
import { motion } from 'framer-motion';
import { Wind, ThermometerSnowflake, Fan } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import acImage from '../assets/service_ac_split.png';
import coldRoomImage from '../assets/service_cold_room.png';
import ventilationImage from '../assets/service_ventilation.png';

const Services = () => {
    const { content } = useContent();
    const images = [acImage, coldRoomImage, ventilationImage];
    const icons = [Wind, ThermometerSnowflake, Fan];

    return (
        <section id="servicios" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
                    >
                        Nuestras Soluciones
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600"
                    >
                        Servicios especializados diseñados para garantizar la máxima eficiencia y durabilidad de sus equipos.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {content.services.map((service, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                                    <img
                                        src={images[index]}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg z-20 shadow-sm">
                                        <Icon className="text-blue-600" size={24} />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    <a href="#contacto" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                                        Solicitar evaluación
                                        <span className="ml-1 text-lg">→</span>
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;

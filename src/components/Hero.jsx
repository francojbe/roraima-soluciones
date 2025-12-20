import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                {/* Fallback image from Unsplash - Cozy Living Room */}
                <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop"
                    alt="Cozy living room"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl">
                    <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-medium text-sm mb-6 animate-fade-in-up">
                        Expertos en Climatización de Hogar
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                        El confort que tu hogar <span className="text-blue-600">necesita</span>.
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        Servicio técnico especializado en aire acondicionado y refrigeración.
                        Cuidamos el clima de tu casa para que tú solo te preocupes de disfrutarla.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            className="btn-primary flex items-center gap-2 group"
                        >
                            Solicitar Visita
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#services"
                            className="px-8 py-3 rounded-lg border-2 border-slate-300 text-slate-700 font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all text-center"
                        >
                            Ver Servicios
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            Disponibilidad Inmediata
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            Garantía en todo trabajo
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

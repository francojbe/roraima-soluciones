import React from 'react';
import { ShieldCheck, Clock, HeartHandshake } from 'lucide-react';

const TrustSection = () => {
    return (
        <section id="trust" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                <div className="relative order-2 lg:order-1">
                    {/* Fallback image - Happy customer/Technician */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply md:hidden"></div>
                        <img
                            src="/img-trust.png"
                            alt="Servicio de confianza"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    {/* Badge */}
                    <div className="absolute -bottom-6 -right-6 lg:-right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden sm:block border border-slate-100">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="text-blue-600">
                                <ShieldCheck size={32} />
                            </div>
                            <span className="font-bold text-slate-900 text-lg">Garantía Total</span>
                        </div>
                        <p className="text-slate-500 text-sm">
                            Todos nuestros trabajos cuentan con garantía de satisfacción.
                        </p>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2 block">Por qué elegirnos</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Más que técnicos, somos tus <span className="text-blue-600">aliados en el hogar</span>.
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Ofrecemos un servicio rápido, eficiente y confiable, a un precio justo.
                        Contamos con técnicos altamente calificados para diagnosticar y solucionar
                        problemas en todas las marcas, asegurando que tu hogar vuelva a ser ese espacio cómodo que amas.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Visita Técnica a Domicilio</h4>
                                <p className="text-slate-600 text-sm">Vamos a tu hogar. Coordinamos la visita según tu disponibilidad para minimizar interrupciones.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Garantía y Confianza</h4>
                                <p className="text-slate-600 text-sm">Trabajos garantizados. Nos aseguramos de que tu equipo funcione al 100% antes de irnos.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                                <HeartHandshake size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Expertos en Climatización</h4>
                                <p className="text-slate-600 text-sm">Desde un ruidito molesto hasta una instalación compleja, nuestros expertos tienen la solución.</p>
                            </div>
                        </div>
                    </div>              </div>
            </div>
        </section>
    );
};

export default TrustSection;

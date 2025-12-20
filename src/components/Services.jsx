import React from 'react';
import { Wind, ThermometerSnowflake, Wrench, Settings } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = [
        {
            title: "Aire Acondicionado",
            description: "¿Tu equipo no enfría? Nuestros expertos diagnostican y reparan cualquier falla para que recuperes el confort. Trabajamos con todas las marcas y modelos.",
            icon: Wind,
            image: "/service-1.png",
            features: [
                "Instalación limpia y estética",
                "Reparación de todas las marcas",
                "Carga de gas y fugas",
                "Visitas a domicilio agendadas"
            ]
        },
        {
            title: "Refrigeración Doméstica",
            description: "Servicio especializado para refrigeradores y freezers. Entendemos lo urgente que es, por eso priorizamos tu atención para evitar pérdidas de alimentos.",
            icon: ThermometerSnowflake,
            image: "/service-2.png",
            features: [
                "No enfría o congela",
                "Ruidos extraños",
                "Cambio de termostatos",
                "Repuestos garantizados"
            ]
        },
        {
            title: "Mantenimiento Preventivo",
            description: "Alarga la vida útil de tus equipos. Limpiamos, revisamos y ajustamos tu aire para asegurar su eficiencia y un aire puro en tu hogar.",
            icon: Settings,
            image: "/service-3.png",
            features: [
                "Limpieza profunda y sanitización",
                "Chequeo de presiones y rendimiento",
                "Prevención de malos olores",
                "Ahorro de energía"
            ]
        },
        {
            title: "Proyectos de Hogar",
            description: "¿Construyendo o remodelando? Te asesoramos en el diseño de climatización ideal para tu nueva casa o ampliación.",
            icon: Wrench,
            image: "/service-4.png",
            features: [
                "Asesoría técnica personalizada",
                "Dimensionamiento correcto",
                "Instalaciones en obra",
                "Post-venta responsable"
            ]
        }
    ];

    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Nuestros Servicios</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
                        Soluciones para tu <span className="text-blue-600">tranquilidad</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Nos especializamos en servicios residenciales, entendiendo que tu hogar es tu santuario.
                        Trabajamos con limpieza, puntualidad y respeto.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} delay={index * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Clock, ShieldCheck } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import MagicBento from './MagicBento';

const WhyUs = () => {
    const { content } = useContent();
    const icons = [CheckCircle2, Award, ShieldCheck, Clock];

    return (
        <section id="nosotros" className="py-20 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50 translate-y-32 -translate-x-32" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            {content.why_choose_us.title}
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {content.why_choose_us.description}
                        </p>
                        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-600 mb-8 bg-slate-50 py-4 pr-4 rounded-r-lg">
                            {content.why_choose_us.about_text}
                        </blockquote>
                    </motion.div>

                    <div className="w-full">
                        <MagicBento
                            items={content.why_choose_us.features.map((feature, index) => {
                                const Icon = icons[index];
                                return {
                                    title: feature.title,
                                    description: feature.description,
                                    label: "Característica",
                                    icon: <Icon size={24} />,
                                };
                            })}
                            enableStars={false}
                            enableSpotlight={true}
                            enableBorderGlow={true}
                            enableTilt={true}
                            enableMagnetism={true}
                            clickEffect={true}
                            spotlightRadius={300}
                            glowColor="59, 130, 246"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Star } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import heroBg from '../assets/hero_background.png';
import SplitText from './SplitText';

const Hero = () => {
    const { content } = useContent();

    return (
        <section id="inicio" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={content.hero_content.background_image_url || heroBg}
                    alt="Technical team"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm text-blue-200 text-sm font-semibold mb-6"
                    >
                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        {content.hero_content.expert_badge}
                    </motion.div>

                    <div className="mb-6">
                        <SplitText
                            text={content.hero_content.main_heading}
                            className="text-5xl md:text-7xl font-bold text-white leading-tight"
                            delay={50}
                            duration={0.8}
                            ease="back.out(1.5)"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-50px"
                            textAlign="left"
                            tag="h1"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed"
                    >
                        {content.hero_content.sub_heading}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a href="#contacto" className="btn-primary group">
                            {content.hero_content.cta_buttons[0].text}
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <a href="#servicios" className="btn-secondary group">
                            {content.hero_content.cta_buttons[1].text}
                            <ChevronRight className="ml-1 group-hover:translate-x-0.5 transition-transform" size={20} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

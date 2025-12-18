import React from 'react';
import { motion } from 'framer-motion';
import content from '../content.json';
import whatsappLogo from '../assets/whatsapp_logo.png';

const FloatingWhatsApp = () => {
    return (
        <motion.a
            href={content.contact_info.whatsapp_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Chat on WhatsApp"
        >
            <img src={whatsappLogo} alt="WhatsApp" className="w-16 h-16 drop-shadow-lg" />
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white px-3 py-1 rounded-lg text-sm font-semibold text-slate-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
                ¡Hablemos!
            </span>
        </motion.a>
    );
};

export default FloatingWhatsApp;

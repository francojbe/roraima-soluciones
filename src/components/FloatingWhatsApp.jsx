import React from 'react';
import { MessageCircle } from 'lucide-react';
import whatsappLogo from '../assets/whatsapp_logo.png';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/56993460120"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-105 hover:shadow-green-500/30 animate-in fade-in zoom-in duration-500"
            aria-label="Contactar por WhatsApp"
        >
            <img src={whatsappLogo} alt="WhatsApp" className="w-8 h-8" />
            <span className="font-semibold hidden sm:inline">¿Consultas?</span>
        </a>
    );
};

export default FloatingWhatsApp;

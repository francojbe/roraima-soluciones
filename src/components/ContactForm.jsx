import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, phone, service, message } = formState;
        const text = `Hola Roraima Soluciones! 👋\n\nMe interesa el servicio de: *${service || 'General'}*.\n\n*Mis Datos:*\nNombre: ${name}\nTeléfono: ${phone}\nMensaje: ${message}\n\nQuedo atento a su respuesta.`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/56993460120?text=${encodedText}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Show success state locally
        setIsSubmitted(true);
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-24 bg-blue-50 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Text & Image */}
                    <div className="text-center md:text-left">
                        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2 block">Contáctanos</span>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            ¿Listo para recuperar el confort?
                        </h2>
                        <p className="text-slate-600 mb-8">
                            Déjanos tus datos y te contactaremos en menos de 24 horas para agendar tu visita.
                        </p>
                        {/* Placeholder for the generated image - using the name we requested */}
                        <div className="flex justify-center md:justify-start">
                            <img
                                src="/img-contact.png"
                                alt="Técnico Amigable"
                                className="w-48 h-48 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none'; // Hide if not found yet
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="relative">
                        {isSubmitted ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center animate-in fade-in zoom-in">
                                <CheckCircle size={64} className="text-green-500 mb-4" />
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Mensaje Enviado!</h3>
                                <p className="text-slate-600">
                                    Gracias {formState.name}, nos pondremos en contacto contigo a la brevedad.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-6 text-blue-600 font-medium hover:underline"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className={`space-y-4 ${isSubmitted ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="Ej: Juan Pérez"
                                    value={formState.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Teléfono / WhatsApp</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="+56 9 ..."
                                    value={formState.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Servicio que necesitas</label>
                                <select
                                    id="service"
                                    name="service"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-700"
                                    value={formState.service}
                                    onChange={handleChange}
                                >
                                    <option value="">Selecciona una opción...</option>
                                    <option value="aire-acondicionado">Aire Acondicionado (Instalación/Reparación)</option>
                                    <option value="refrigerador">Refrigerador o Freezer</option>
                                    <option value="mantencion">Mantenimiento General</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">¿En qué podemos ayudarte?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400 resize-none"
                                    placeholder="Cuéntanos brevemente tu problema..."
                                    value={formState.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center gap-2 mt-2"
                            >
                                <Send size={18} />
                                Enviar Solicitud
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

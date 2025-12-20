import React from 'react';
import { Check } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, image, features = [], delay = 0 }) => {
    return (
        <div
            className="glass-card overflow-hidden hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full"
            style={{ animationDelay: `${delay}ms` }}
        >
            {image ? (
                <div className="h-48 overflow-hidden relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-blue-900/10"></div>
                </div>
            ) : (
                <div className="p-8 pb-0">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={32} />
                    </div>
                </div>
            )}

            <div className="p-8 pt-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                <ul className="space-y-3 mt-auto">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-600 text-sm">
                            <Check size={18} className="text-green-500 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceCard;

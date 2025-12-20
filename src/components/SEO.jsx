import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://roraimasoluciones.cl/" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="https://roraimasoluciones.cl/img-hero.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://roraimasoluciones.cl/" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content="https://roraimasoluciones.cl/img-hero.png" />

            {/* Structured Data (Schema.org) for Local SEO */}
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Roraima Soluciones",
                        "image": "https://roraimasoluciones.cl/img-hero.png",
                        "@id": "https://roraimasoluciones.cl",
                        "url": "https://roraimasoluciones.cl",
                        "telephone": "+56993460120",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Santiago",
                            "addressRegion": "Región Metropolitana",
                            "addressCountry": "CL"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": -33.4489,
                            "longitude": -70.6693
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday"
                            ],
                            "opens": "09:00",
                            "closes": "19:00"
                        },
                        "sameAs": [
                            "https://instagram.com/roraimasoluciones", 
                            "https://facebook.com/roraimasoluciones"
                        ],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Servicios de Climatización y Refrigeración",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Instalación y Reparación de Aire Acondicionado"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Servicio Técnico de Refrigeradores"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Mantenimiento Preventivo de Climatización"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Proyectos de Ventilación y Hogar"
                                    }
                                }
                            ]
                        }
                    }
                `}
            </script>
        </Helmet>
    );
};

export default SEO;

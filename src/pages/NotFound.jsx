import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <Layout>
            <SEO
                title="Página no encontrada | Roraima Soluciones"
                description="La página que buscas no existe. Vuelve al inicio para encontrar servicios de aire acondicionado y refrigeración."
                keywords="error 404, página no encontrada"
            />
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-slate-50">
                <h1 className="text-6xl font-extrabold text-blue-600 mb-6">404</h1>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Página no encontrada</h2>
                <p className="text-lg text-slate-600 mb-8 max-w-md">
                    Lo sentimos, la página que estás buscando no existe o ha sido movida.
                </p>
                <Link
                    to="/"
                    className="btn-primary"
                >
                    Volver al Inicio
                </Link>
            </div>
        </Layout>
    );
};

export default NotFound;

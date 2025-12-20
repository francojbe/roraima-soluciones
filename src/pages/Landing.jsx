import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TrustSection from '../components/TrustSection';
import ContactForm from '../components/ContactForm';
import Contact from '../components/Contact';
import { useContent } from '../context/ContentContext';

const Landing = () => {
    const { content } = useContent();

    return (
        <Layout>
            <SEO
                title={content.site_info.title}
                description={content.site_info.description}
                keywords={content.site_info.keywords}
            />
            <Hero />
            <Services />
            <TrustSection />
            <ContactForm />
            <Contact />
        </Layout>
    );
};

export default Landing;

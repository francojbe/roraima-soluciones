import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
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
            <WhyUs />
            <Testimonials />
            <Contact />
        </Layout>
    );
};

export default Landing;

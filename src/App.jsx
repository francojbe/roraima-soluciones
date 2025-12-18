import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import SEO from './components/SEO';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import content from './content.json';

function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;

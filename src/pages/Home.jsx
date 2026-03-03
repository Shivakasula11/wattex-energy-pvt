import React from 'react';
import SolarImpactSection from '../components/sections/SolarImpactSection';
import ConsultationForm from '../components/sections/ConsultationForm';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ParallaxSection from '../components/ui/ParallaxSection';
import SolarProcessSection from '../components/sections/SolarProcessSection';
import ServicesGrid from '../components/sections/ServicesGrid';

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section id="home" className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-solar-deep via-solar-deep/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-10 animate-slide-left">
            <h1 className="text-6xl md:text-8xl font-black text-white font-heading leading-[1.1] tracking-tighter">
              Energy for a<br />
              <span className="text-solar-primary uppercase">Sustainable Future</span>.
            </h1>
            <p className="text-white/70 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed">
              Industrial-grade renewable energy solutions engineered for zero-carbon impact and maximum economic yield.
            </p>
          </div>
        </div>
      </section>

      <SolarImpactSection />
      <ConsultationForm />
      <WhyChooseUsSection />

      <ParallaxSection
        image="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1920"
        title="Urban Integration"
        subtitle="Seamlessly blending high-efficiency solar technology into modern architecture and city infrastructure."
      />

      <SolarProcessSection />
      <ServicesGrid />
    </>
  );
};

export default Home;

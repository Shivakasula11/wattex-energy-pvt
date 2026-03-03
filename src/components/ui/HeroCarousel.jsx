import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: 'https://media.istockphoto.com/id/1175256554/photo/young-engineers-who-are-expert-in-solar-power-generation-systems-alternative-electricity.jpg?s=1024x1024&w=is&k=20&c=kQqqFtG2LLrE3oXHOczh0Ar-xwJdzRzV-4AUTTEO798=',
    title: 'Energy Freedom For Your Home',
    subtitle: 'Eliminate your electricity bills with premium solar installations designed for the modern lifestyle.',
    highlight: 'For Your Home',
  },
  {
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1920',
    title: 'Smart Savings Clean Living',
    subtitle: 'Unlock government incentives up to 40% on residential rooftop installations and save for decades.',
    highlight: 'Clean Living',
  },
  {
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1920',
    title: 'Power Your Future Today',
    subtitle: 'Track your generation and consumption in real-time through our advanced smart energy monitoring app.',
    highlight: 'Future Today',
  },
  {
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920',
    title: 'Sustainable Lifestyle Choice',
    subtitle: 'Solar-equipped homes are valued higher and sell faster in the modern real estate market.',
    highlight: 'Lifestyle Choice',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img src={slide.image} className="w-full h-full object-cover" alt={slide.title} />
          <div ></div>
          <div className="container mx-auto px-6 relative h-full flex items-center">
            <div
              className={`max-w-4xl space-y-8 transition-all duration-1000 ${
                index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
            >
              <span className="bg-solar-primary text-white px-6 py-2 rounded-lg font-black uppercase tracking-[0.3em] text-[10px]">
                Residential Rooftop
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white font-heading leading-tight tracking-tighter uppercase">
                {slide.title.split(slide.highlight)[0]}
                <span className="text-solar-primary">{slide.highlight}</span>
                {slide.title.split(slide.highlight)[1]}
              </h1>
              <p className="text-white/70 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-solar-primary text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-rose-600 transition-all"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Controls */}
      <div className="absolute bottom-10 left-6 z-20 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              index === currentSlide ? 'w-12 bg-solar-primary' : 'w-6 bg-white/20'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;

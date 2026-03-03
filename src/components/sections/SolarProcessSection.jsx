import React from 'react';

const steps = [
  { icon: 'fa-user-tie', title: 'Free in-home consultation', description: 'A Wattex consultant will survey your home and answer all your questions.' },
  { icon: 'fa-file-lines', title: 'Personalised solar proposal', description: 'A custom proposal based on your specific rooftop area and energy needs.' },
  { icon: 'fa-shield-halved', title: 'Paperwork and subsidy assistance', description: 'End-to-end management of all government paperwork and approvals.' },
  { icon: 'fa-truck-fast', title: 'Professional & safe installation', description: 'Timely, clean, and professional installation by certified engineers.' },
  { icon: 'fa-tower-broadcast', title: 'Connection to the grid', description: 'Coordination with local utilities for grid connection and net metering.' },
  { icon: 'fa-house-bolt', title: 'Power on your new system', description: 'Switch on to enjoy reduced electricity bills immediately!' },
];

const SolarProcessSection = () => (
  <section id="process" className="py-32 bg-solar-deep text-white scroll-mt-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-black mb-24 tracking-tight">The solar switch made simple</h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-solar-sky/30 -translate-x-1/2 hidden md:block"></div>
        <div className="space-y-24 md:space-y-32">
          {steps.map((step, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-[45%] text-center md:text-left">
                <div className={`space-y-4 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-2xl font-black">{step.title}</h3>
                  <p className="text-white/60 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">{step.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
                <div className="w-4 h-4 bg-solar-sky rounded-full border-4 border-solar-deep shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-solar-sky text-2xl">
                  <i className={`fas ${step.icon}`}></i>
                </div>
              </div>
              <div className="w-full md:w-[45%] hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SolarProcessSection;

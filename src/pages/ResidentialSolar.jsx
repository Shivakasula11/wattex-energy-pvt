import React from 'react';
import { motion } from 'framer-motion';
import HeroCarousel from '../components/ui/HeroCarousel';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ParallaxSection from '../components/ui/ParallaxSection';
import SolarFaqSection from '../components/sections/SolarFaqSection';

const ResidentialSolar = () => (
  <div className="animate-fade-in bg-white">
    <HeroCarousel />

    {/* Benefits */}
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-[4rem] overflow-hidden shadow-4xl aspect-square">
              <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Homeowner Solar" />
            </div>
            <div className="absolute -top-10 -right-10 bg-white p-10 rounded-[3rem] shadow-3xl max-w-xs space-y-4 hidden md:block border border-slate-100">
              <div className="text-4xl font-black text-solar-sky">₹0</div>
              <p className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">Monthly Electricity Bill Potential</p>
            </div>
          </div>
          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Why Switch?</span>
              <h2 className="text-5xl font-black text-solar-deep tracking-tight">Clean Energy, Pure Savings</h2>
              <p className="text-slate-500 text-xl leading-relaxed font-medium">
                Our residential systems are engineered for maximum efficiency, ensuring your home runs on clean energy even during peak hours.
              </p>
            </div>
            <div className="grid gap-10">
              {[
                { title: 'Subsidies & Rebates', desc: 'Unlock government incentives up to 40% on residential rooftop installations.', icon: 'fa-hand-holding-dollar' },
                { title: 'Smart Energy Monitoring', desc: 'Track your generation and consumption in real-time through our mobile app.', icon: 'fa-mobile-screen' },
                { title: 'Increase Property Value', desc: 'Solar-equipped homes are valued higher and sell faster in the modern real estate market.', icon: 'fa-arrow-trend-up' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 bg-solar-sky/10 rounded-2xl flex items-center justify-center text-solar-sky shrink-0">
                    <i className={`fas ${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-solar-deep mb-2">{item.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Wattex */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center text-solar-deep mb-20 tracking-tight">
          Why choose Wattex for your solar installation
        </h2>
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 max-w-6xl mx-auto">
          {[
            {
              icon: 'fa-calculator',
              iconBg: 'bg-sky-50',
              iconColor: 'text-sky-500',
              badgeIcon: 'fa-indian-rupee-sign',
              badgeBg: 'bg-emerald-400',
              title: 'Easy Financing Plans',
              description: 'Switching to solar made easy & affordable with our EMI plans'
            },
            {
              icon: 'fa-wind',
              iconBg: 'bg-sky-50',
              iconColor: 'text-sky-500',
              title: 'Cyclone-Proof, Safe Rooftop Solar',
              description: 'Safe installations that can handle scary storms and winds up to 170 kmph speeds'
            },
            {
              icon: 'fa-droplet-slash',
              iconBg: 'bg-sky-50',
              iconColor: 'text-sky-500',
              badgeIcon: 'fa-circle-check',
              badgeBg: 'bg-sky-400',
              title: '₹1 Lakh Guarantee Against Water Leakage',
              description: 'Systems secured to your roof with "chemical anchoring" to prevent water leakage on your roof'
            },
            {
              icon: 'fa-gear',
              iconBg: 'bg-sky-50',
              iconColor: 'text-sky-500',
              title: '5-Year Professional Maintenance Included',
              description: 'Quarterly deep cleaning, health checks & repairs included'
            }
          ].map((f, idx) => (
            <div key={idx} className="flex items-start gap-6 group">
              <div className="relative shrink-0">
                <div className={`w-16 h-16 ${f.iconBg} rounded-2xl flex items-center justify-center ${f.iconColor} text-3xl transition-transform group-hover:scale-110`}>
                  <i className={`fas ${f.icon}`}></i>
                </div>
                {f.badgeIcon && (
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${f.badgeBg} rounded-full flex items-center justify-center text-white text-[10px] shadow-md`}>
                    <i className={`fas ${f.badgeIcon}`}></i>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="bg-solar-primary hover:bg-rose-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-rose-200"
          >
            Know More
          </button>
        </div>
      </div>
    </section>

    {/* Parallax Section */}
    <section
      className="relative h-[60vh] md:h-[70vh] bg-fixed bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920)' }}
    >
      <div className="absolute inset-0 bg-solar-deep/60 backdrop-blur-[2px]"></div>
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl space-y-6 animate-fade-in">
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            Powering Homes <br /><span className="text-solar-primary">Across India</span>
          </h2>
          <div className="w-24 h-1 bg-solar-primary mx-auto"></div>
          <p className="text-white/80 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
            Join thousands of homeowners who have already made the switch to clean, affordable solar energy with Wattex.
          </p>
          <div className="flex flex-wrap justify-center gap-12 pt-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white">10,000+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">Happy Homes</div>
            </div>
            <div className="w-px h-16 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white">50MW+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">Installed Capacity</div>
            </div>
            <div className="w-px h-16 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white">25 Yrs</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">Panel Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Smart Ecosystem */}
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Future-Ready Home</span>
          <h2 className="text-5xl md:text-7xl font-black text-solar-deep tracking-tight">Smart Energy Ecosystem</h2>
          <p className="text-slate-500 text-xl font-medium">Beyond panels. We build intelligent energy networks that think, adapt, and save for you.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { title: 'AI Energy Optimization', desc: 'Our AI algorithms predict weather patterns and household usage to optimize energy storage and consumption.', icon: 'fa-brain', color: 'bg-indigo-500' },
            { title: 'Battery Backup 2.0', desc: 'Seamless transition to stored energy during grid outages. Power your entire home without a flicker.', icon: 'fa-battery-full', color: 'bg-emerald-500' },
            { title: 'EV Integration', desc: 'Charge your electric vehicle directly from your roof. The ultimate synergy of clean energy and mobility.', icon: 'fa-car-side', color: 'bg-solar-sky' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ perspective: '1000px' }}
              className="relative group"
            >
              <div className="bg-slate-50 p-12 rounded-[3rem] h-full border border-slate-100 shadow-xl group-hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center space-y-8">
                <div className={`w-20 h-20 ${item.color} rounded-[1.5rem] flex items-center justify-center text-white text-3xl shadow-lg transform group-hover:rotate-12 transition-transform`}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-3xl font-black text-solar-deep">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                <div className="pt-4">
                  <div className="w-12 h-1 bg-solar-primary/20 rounded-full mx-auto group-hover:w-24 group-hover:bg-solar-primary transition-all duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* The Solar Switch Made Simple - Timeline */}
    <section className="py-32 bg-solar-deep text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">The solar switch made simple</h2>
          <p className="text-white/50 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Switching to solar can seem daunting, but we've got you covered. Here's how it works
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/80 via-cyan-400/40 to-cyan-400/80 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-20 md:space-y-28">
            {[
              {
                icon: 'fa-user-tie',
                title: 'Free in-home consultation',
                desc: 'A Wattex consultant will survey your home, answer your questions and generate a custom digital design of what the solar system will look like on your roof.',
                cta: 'Schedule a free consultation',
                side: 'left'
              },
              {
                icon: 'fa-file-lines',
                title: 'Personalised solar proposal & dedicated manager',
                desc: 'Based on your requirements, our team will create a custom proposal for you. A dedicated manager is also assigned to answer your queries and keep you updated on the project.',
                side: 'right'
              },
              {
                icon: 'fa-shield-halved',
                title: 'Paperwork and subsidy assistance',
                desc: 'End-to-end paperwork management by us for hassle-free coordination with the local discom and securing subsidy.',
                side: 'left'
              },
              {
                icon: 'fa-truck-fast',
                title: 'Step-by-step professional & safe installation',
                desc: 'Once you submit the advance amount, your rooftop system will arrive in stylish delivery vans and installed in a timely, clean and professional manner.',
                side: 'right'
              },
              {
                icon: 'fa-tower-broadcast',
                title: 'Connection to the grid',
                desc: 'We coordinate with the discom to connect your system to the power grid and install a new electricity meter.',
                side: 'left'
              },
              {
                icon: 'fa-house-signal',
                title: 'Power on your new system',
                desc: 'Switch on your system to enjoy reduced electricity bills and an energy-independent future!',
                side: 'right'
              },
              {
                icon: 'fa-broom',
                title: 'Deep cleaning and maintenance',
                desc: "We'll call you to schedule quarterly deep cleaning and preventive health checks of your system for 5 years.",
                side: 'left'
              }
            ].map((step, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">

                {/* Left Content */}
                <div className={`w-full md:w-[45%] ${step.side === 'left' ? 'md:pr-16' : 'md:pr-16 md:order-1 md:invisible'}`}>
                  {step.side === 'left' && (
                    <div className="text-center md:text-right space-y-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 border border-cyan-400/30 rounded-2xl text-cyan-400 text-2xl md:ml-auto">
                        <i className={`fas ${step.icon}`}></i>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black leading-tight">{step.title}</h3>
                      <p className="text-white/50 font-medium leading-relaxed text-sm">{step.desc}</p>
                      {step.cta && (
                        <button
                          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                          className="mt-2 bg-cyan-400 hover:bg-cyan-300 text-solar-deep px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all shadow-lg shadow-cyan-400/20"
                        >
                          {step.cta}
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.6)] border-4 border-solar-deep"></div>
                </div>

                {/* Mobile Icon (shown only on mobile for right-side items) */}
                <div className="md:hidden flex justify-center">
                  <div className="w-14 h-14 bg-white/10 border border-cyan-400/30 rounded-2xl text-cyan-400 text-2xl flex items-center justify-center">
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                </div>

                {/* Right Content */}
                <div className={`w-full md:w-[45%] ${step.side === 'right' ? 'md:pl-16 md:order-2' : 'md:pl-16 md:order-2 md:invisible'}`}>
                  {step.side === 'right' && (
                    <div className="text-center md:text-left space-y-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 border border-cyan-400/30 rounded-2xl text-cyan-400 text-2xl">
                        <i className={`fas ${step.icon}`}></i>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black leading-tight">{step.title}</h3>
                      <p className="text-white/50 font-medium leading-relaxed text-sm">{step.desc}</p>
                      {step.cta && (
                        <button
                          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                          className="mt-2 bg-cyan-400 hover:bg-cyan-300 text-solar-deep px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all shadow-lg shadow-cyan-400/20"
                        >
                          {step.cta}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <SolarFaqSection />

  </div>
);

export default ResidentialSolar;
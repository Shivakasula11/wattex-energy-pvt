import React from 'react';
import { useNavigate } from 'react-router-dom';
import CommercialFaqSection from '../components/sections/CommercialFaqSection';

const CommercialSolar = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Commercial Solar" />
          <div className="absolute inset-0 bg-gradient-to-r from-solar-deep via-solar-deep/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-8">
            <span className="bg-solar-primary text-white px-6 py-2 rounded-lg font-black uppercase tracking-[0.3em] text-[10px]">Commercial & Industrial</span>
            <h1 className="text-5xl md:text-8xl font-black text-white font-heading leading-tight tracking-tighter uppercase">
              Future-Proof Your <br /><span className="text-solar-primary">Enterprise Energy</span>.
            </h1>
            <p className="text-white/70 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
              Industrial-grade solar infrastructure engineered for high-performance yields and radical cost reduction.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits (Existing) */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Strategic Advantages</span>
                <h2 className="text-5xl font-black text-solar-deep tracking-tight">The Business Case for Solar</h2>
                <p className="text-slate-500 text-xl leading-relaxed font-medium">
                  For commercial entities, solar is not just an environmental choice—it's a high-yield financial investment with predictable returns.
                </p>
              </div>
              <div className="grid gap-8">
                {[
                  { title: 'Accelerated Depreciation', desc: 'Benefit from massive tax savings in the first year of installation through commercial depreciation laws.', icon: 'fa-chart-line' },
                  { title: 'Operational Cost Reduction', desc: 'Hedge against rising electricity tariffs with a fixed energy cost for the next 25 years.', icon: 'fa-coins' },
                  { title: 'ESG & Corporate Identity', desc: 'Meet global sustainability standards and enhance your brand value with visible green energy.', icon: 'fa-leaf' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center text-solar-primary shrink-0 transition-transform group-hover:scale-110">
                      <i className={`fas ${item.icon} text-xl`}></i>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-solar-deep">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-4xl aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Industrial Installation" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-3xl max-w-xs space-y-4 hidden md:block">
                <div className="text-4xl font-black text-solar-primary">40%</div>
                <p className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">Average First Year Tax Savings through depreciation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ★ NEW — Impact Stats Counter */}
      <section className="py-24 bg-solar-deep text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-solar-primary font-black uppercase tracking-[0.3em] text-[10px]">Proven Track Record</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tight">Numbers That Define Trust</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: '500+', label: 'Commercial Clients', icon: 'fa-building' },
              { value: '₹200Cr+', label: 'Energy Savings Delivered', icon: 'fa-indian-rupee-sign' },
              { value: '150MW', label: 'Installed Capacity', icon: 'fa-solar-panel' },
              { value: '99.8%', label: 'System Uptime', icon: 'fa-signal' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-solar-primary text-2xl mx-auto mb-6 group-hover:bg-solar-primary group-hover:text-white transition-all duration-500">
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <div className="text-4xl md:text-5xl font-black tracking-tight">{stat.value}</div>
                <div className="text-white/40 font-bold uppercase tracking-widest text-[10px] mt-3">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ★ NEW — Industries We Serve */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Sector Expertise</span>
            <h2 className="text-5xl md:text-6xl font-black text-solar-deep tracking-tight">Industries We Power</h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">Tailored solar solutions engineered for the unique energy demands of every industry.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'fa-industry', name: 'Manufacturing', desc: 'Heavy-duty systems for factories & assembly lines', color: 'bg-indigo-50 text-indigo-500' },
              { icon: 'fa-hospital', name: 'Healthcare', desc: 'Uninterrupted power for hospitals & clinics', color: 'bg-rose-50 text-rose-500' },
              { icon: 'fa-hotel', name: 'Hospitality', desc: 'Resort & hotel energy independence', color: 'bg-amber-50 text-amber-500' },
              { icon: 'fa-store', name: 'Retail & Malls', desc: 'Large rooftop commercial installations', color: 'bg-sky-50 text-sky-500' },
              { icon: 'fa-building-columns', name: 'Real Estate', desc: 'Builder group tie-ups & township solar', color: 'bg-emerald-50 text-emerald-500' },
              { icon: 'fa-wheat-awn', name: 'Agri-Business', desc: 'Cold storage, processing & farm solar', color: 'bg-lime-50 text-lime-500' },
              { icon: 'fa-warehouse', name: 'Warehousing', desc: 'Logistics hub & distribution centres', color: 'bg-purple-50 text-purple-500' },
              { icon: 'fa-graduation-cap', name: 'Education', desc: 'Campus-wide solar grids for institutions', color: 'bg-blue-50 text-blue-500' },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-lg font-black text-solar-deep mb-2">{item.name}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ★ NEW — Parallax Break */}
      <section
        className="relative h-[60vh] md:h-[70vh] bg-fixed bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1920)' }}
      >
        <div className="absolute inset-0 bg-solar-deep/70 backdrop-blur-[2px]"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Powering India's <br /><span className="text-solar-primary">Industrial Revolution</span>
            </h2>
            <div className="w-24 h-1 bg-solar-primary mx-auto"></div>
            <p className="text-white/80 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
              From 50kW rooftops to 50MW ground-mount plants — we engineer solar at every scale.
            </p>
            <div className="flex flex-wrap justify-center gap-12 pt-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white">12+</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">States Covered</div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white">50kW–50MW</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">System Range</div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white">4-8 Wks</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">Avg. Installation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ★ NEW — How It Works (4-Step Process) */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Seamless Process</span>
            <h2 className="text-5xl md:text-6xl font-black text-solar-deep tracking-tight">From Inquiry to Energy in 4 Steps</h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">Our streamlined process makes the transition to solar effortless for your business.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connector Line */}
            <div className="absolute top-16 left-[10%] right-[10%] h-[2px] bg-slate-200 hidden lg:block"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { num: '01', icon: 'fa-clipboard-check', title: 'Site Survey', desc: 'Free technical audit of your facility by our certified engineers to assess roof area, load capacity, and solar potential.', color: 'border-solar-primary' },
                { num: '02', icon: 'fa-drafting-compass', title: 'Custom Design', desc: 'A tailored solar system blueprint engineered specifically for your energy profile, roof layout, and business goals.', color: 'border-solar-sky' },
                { num: '03', icon: 'fa-helmet-safety', title: 'Installation', desc: 'Professional deployment by our expert crew in 4-8 weeks with minimal disruption to your daily operations.', color: 'border-amber-400' },
                { num: '04', icon: 'fa-plug-circle-check', title: 'Grid Connect', desc: 'Complete net metering setup, DISCOM coordination, and system commissioning. You start saving from day one.', color: 'border-emerald-400' },
              ].map((step, i) => (
                <div key={i} className="relative text-center group">
                  <div className={`w-32 h-32 mx-auto mb-8 rounded-full bg-white border-4 ${step.color} shadow-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                    <i className={`fas ${step.icon} text-4xl text-solar-deep group-hover:text-solar-primary transition-colors`}></i>
                  </div>
                  <div className="text-solar-primary font-black text-sm tracking-widest mb-3">{step.num}</div>
                  <h3 className="text-xl font-black text-solar-deep mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <button
                onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                className="bg-solar-primary hover:bg-rose-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-rose-200 hover:-translate-y-1"
              >
                <i className="fas fa-calendar-check mr-3"></i>Book Your Free Site Survey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ★ NEW — ROI Snapshot */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Financial Impact</span>
                <h2 className="text-5xl md:text-6xl font-black text-solar-deep tracking-tight">ROI That Speaks <br />for Itself</h2>
                <p className="text-slate-500 text-xl leading-relaxed font-medium">
                  See how a typical 100kW commercial installation pays for itself and generates substantial returns over its 25-year lifespan.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Payback Period', value: '3.5 Years', icon: 'fa-clock-rotate-left', accent: true },
                  { label: 'Annual Savings', value: '₹12 Lakhs', icon: 'fa-piggy-bank', accent: true },
                  { label: '25-Year Returns', value: '₹3.2 Crore', icon: 'fa-chart-line', accent: false },
                  { label: 'Carbon Offset', value: '125 Tons/yr', icon: 'fa-leaf', accent: false },
                ].map((item, i) => (
                  <div key={i} className={`p-8 rounded-[2rem] border ${item.accent ? 'bg-rose-50/50 border-rose-100' : 'bg-slate-50 border-slate-100'} group hover:shadow-xl transition-all duration-500`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4 ${item.accent ? 'bg-solar-primary/10 text-solar-primary' : 'bg-slate-100 text-slate-400'}`}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div className={`text-3xl font-black tracking-tight mb-1 ${item.accent ? 'text-solar-primary' : 'text-solar-deep'}`}>{item.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual — Premium ROI Dashboard */}
            <style>{`
              @keyframes ringDraw { from { stroke-dashoffset: 690; } to { stroke-dashoffset: 0; } }
              @keyframes ringDrawSmall { from { stroke-dashoffset: 553; } to { stroke-dashoffset: 0; } }
              @keyframes floatUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
              @keyframes floatBadge { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
              @keyframes scaleIn { from { opacity: 0; transform: scale(0.7); } to { opacity: 1; transform: scale(1); } }
              @keyframes glowPulse { 0%,100% { opacity: 0.1; } 50% { opacity: 0.25; } }
              @keyframes slideRight { from { opacity: 0; transform: translateX(-16px); } to { opacity: 1; transform: translateX(0); } }
              .ring-anim { animation: ringDraw 2s ease-out both; }
              .ring-anim-small { animation: ringDrawSmall 2s ease-out 0.4s both; }
              .float-up-1 { animation: floatUp 0.6s ease-out 0.8s both; }
              .float-up-2 { animation: floatUp 0.6s ease-out 1s both; }
              .float-up-3 { animation: floatUp 0.6s ease-out 1.2s both; }
              .float-badge { animation: floatBadge 4s ease-in-out infinite; }
              .float-badge-2 { animation: floatBadge 4s ease-in-out 1s infinite; }
              .float-badge-3 { animation: floatBadge 4s ease-in-out 2s infinite; }
              .scale-in-badge { animation: scaleIn 0.5s ease-out 1.4s both; }
              .center-anim { animation: floatUp 0.8s ease-out 0.6s both; }
              .glow-pulse { animation: glowPulse 3s ease-in-out infinite; }
            `}</style>
            <div className="relative">
              <div className="bg-solar-deep rounded-[3rem] p-8 lg:p-12 shadow-2xl overflow-hidden relative">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-solar-primary/10 blur-[80px] rounded-full glow-pulse"></div>
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-sky-500/8 blur-[60px] rounded-full"></div>

                <div className="flex items-center justify-between mb-10 relative z-10">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Financial Performance</div>
                    <div className="text-white font-extrabold font-heading text-xl">100kW Commercial System</div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold text-emerald-400">Live Tracking</span>
                  </div>
                </div>

                <div className="relative flex items-center justify-center py-6">
                  <svg width="260" height="260" viewBox="0 0 260 260" className="transform -rotate-90">
                    <circle cx="130" cy="130" r="110" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="16" />
                    <circle cx="130" cy="130" r="110" fill="none" stroke="url(#savingsGrad)" strokeWidth="16" strokeLinecap="round" className="ring-anim" strokeDasharray={String(2 * Math.PI * 110 * 0.86) + ' ' + String(2 * Math.PI * 110 * 0.14)} />
                    <circle cx="130" cy="130" r="88" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                    <circle cx="130" cy="130" r="88" fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round" className="ring-anim-small" strokeDasharray={String(2 * Math.PI * 88 * 0.14) + ' ' + String(2 * Math.PI * 88 * 0.86)} />
                    <defs>
                      <linearGradient id="savingsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f43f5e" />
                        <stop offset="50%" stopColor="#fb7185" />
                        <stop offset="100%" stopColor="#f43f5e" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center center-anim">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Total Returns</div>
                    <div className="text-5xl font-black text-white tracking-tight leading-none mb-1">&#8377;3.2<span className="text-2xl text-white/60 ml-1">Cr</span></div>
                    <div className="text-[10px] font-bold text-solar-primary">Over 25 Years</div>
                  </div>

                  <div className="absolute top-2 right-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-3 text-center float-up-1 float-badge">
                    <div className="text-lg font-black text-white leading-none">&#8377;12L</div>
                    <div className="text-[8px] font-bold text-white/30 uppercase tracking-wider mt-1">Per Year</div>
                  </div>
                  <div className="absolute bottom-2 left-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl px-4 py-3 text-center float-up-2 float-badge-2">
                    <div className="text-lg font-black text-emerald-400 leading-none">3.5 Yr</div>
                    <div className="text-[8px] font-bold text-emerald-400/50 uppercase tracking-wider mt-1">Payback</div>
                  </div>
                  <div className="absolute bottom-2 right-4 bg-sky-500/10 border border-sky-500/20 rounded-2xl px-4 py-3 text-center float-up-3 float-badge-3">
                    <div className="text-lg font-black text-sky-400 leading-none">125T</div>
                    <div className="text-[8px] font-bold text-sky-400/50 uppercase tracking-wider mt-1">CO2/Year</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 relative z-10">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-white/20 mb-4">Savings Milestones</div>
                  <div className="flex gap-3">
                    {[
                      { yr: 'Y1', amt: '₹12L', done: true },
                      { yr: 'Y5', amt: '₹60L', done: true },
                      { yr: 'Y10', amt: '₹1.2Cr', done: true },
                      { yr: 'Y15', amt: '₹1.8Cr', done: false },
                      { yr: 'Y25', amt: '₹3.2Cr', done: false },
                    ].map((m, i) => (
                      <div key={i} className={`flex-1 rounded-xl p-3 text-center border ${m.done ? 'bg-solar-primary/5 border-solar-primary/15' : 'bg-white/[0.02] border-white/5'}`}>
                        <div className={`text-sm font-black ${m.done ? 'text-solar-primary' : 'text-white/40'}`}>{m.amt}</div>
                        <div className={`text-[8px] font-bold uppercase tracking-wider mt-0.5 ${m.done ? 'text-solar-primary/50' : 'text-white/20'}`}>{m.yr}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-solar-primary"></div>
                    <span className="text-[10px] font-bold text-white/30">Cumulative Savings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-[10px] font-bold text-white/30">Payback Period</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-solar-primary p-7 rounded-[2rem] shadow-2xl shadow-rose-500/30 hidden lg:block scale-in-badge">
                <div className="text-3xl font-black text-white mb-1">26x</div>
                <p className="text-white/70 font-bold uppercase tracking-widest text-[8px]">Return on<br />Investment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio (Existing) */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Our Projects</span>
            <h2 className="text-5xl font-black text-solar-deep tracking-tight">Commercial Landmarks</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800', title: 'Tech Park Solar Carport', loc: 'Bangalore, India', size: '2.5 MW' },
              { img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800', title: 'Textile Factory Rooftop', loc: 'Surat, India', size: '1.2 MW' },
              { img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800', title: 'Cold Storage Hybrid System', loc: 'Nashik, India', size: '800 kW' },
            ].map((proj, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="rounded-[3rem] overflow-hidden aspect-[4/3] mb-8 shadow-2xl relative">
                  <img src={proj.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={proj.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                    <div className="text-white space-y-1">
                      <p className="font-black uppercase tracking-widest text-[10px] text-solar-sky">{proj.size}</p>
                      <p className="font-bold text-lg">{proj.loc}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-solar-deep group-hover:text-solar-primary transition-colors">{proj.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ★ NEW — Client Testimonials */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Trusted by Industry Leaders</span>
            <h2 className="text-5xl md:text-6xl font-black text-solar-deep tracking-tight">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Krishnamurthy',
                role: 'COO, TechPark Solutions',
                quote: 'ROI exceeded our projections by 15%. The Wattex team delivered a world-class 2.5MW installation that transformed our energy costs completely.',
                image: 'https://picsum.photos/seed/rajesh/200/200',
                rating: 5
              },
              {
                name: 'Sunita Menon',
                role: 'Director, GreenTextiles Ltd',
                quote: 'Energy costs dropped 70% in year one. Their engineering precision and project management is unmatched in the industry.',
                image: 'https://picsum.photos/seed/sunita/200/200',
                rating: 5
              },
              {
                name: 'Amit Patel',
                role: 'CFO, ColdChain Corporation',
                quote: 'Best infrastructure investment we have made in a decade. The hybrid system handles our 24/7 cold storage needs flawlessly.',
                image: 'https://picsum.photos/seed/amit/200/200',
                rating: 5
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 lg:p-12 rounded-[3rem] border border-slate-100 shadow-xl group hover:shadow-2xl transition-all duration-500 relative">
                <div className="absolute top-8 right-10 text-slate-100 group-hover:text-solar-primary/10 transition-colors">
                  <i className="fas fa-quote-right text-5xl"></i>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-black text-solar-deep">{t.name}</h4>
                    <p className="text-solar-primary font-bold uppercase tracking-widest text-[9px]">{t.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 text-solar-primary mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <i key={j} className="fas fa-star text-xs"></i>
                  ))}
                </div>

                <p className="text-slate-600 text-lg font-medium italic leading-relaxed relative z-10">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ★ NEW — Commercial FAQ */}
      <CommercialFaqSection />

      {/* CTA (Existing) */}
      <section className="py-24 bg-solar-deep">
        <div className="container mx-auto px-6 text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Ready to Transition Your <br /> <span className="text-solar-sky">Corporate Infrastructure?</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto font-medium">
            Schedule a technical feasibility study for your commercial property today.
          </p>
          <button
            onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
            className="bg-solar-primary hover:bg-rose-600 text-white px-14 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-rose-500/20 hover:-translate-y-1"
          >
            <i className="fas fa-paper-plane mr-3"></i>Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default CommercialSolar;
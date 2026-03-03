import React from 'react';
import { useNavigate } from 'react-router-dom';
import OffGridFaqSection from '../components/sections/OffGridFaqSection';

const OffGridSolar = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in bg-solar-deep text-white">

      {/* ── 1. HERO (Existing) ── */}
      <section className="relative h-[90vh] flex items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Off Grid Solar" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-solar-primary"></div>
              <span className="text-solar-primary font-black uppercase tracking-[0.4em] text-[10px]">Autonomous Energy Systems</span>
            </div>
            <h1 className="text-6xl md:text-[10rem] font-black font-heading leading-[0.85] tracking-tighter uppercase">
              Pure <br /><span className="text-solar-primary">Autonomy</span>.
            </h1>
            <p className="text-white/50 text-xl md:text-3xl max-w-2xl font-light leading-tight">
              Engineered for the most demanding remote environments. Complete energy independence without compromise.
            </p>
            <div className="flex flex-wrap gap-8 pt-8">
              {[
                { val: '100%', label: 'Grid Independent' },
                { val: '24/7', label: 'Power Availability' },
                { val: 'LiFePO4', label: 'Storage Tech' },
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="w-px h-16 bg-white/10"></div>}
                  <div className="space-y-2">
                    <div className="text-4xl font-black text-white">{stat.val}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/30">{stat.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-white/20"></i>
        </div>
      </section>

      {/* ── 2. SYSTEM ARCHITECTURE (Existing) ── */}
      <section className="py-32 bg-indigo-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-4xl font-black tracking-tight uppercase">System Architecture</h2>
                <p className="text-white/40 text-lg leading-relaxed max-w-xl">
                  Our off-grid solutions are built on a modular, redundant architecture that ensures power delivery even in the event of component failure.
                </p>
              </div>
              <div className="grid gap-12">
                {[
                  { title: 'Smart Inverter/Charger', desc: 'Industrial-grade pure sine wave inverters with integrated MPPT charge controllers for maximum efficiency.', icon: 'fa-microchip' },
                  { title: 'High-Density Storage', desc: 'Scalable Lithium Iron Phosphate (LFP) battery banks with 10,000+ cycle life and advanced BMS.', icon: 'fa-battery-full' },
                  { title: 'Remote Telemetry', desc: 'Satellite-linked monitoring systems providing real-time performance data and predictive maintenance alerts.', icon: 'fa-satellite-dish' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-solar-primary text-2xl shrink-0 group-hover:bg-solar-primary group-hover:text-white transition-all duration-500">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold uppercase tracking-tight">{item.title}</h4>
                      <p className="text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Status Panel */}
            <div className="relative">
              <div className="aspect-square bg-white/5 border border-white/10 rounded-[4rem] p-12 flex flex-col justify-between overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-solar-primary/10 blur-[100px] rounded-full group-hover:bg-solar-primary/20 transition-all duration-1000"></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/30">System Status</div>
                      <div className="text-2xl font-black text-emerald-500 flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        OPTIMAL
                      </div>
                    </div>
                    <i className="fas fa-bolt text-solar-primary text-3xl"></i>
                  </div>
                  <div className="space-y-6">
                    {[
                      { label: 'Battery Charge', value: '94%', width: '94%' },
                      { label: 'Solar Yield', value: '8.4 kW', width: '75%' },
                      { label: 'Current Load', value: '2.1 kW', width: '25%' },
                    ].map((bar, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/30">
                          <span>{bar.label}</span>
                          <span>{bar.value}</span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-solar-primary" style={{ width: bar.width }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 pt-12">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4">Performance History</div>
                  <div className="flex items-end gap-1 h-24">
                    {[40, 60, 45, 80, 95, 70, 50, 65, 85, 100, 90, 75, 60, 80, 95].map((h, i) => (
                      <div key={i} className="flex-1 bg-solar-primary/20 rounded-t-sm hover:bg-solar-primary transition-all cursor-pointer" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ★ WHO NEEDS OFF-GRID ── */}
      <section className="py-32 bg-solar-deep">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Is Off-Grid Right For You?</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">Who Needs Off-Grid Solar</h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto font-medium">If any of these describe your situation, off-grid is the way to go</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'fa-mountain-sun', title: 'Remote Homes', desc: 'Farmhouses, hill stations, islands, and rural areas with no grid access or unreliable power supply.', img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600', color: 'from-rose-600' },
              { icon: 'fa-tower-cell', title: 'Telecom Towers', desc: 'Cell towers, relay stations, and communication infrastructure in remote locations across rural India.', img: 'https://images.unsplash.com/photo-1548610762-7c6abc9d6ad3?auto=format&fit=crop&q=80&w=600', color: 'from-amber-600' },
              { icon: 'fa-campground', title: 'Eco Resorts', desc: 'Luxury stays in forests, mountains, and beaches — 5-star comfort without any environmental impact.', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=600', color: 'from-emerald-600' },
              { icon: 'fa-tractor', title: 'Agriculture', desc: 'Solar pumps, drip irrigation, cold storage for perishables, and dairy processing units in villages.', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600', color: 'from-sky-600' },
            ].map((item, i) => (
              <div key={i} className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" alt={item.title} />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color}/20 via-solar-deep/60 to-solar-deep/90`}></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between relative z-10">
                  <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-solar-primary text-xl backdrop-blur-sm group-hover:bg-solar-primary group-hover:text-white transition-all duration-500">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-3">{item.title}</h3>
                    <p className="text-white/50 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ★ OFF-GRID vs ON-GRID COMPARISON ── */}
      <section className="py-32 bg-indigo-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Understand The Difference</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">Off-Grid vs On-Grid</h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto font-medium">Not sure which is right? Here's a clear comparison</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-0 rounded-[2.5rem] overflow-hidden border border-white/5">
              {/* Header */}
              <div className="bg-white/5 p-6 text-center border-b border-white/5">
                <span className="text-white/30 font-black uppercase tracking-widest text-[10px]">Feature</span>
              </div>
              <div className="bg-solar-primary/10 p-6 text-center border-b border-white/5">
                <div className="flex items-center justify-center gap-2">
                  <i className="fas fa-battery-full text-solar-primary"></i>
                  <span className="text-solar-primary font-black uppercase tracking-widest text-[10px]">Off-Grid</span>
                </div>
              </div>
              <div className="bg-solar-sky/10 p-6 text-center border-b border-white/5">
                <div className="flex items-center justify-center gap-2">
                  <i className="fas fa-bolt text-solar-sky"></i>
                  <span className="text-solar-sky font-black uppercase tracking-widest text-[10px]">On-Grid</span>
                </div>
              </div>

              {/* Rows */}
              {[
                ['Grid Connection', 'Not needed', 'Required'],
                ['Battery Storage', 'Required (LiFePO4)', 'Not needed'],
                ['Power at Night', 'From batteries', 'From grid'],
                ['During Power Cuts', 'Unaffected ✅', 'System shuts down'],
                ['Net Metering', 'Not applicable', 'Yes — sell excess ✅'],
                ['Upfront Cost', 'Higher (batteries)', 'Lower ✅'],
                ['Best For', 'Remote, no-grid areas', 'Urban, reliable grid'],
                ['Maintenance', 'Battery + panel checks', 'Panel cleaning only ✅'],
              ].map((row, i) => (
                <React.Fragment key={i}>
                  <div className={`p-5 border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <span className="text-white/50 font-bold text-sm">{row[0]}</span>
                  </div>
                  <div className={`p-5 border-b border-white/5 text-center ${i % 2 === 0 ? 'bg-solar-primary/[0.03]' : 'bg-solar-primary/[0.01]'}`}>
                    <span className="text-white font-bold text-sm">{row[1]}</span>
                  </div>
                  <div className={`p-5 border-b border-white/5 text-center ${i % 2 === 0 ? 'bg-solar-sky/[0.03]' : 'bg-solar-sky/[0.01]'}`}>
                    <span className="text-white font-bold text-sm">{row[2]}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. ★ OFF-GRID PACKAGES ── */}
      <section className="py-32 bg-solar-deep">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Choose Your System</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">Off-Grid Packages</h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto font-medium">From basic home backup to industrial-grade autonomy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {[
              {
                name: 'Essential', range: '1–3 kW', price: '₹2.5–5 Lakhs', popular: false,
                icon: 'fa-house', color: 'bg-white/5 border-white/10',
                features: ['Lights, fans, TV, fridge', '4-8 hrs battery backup', 'Lead-acid / tubular batteries', 'Basic monitoring panel'],
                best: 'Small farmhouses, weekend homes'
              },
              {
                name: 'Pro', range: '3–5 kW', price: '₹5–10 Lakhs', popular: true,
                icon: 'fa-house-signal', color: 'bg-solar-primary/10 border-solar-primary/30',
                features: ['Full home including 1-2 ACs', '8-12 hrs LiFePO4 backup', 'Lithium batteries (10,000 cycles)', 'Smart app + remote diagnostics', 'Auto-load management'],
                best: 'Full-time off-grid homes, resorts'
              },
              {
                name: 'Enterprise', range: '5–50 kW+', price: 'Custom Quote', popular: false,
                icon: 'fa-industry', color: 'bg-white/5 border-white/10',
                features: ['Industrial / telecom grade', '24hr LFP + DG hybrid option', 'Redundant architecture', 'Satellite telemetry monitoring', 'On-site maintenance contract'],
                best: 'Telecom, agriculture, large facilities'
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-[2.5rem] border ${plan.color} overflow-hidden relative ${plan.popular ? 'lg:scale-105 shadow-2xl shadow-rose-500/10' : ''} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-6 bg-solar-primary text-white px-4 py-1 rounded-b-lg font-black uppercase tracking-widest text-[8px] z-10">
                    Most Popular
                  </div>
                )}
                <div className="p-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl ${plan.popular ? 'bg-solar-primary text-white' : 'bg-white/5 text-solar-primary border border-white/10'}`}>
                      <i className={`fas ${plan.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">{plan.name}</h3>
                      <p className="text-white/40 font-medium text-sm">{plan.range}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {plan.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-solar-primary/20' : 'bg-white/5'}`}>
                          <i className={`fas fa-check text-[8px] ${plan.popular ? 'text-solar-primary' : 'text-white/40'}`}></i>
                        </div>
                        <span className="text-white/60 text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Best For</div>
                    <p className="text-white/50 text-sm font-medium">{plan.best}</p>
                  </div>

                  <div className="text-center pt-2">
                    <div className={`text-3xl font-black mb-4 ${plan.popular ? 'text-solar-primary' : 'text-white'}`}>{plan.price}</div>
                    <button
                      onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                      className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                        plan.popular
                          ? 'bg-solar-primary text-white hover:bg-rose-600 shadow-lg shadow-rose-500/20'
                          : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      Get Quote <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. USE CASES (Existing) ── */}
      <section className="py-32 bg-indigo-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 space-y-6">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Where Failure Isn't an Option</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Mission Critical</h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto">Where grid failure is not an option, Wattex Off-Grid systems deliver absolute reliability.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Remote Infrastructure', desc: 'Powering telecommunication towers, weather stations, and research outposts in extreme climates.', img: 'https://images.unsplash.com/photo-1548610762-7c6abc9d6ad3?auto=format&fit=crop&q=80&w=800' },
              { title: 'Agricultural Autonomy', desc: 'Automated irrigation, livestock monitoring, and processing facilities far from utility lines.', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800' },
              { title: 'Luxury Eco-Resorts', desc: 'Providing 5-star energy comfort in pristine, untouched natural locations without environmental impact.', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800' },
            ].map((item, i) => (
              <div key={i} className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-solar-deep via-solar-deep/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 space-y-4">
                  <h3 className="text-3xl font-black uppercase tracking-tight">{item.title}</h3>
                  <p className="text-white/60 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. ★ BATTERY TECHNOLOGY ── */}
      <section className="py-32 bg-solar-deep">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-solar-primary font-black uppercase tracking-widest text-xs">The Heart of Off-Grid</span>
                <h2 className="text-5xl md:text-6xl font-black tracking-tight">
                  Battery Technology<br /><span className="text-solar-primary">That Lasts</span>
                </h2>
                <p className="text-white/40 text-xl leading-relaxed font-medium">
                  Our LiFePO4 batteries offer 3x the lifespan of lead-acid with zero maintenance and 95% round-trip efficiency.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '10,000+', label: 'Cycle Life', icon: 'fa-rotate', color: 'text-solar-primary' },
                  { value: '15 Yrs', label: 'Warranty', icon: 'fa-shield-halved', color: 'text-emerald-400' },
                  { value: '95%', label: 'Round-trip Efficiency', icon: 'fa-bolt', color: 'text-amber-400' },
                  { value: 'Zero', label: 'Maintenance', icon: 'fa-wrench', color: 'text-sky-400' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/5 rounded-[2rem] p-8 text-center group hover:border-white/10 hover:bg-white/[0.05] transition-all duration-500">
                    <i className={`fas ${stat.icon} ${stat.color} text-2xl mb-4 group-hover:scale-110 transition-transform inline-block`}></i>
                    <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-white/30 font-bold text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* LFP vs Lead-Acid mini comparison */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4">LiFePO4 vs Lead-Acid</div>
                <div className="space-y-3">
                  {[
                    { label: 'Lifespan', lfp: '10-15 years', lead: '3-5 years' },
                    { label: 'Weight', lfp: '60% lighter', lead: 'Heavy' },
                    { label: 'Maintenance', lfp: 'None', lead: 'Water top-ups' },
                    { label: 'Temp Range', lfp: '-20°C to 60°C', lead: '10°C to 45°C' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-4 py-2 border-b border-white/5 last:border-0">
                      <span className="text-white/30 text-xs font-bold">{row.label}</span>
                      <span className="text-emerald-400 text-xs font-bold text-center">{row.lfp}</span>
                      <span className="text-white/30 text-xs font-medium text-center">{row.lead}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Battery Visualization */}
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=1200"
                  className="w-full h-full object-cover"
                  alt="Battery Storage System"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-solar-deep/20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-4 py-1.5 rounded-full mb-4">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-emerald-400 font-black uppercase tracking-widest text-[9px]">LiFePO4 Technology</span>
                  </div>
                  <h3 className="text-white text-3xl font-black leading-tight">
                    10,000+ cycles<br />
                    <span className="text-white/50">15-year warranty</span>
                  </h3>
                </div>
              </div>
              {/* Floating stat badge */}
              <div className="absolute -top-4 -right-4 bg-solar-primary text-white px-6 py-4 rounded-2xl shadow-2xl shadow-rose-500/30">
                <div className="text-2xl font-black">3x</div>
                <div className="text-[8px] font-black uppercase tracking-widest opacity-80">Longer Life</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. ★ PARALLAX TRUST STATS ── */}
      <section
        className="relative h-[60vh] md:h-[70vh] bg-fixed bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920)' }}
      >
        <div className="absolute inset-0 bg-solar-deep/75 backdrop-blur-[2px]"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Powering India's Most<br /><span className="text-solar-primary">Remote Locations</span>
            </h2>
            <div className="w-24 h-1 bg-solar-primary mx-auto"></div>
            <p className="text-white/60 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
              From Himalayan outposts to desert telecom sites — reliable power where the grid can't reach.
            </p>
            <div className="flex flex-wrap justify-center gap-12 pt-8">
              {[
                { val: '200+', label: 'Off-Grid Sites' },
                { val: '24/7', label: 'Uptime Guarantee' },
                { val: '15 Yr', label: 'Battery Warranty' },
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="w-px h-16 bg-white/15 hidden md:block"></div>}
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-white">{stat.val}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">{stat.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. ★ OFF-GRID FAQ ── */}
      <OffGridFaqSection />

      {/* ── 10. ★ ENHANCED CTA ── */}
      <section className="relative py-32 bg-solar-deep overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-solar-primary/5 via-transparent to-solar-deep/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-solar-primary/5 blur-[150px] rounded-full"></div>
        <div className="container mx-auto px-6 relative z-10 text-center space-y-10">
          <div className="space-y-6">
            <span className="text-solar-primary font-black uppercase tracking-[0.4em] text-[10px]">Complete Independence</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Go Completely<br /><span className="text-solar-primary">Off The Grid</span>
            </h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto font-medium">
              Request a free engineering consultation for your off-grid project. Our specialists design systems that work in the most demanding conditions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
              className="bg-solar-primary hover:bg-rose-600 text-white px-14 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all shadow-2xl shadow-rose-500/20 hover:-translate-y-1"
            >
              <i className="fas fa-drafting-compass mr-3"></i>Request Engineering
            </button>
            <button
              onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
              className="bg-white/5 hover:bg-white/10 text-white px-14 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all border border-white/10 hover:border-white/20 hover:-translate-y-1"
            >
              <i className="fas fa-phone mr-3"></i>Call Expert
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OffGridSolar;
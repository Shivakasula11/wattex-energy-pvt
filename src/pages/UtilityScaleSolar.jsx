import React from 'react';

const UtilityScaleSolar = () => (
  <div className="animate-fade-in bg-white">
    {/* Hero */}
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Utility Scale Solar Farm" />
        <div className="absolute inset-0 bg-solar-deep/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-solar-deep via-solar-deep/40 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl space-y-8">
          <div className="inline-flex items-center gap-4 bg-solar-primary/20 backdrop-blur-md border border-solar-primary/30 px-6 py-2 rounded-full">
            <span className="w-2 h-2 bg-solar-primary rounded-full animate-pulse"></span>
            <span className="text-solar-primary font-black uppercase tracking-[0.3em] text-[10px]">Infrastructure Grade Solutions</span>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black text-white font-heading leading-[0.85] tracking-tighter uppercase">
            Mega <br /><span className="text-solar-primary">Wattage</span>.
          </h1>
          <p className="text-white/70 text-xl md:text-3xl max-w-2xl font-medium leading-tight">
            Engineering the backbone of the modern grid. High-density solar arrays designed for national energy security.
          </p>
          <div className="flex gap-12 pt-12">
            <div className="space-y-2">
              <div className="text-5xl font-black text-white tracking-tighter">500MW+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Portfolio Capacity</div>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-white tracking-tighter">99.9%</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Grid Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Technical Precision */}
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Engineering Excellence</span>
              <h2 className="text-5xl md:text-7xl font-black text-solar-deep tracking-tight">Grid-Scale Precision</h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">
                Our utility-scale projects are more than just solar panels; they are sophisticated power plants integrated with advanced AI-driven management systems.
              </p>
            </div>
            <div className="grid gap-8">
              {[
                { title: 'Bifacial Technology', desc: 'Maximizing energy yield by capturing sunlight from both sides of the panel, increasing efficiency by up to 25%.', icon: 'fa-clone' },
                { title: 'Smart Trackers', desc: "Single-axis tracking systems that follow the sun's path with astronomical precision for optimal exposure.", icon: 'fa-compass' },
                { title: 'HVDC Integration', desc: 'High-Voltage Direct Current transmission systems to minimize energy loss over long distances.', icon: 'fa-bolt-lightning' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-solar-primary shrink-0 group-hover:bg-solar-primary group-hover:text-white transition-all duration-500">
                    <i className={`fas ${item.icon} text-2xl`}></i>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-solar-deep">{item.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-4xl border-8 border-white">
              <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Solar Engineering" />
            </div>
            <div className="absolute -bottom-12 -left-12 bg-solar-deep p-12 rounded-[3rem] shadow-3xl max-w-xs space-y-4 hidden xl:block">
              <div className="text-4xl font-black text-solar-primary">AI-Driven</div>
              <p className="text-white/60 font-bold uppercase tracking-widest text-[10px]">Predictive maintenance and load balancing algorithms.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Project Showcase */}
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Global Portfolio</span>
          <h2 className="text-5xl md:text-7xl font-black text-solar-deep tracking-tight">Landmark Installations</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Desert Sun Mega-Park', location: 'Arizona, USA', capacity: '250MW', img: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800' },
            { name: 'Azure Plains Array', location: 'Rajasthan, India', capacity: '180MW', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800' },
            { name: 'Coastal Energy Hub', location: 'Valencia, Spain', capacity: '120MW', img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800' },
            { name: 'Alpine High-Altitude Array', location: 'Swiss Alps', capacity: '85MW', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800' },
          ].map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl">
                <img src={project.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={project.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-10 left-10 right-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full bg-white text-solar-deep py-4 rounded-2xl font-black uppercase tracking-widest text-[10px]">View Case Study</button>
                </div>
              </div>
              <div className="px-4 space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-black text-solar-deep leading-tight">{project.name}</h3>
                  <span className="text-solar-primary font-black text-sm">{project.capacity}</span>
                </div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Environmental Stewardship */}
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-4xl">
              <img src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Sustainable Solar" />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-solar-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-solar-sky/10 rounded-full blur-3xl"></div>
          </div>
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Sustainability First</span>
              <h2 className="text-5xl md:text-7xl font-black text-solar-deep tracking-tight">Environmental Stewardship</h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">
                We don't just build power plants; we restore ecosystems. Our utility projects incorporate agrivoltaics and biodiversity corridors to ensure minimal environmental impact.
              </p>
            </div>
            <div className="space-y-8">
              {[
                { title: 'Agrivoltaic Integration', desc: 'Dual-use land strategies allowing for agricultural activities beneath solar arrays.', icon: 'fa-wheat-awn' },
                { title: 'Biodiversity Corridors', desc: 'Designated pathways within solar farms to support local wildlife migration and habitat preservation.', icon: 'fa-leaf' },
                { title: 'Water-Free Cleaning', desc: 'Robotic dry-cleaning systems that eliminate the need for precious water resources in arid regions.', icon: 'fa-robot' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-solar-primary shrink-0">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-solar-deep">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Grid Stability & Storage */}
    <section className="py-32 bg-solar-deep text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-solar-primary/10 -skew-x-12 translate-x-1/2"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                Beyond the <br /><span className="text-solar-primary">Daylight</span>.
              </h2>
              <p className="text-white/60 text-xl font-medium leading-relaxed">
                Our utility-scale BESS (Battery Energy Storage Systems) ensure grid stability 24/7, providing frequency regulation and peak shaving capabilities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="text-4xl font-black text-solar-primary mb-2">2GWh</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Storage Deployed</div>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="text-4xl font-black text-solar-primary mb-2">&lt;20ms</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Response Time</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-2xl aspect-[3/4] object-cover mt-12" alt="Battery Storage" />
            <img src="https://images.unsplash.com/photo-1569000119348-199333730aa3?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-2xl aspect-[3/4] object-cover" alt="Grid Infrastructure" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default UtilityScaleSolar;

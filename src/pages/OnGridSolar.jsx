import React from 'react';
import { useNavigate } from 'react-router-dom';
import OnGridFaqSection from '../components/sections/OnGridFaqSection';

const OnGridSolar = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in bg-white">

      {/* ── 1. HERO ── */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="On Grid Solar" />
          <div className="absolute inset-0 bg-gradient-to-r from-solar-deep via-solar-deep/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-solar-sky"></div>
              <span className="text-solar-sky font-black uppercase tracking-[0.4em] text-[10px]">Grid-Tied Solar</span>
            </div>
            <h1 className="text-5xl md:text-[8rem] font-black font-heading leading-[0.85] tracking-tighter uppercase text-white">
              Maximum <br /><span className="text-solar-sky">Savings</span>.
            </h1>
            <p className="text-white/60 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
              India's most popular solar solution. Generate clean energy, use what you need, sell the rest to the grid.
            </p>
            <div className="flex flex-wrap gap-8 pt-6">
              {[
                { val: '90%', label: 'Bill Reduction' },
                { val: '3-4 Yrs', label: 'Payback Period' },
                { val: '25 Yrs', label: 'System Life' },
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
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                className="bg-solar-sky hover:bg-sky-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl shadow-sky-500/20 hover:-translate-y-1"
              >
                <i className="fas fa-bolt mr-3"></i>Get Free Quote
              </button>
              <button
                onClick={() => { navigate('/calculator'); window.scrollTo(0, 0); }}
                className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all border border-white/20 hover:-translate-y-1 backdrop-blur-sm"
              >
                <i className="fas fa-calculator mr-3"></i>Calculate Savings
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-white/20"></i>
        </div>
      </section>

      {/* ── 2. HOW ON-GRID WORKS ── */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <span className="text-solar-sky font-black uppercase tracking-widest text-xs">Simple & Effective</span>
            <h2 className="text-5xl md:text-6xl font-black text-solar-deep tracking-tight">How On-Grid Solar Works</h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">No batteries, no complexity — just clean energy that saves you money every single day</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-20 left-[15%] right-[15%] h-[2px] bg-sky-100 hidden lg:block"></div>
            <div className="absolute top-20 left-[15%] right-[60%] h-[2px] bg-solar-sky hidden lg:block"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { num: '01', icon: 'fa-sun', title: 'Generate', desc: 'Solar panels on your roof convert sunlight into DC electricity throughout the day.', color: 'border-amber-400 bg-amber-50', iconColor: 'text-amber-500' },
                { num: '02', icon: 'fa-rotate', title: 'Convert', desc: 'Grid-tie inverter converts DC power to AC electricity — same as your wall outlets.', color: 'border-solar-sky bg-sky-50', iconColor: 'text-solar-sky' },
                { num: '03', icon: 'fa-house-chimney', title: 'Use First', desc: 'Your home uses solar power first. Appliances run on free solar energy during the day.', color: 'border-emerald-400 bg-emerald-50', iconColor: 'text-emerald-500' },
                { num: '04', icon: 'fa-arrow-right-arrow-left', title: 'Export Excess', desc: 'Extra power flows to the grid. Your meter runs backwards — earn credits on your bill.', color: 'border-violet-400 bg-violet-50', iconColor: 'text-violet-500' },
              ].map((step, i) => (
                <div key={i} className="relative text-center group">
                  <div className={`w-40 h-40 mx-auto mb-8 rounded-full ${step.color} border-4 shadow-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                    <i className={`fas ${step.icon} text-4xl ${step.iconColor} group-hover:scale-110 transition-transform`}></i>
                  </div>
                  <div className="text-solar-sky font-black text-sm tracking-widest mb-3">{step.num}</div>
                  <h3 className="text-xl font-black text-solar-deep mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Simple visual summary */}
          <div className="max-w-3xl mx-auto mt-20 bg-solar-sky/5 border border-solar-sky/10 rounded-[2.5rem] p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-sun text-amber-500"></i>
                </div>
                <span className="font-bold text-solar-deep">Solar Panels</span>
              </div>
              <i className="fas fa-arrow-right text-solar-sky"></i>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-rotate text-solar-sky"></i>
                </div>
                <span className="font-bold text-solar-deep">Inverter</span>
              </div>
              <i className="fas fa-arrow-right text-solar-sky"></i>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-house text-emerald-500"></i>
                </div>
                <span className="font-bold text-solar-deep">Your Home</span>
              </div>
              <i className="fas fa-arrows-left-right text-solar-sky"></i>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-gauge-high text-violet-500"></i>
                </div>
                <span className="font-bold text-solar-deep">Net Meter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. KEY BENEFITS ── */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-solar-sky font-black uppercase tracking-widest text-xs">Why On-Grid?</span>
                <h2 className="text-5xl md:text-6xl font-black text-solar-deep tracking-tight">The Smart Urban Choice</h2>
                <p className="text-slate-500 text-xl leading-relaxed font-medium">
                  On-grid solar is India's most popular residential solar solution — and for good reason. Maximum savings with minimum hassle.
                </p>
              </div>
              <div className="grid gap-8">
                {[
                  { title: 'Net Metering Revenue', desc: 'Sell excess power to the grid. Your meter literally runs backwards, earning you credits that offset your nighttime usage.', icon: 'fa-indian-rupee-sign', color: 'text-emerald-500 bg-emerald-50' },
                  { title: 'Lowest Maintenance', desc: 'No batteries means no battery replacement costs, no acid handling, no water topping. Just clean panels and free power.', icon: 'fa-wrench', color: 'text-solar-sky bg-sky-50' },
                  { title: 'Fastest ROI', desc: '3-4 year payback period — the fastest return of any solar configuration. Then enjoy 21+ years of virtually free electricity.', icon: 'fa-chart-line', color: 'text-amber-500 bg-amber-50' },
                  { title: 'Smart App Monitoring', desc: 'Track real-time generation, savings, and grid export from your phone. Get instant alerts if anything needs attention.', icon: 'fa-mobile-screen-button', color: 'text-violet-500 bg-violet-50' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className={`w-14 h-14 ${item.color} shadow-lg rounded-2xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-solar-deep">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Residential Solar Installation" />
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-6 -left-6 bg-solar-sky text-white px-8 py-5 rounded-3xl shadow-2xl shadow-sky-500/30">
                <div className="text-3xl font-black">₹0</div>
                <div className="text-[9px] font-black uppercase tracking-widest opacity-80">Battery Cost</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white text-solar-deep px-8 py-5 rounded-3xl shadow-2xl border border-slate-100">
                <div className="text-3xl font-black text-emerald-500">7x</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">ROI Return</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. NET METERING EXPLAINED ── */}
      <section className="py-32 bg-solar-sky text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-white/60 font-black uppercase tracking-[0.3em] text-[10px]">Your Meter Runs Backwards</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">How Net Metering Saves You Money</h2>
            <p className="text-white/60 text-xl font-medium max-w-2xl mx-auto">Understand how on-grid solar eliminates up to 90% of your electricity bill</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: 'fa-sun',
                period: 'Daytime',
                time: '6 AM — 6 PM',
                desc: 'Solar panels power your home. Any excess electricity flows to the grid automatically. Your bi-directional meter records the export — running backwards.',
                highlight: 'Meter runs backwards',
                color: 'from-amber-500/20 to-amber-500/5',
                iconBg: 'bg-amber-400/20 text-amber-300'
              },
              {
                icon: 'fa-moon',
                period: 'Nighttime',
                time: '6 PM — 6 AM',
                desc: 'When the sun is down, your home draws power from the grid as usual. But the credits you earned during the day offset this nighttime consumption.',
                highlight: 'Credits offset usage',
                color: 'from-indigo-500/20 to-indigo-500/5',
                iconBg: 'bg-indigo-400/20 text-indigo-300'
              },
              {
                icon: 'fa-receipt',
                period: 'Monthly Bill',
                time: 'End of Month',
                desc: 'Your bill = Grid import minus Solar export. Most homeowners see 70-90% bill reduction. Unused credits roll over to the next month for up to a year.',
                highlight: '70-90% savings',
                color: 'from-emerald-500/20 to-emerald-500/5',
                iconBg: 'bg-emerald-400/20 text-emerald-300'
              },
            ].map((panel, i) => (
              <div key={i} className={`bg-gradient-to-b ${panel.color} backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-10 text-center group hover:border-white/20 transition-all duration-500 hover:-translate-y-2`}>
                <div className={`w-20 h-20 ${panel.iconBg} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={`fas ${panel.icon}`}></i>
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">{panel.time}</div>
                <h3 className="text-2xl font-black mb-2">{panel.period}</h3>
                <p className="text-white/50 text-sm font-medium mb-6 leading-relaxed">{panel.desc}</p>
                <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full">
                  <i className="fas fa-check text-emerald-400 text-xs"></i>
                  <span className="text-white font-bold text-xs">{panel.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Net metering equation */}
          <div className="max-w-3xl mx-auto mt-16 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-black">800</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-white/40">Units Imported</div>
              </div>
              <div className="text-3xl font-black text-white/30">−</div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-amber-300">650</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-white/40">Units Exported</div>
              </div>
              <div className="text-3xl font-black text-white/30">=</div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-emerald-300">150</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-white/40">Units Billed</div>
              </div>
              <div className="w-px h-12 bg-white/15 hidden md:block"></div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-emerald-300">81%</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-white/40">Bill Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SAVINGS CALCULATOR PREVIEW ── */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-solar-sky font-black uppercase tracking-widest text-xs">Financial Impact</span>
                <h2 className="text-5xl md:text-6xl font-black text-solar-deep tracking-tight">
                  See What You<br /><span className="text-solar-sky">Save</span>
                </h2>
                <p className="text-slate-500 text-xl leading-relaxed font-medium">
                  Based on a typical 5kW residential system in an urban area with ₹8/unit electricity tariff.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Current Monthly Bill', value: '₹8,500', icon: 'fa-file-invoice', color: 'bg-red-50 text-red-500 border-red-100' },
                  { label: 'New Monthly Bill', value: '₹850', icon: 'fa-file-invoice-dollar', color: 'bg-emerald-50 text-emerald-500 border-emerald-100' },
                  { label: 'Monthly Savings', value: '₹7,650', icon: 'fa-piggy-bank', color: 'bg-sky-50 text-solar-sky border-sky-100' },
                  { label: 'Annual Savings', value: '₹91,800', icon: 'fa-sack-dollar', color: 'bg-amber-50 text-amber-500 border-amber-100' },
                ].map((item, i) => (
                  <div key={i} className={`${item.color} border rounded-[2rem] p-6 md:p-8 text-center group hover:shadow-xl transition-all duration-500`}>
                    <i className={`fas ${item.icon} text-2xl mb-3 group-hover:scale-110 transition-transform inline-block`}></i>
                    <div className="text-2xl md:text-3xl font-black text-solar-deep mb-1">{item.value}</div>
                    <div className="text-slate-500 font-bold text-xs">{item.label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => { navigate('/calculator'); window.scrollTo(0, 0); }}
                className="bg-solar-sky hover:bg-sky-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-sky-200 hover:-translate-y-1"
              >
                <i className="fas fa-calculator mr-3"></i>Use Full Calculator
              </button>
            </div>

            {/* 25-Year ROI Chart */}
            <div className="bg-solar-deep rounded-[3rem] p-8 md:p-10 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/30">25-Year Projection</div>
                  <div className="text-white text-2xl font-black mt-1">Cumulative Savings</div>
                </div>
                <div className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-xl">
                  <span className="font-black text-lg">₹22.9L</span>
                  <div className="text-[8px] font-black uppercase tracking-widest opacity-70">Total Savings</div>
                </div>
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-[3px] h-48">
                {[
                  { yr: '1', h: 4 }, { yr: '2', h: 8 }, { yr: '3', h: 12 }, { yr: '4', h: 17 },
                  { yr: '5', h: 22 }, { yr: '', h: 27 }, { yr: '', h: 32 }, { yr: '', h: 37 },
                  { yr: '', h: 42 }, { yr: '10', h: 47 }, { yr: '', h: 52 }, { yr: '', h: 56 },
                  { yr: '', h: 60 }, { yr: '', h: 64 }, { yr: '15', h: 68 }, { yr: '', h: 72 },
                  { yr: '', h: 75 }, { yr: '', h: 78 }, { yr: '', h: 81 }, { yr: '20', h: 84 },
                  { yr: '', h: 87 }, { yr: '', h: 90 }, { yr: '', h: 93 }, { yr: '', h: 96 },
                  { yr: '25', h: 100 },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className={`w-full rounded-t-sm transition-all duration-300 cursor-pointer ${i < 4 ? 'bg-sky-400/40' : 'bg-solar-sky/70 hover:bg-solar-sky'}`}
                      style={{ height: `${bar.h}%` }}
                    ></div>
                    {bar.yr && <span className="text-[8px] text-white/30 font-bold">{bar.yr}</span>}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-sm bg-sky-400/40"></div>
                  <span className="text-white/40 text-xs font-bold">Payback period</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-sm bg-solar-sky"></div>
                  <span className="text-white/40 text-xs font-bold">Pure profit</span>
                </div>
                <div className="bg-solar-sky/20 text-solar-sky px-4 py-1.5 rounded-full">
                  <span className="font-black text-sm">7x ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. ON-GRID PACKAGES ── */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-solar-sky font-black uppercase tracking-widest text-xs">Pick Your Size</span>
            <h2 className="text-5xl md:text-6xl font-black text-solar-deep tracking-tight">On-Grid System Packages</h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">All prices shown after PM Surya Ghar government subsidy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {[
              {
                name: '3 kW', sub: 'Small Home / 2BHK', price: '₹1.1–1.5 Lakhs*', popular: false,
                color: 'bg-solar-sky', borderColor: 'border-slate-200',
                bill: '₹2,000–4,000/mo', saves: '₹4,500/mo', subsidy: '40% Subsidy',
                features: ['6-8 panels on roof', 'Powers lights, fans, TV, fridge', 'Wi-Fi monitoring included', 'Basic net metering setup'],
                best: 'Small apartments, 2BHK homes'
              },
              {
                name: '5 kW', sub: 'Medium Home / 3BHK', price: '₹1.8–2.5 Lakhs*', popular: true,
                color: 'bg-solar-sky', borderColor: 'border-solar-sky',
                bill: '₹4,000–8,000/mo', saves: '₹7,650/mo', subsidy: '40% + 20%',
                features: ['10-14 panels on roof', 'Powers entire home + 1-2 ACs', 'Smart app monitoring', 'Premium Tier-1 panels', 'Priority installation'],
                best: '3BHK homes, independent houses'
              },
              {
                name: '10 kW', sub: 'Large Home / Villa', price: '₹3.5–5 Lakhs*', popular: false,
                color: 'bg-solar-deep', borderColor: 'border-slate-200',
                bill: '₹8,000–15,000/mo', saves: '₹14,000/mo', subsidy: '40% + 20%',
                features: ['20-28 panels on roof', 'Full villa + multiple ACs', 'Premium monitoring dashboard', 'Hybrid-ready inverter', 'EV charger compatible'],
                best: 'Villas, bungalows, large homes'
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-[2.5rem] border-2 ${plan.borderColor} overflow-hidden relative bg-white ${plan.popular ? 'lg:scale-105 shadow-2xl shadow-sky-200/50' : 'shadow-xl'} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-6 bg-solar-yellow text-solar-deep px-4 py-1 rounded-b-lg font-black uppercase tracking-widest text-[8px] z-10">
                    Most Popular
                  </div>
                )}
                <div className={`${plan.color} text-white p-8`}>
                  <h3 className="text-3xl font-black">{plan.name}</h3>
                  <p className="text-white/70 font-medium mt-1">{plan.sub}</p>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium text-sm">Current Bill</span>
                      <span className="font-black text-solar-deep">{plan.bill}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium text-sm">Monthly Savings</span>
                      <span className="font-black text-emerald-500 text-lg">{plan.saves}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium text-sm">Subsidy</span>
                      <span className="font-black text-solar-sky">{plan.subsidy}</span>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-6 space-y-3">
                    {plan.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                          <i className="fas fa-check text-emerald-500 text-[8px]"></i>
                        </div>
                        <span className="text-slate-500 text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">Best For</div>
                    <p className="text-slate-500 text-sm font-medium">{plan.best}</p>
                  </div>
                  <div className="text-center pt-2">
                    <div className={`text-3xl font-black mb-4 ${plan.popular ? 'text-solar-sky' : 'text-solar-deep'}`}>{plan.price}</div>
                    <button
                      onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                      className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                        plan.popular
                          ? 'bg-solar-sky text-white hover:bg-sky-600 shadow-lg shadow-sky-200'
                          : 'bg-slate-50 text-solar-deep hover:bg-slate-100'
                      }`}
                    >
                      Get Quote <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8 font-medium">*Prices after applicable PM Surya Ghar government subsidy. Actual costs depend on site conditions and panel selection.</p>
        </div>
      </section>

      {/* ── 7. PARALLAX — INDIA STATS ── */}
      <section
        className="relative h-[60vh] md:h-[70vh] bg-fixed bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920)' }}
      >
        <div className="absolute inset-0 bg-solar-deep/70 backdrop-blur-[2px]"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              India's #1 Choice:<br /><span className="text-solar-sky">On-Grid Solar</span>
            </h2>
            <div className="w-24 h-1 bg-solar-sky mx-auto"></div>
            <p className="text-white/60 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
              The most cost-effective way to go solar — proven by millions of Indian homeowners.
            </p>
            <div className="flex flex-wrap justify-center gap-12 pt-8">
              {[
                { val: '80%', label: 'of All Solar Installs' },
                { val: '1Cr+', label: 'Homes Powered' },
                { val: '₹0', label: 'Battery Cost' },
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

      {/* ── 8. GOVERNMENT SUBSIDY + PM SURYA GHAR ── */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-emerald-600 font-black uppercase tracking-widest text-xs">Government Benefits</span>
                <h2 className="text-5xl md:text-6xl font-black text-solar-deep tracking-tight">
                  On-Grid Solar<br /><span className="text-emerald-600">Subsidies</span>
                </h2>
                <p className="text-slate-500 text-xl leading-relaxed font-medium">
                  The Indian government heavily subsidizes on-grid rooftop solar under PM Surya Ghar Muft Bijli Yojana. We handle 100% of the paperwork.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Subsidy up to 3 kW', value: '40%', desc: '₹78,000 maximum', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
                  { label: 'Subsidy 3–10 kW', value: '20%', desc: 'Additional capacity', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
                  { label: 'Max for 3 kW', value: '₹78,000', desc: 'Direct to bank account', color: 'bg-sky-50 text-solar-sky border-sky-100' },
                  { label: 'Paperwork', value: '100% by Us', desc: 'Zero hassle for you', color: 'bg-amber-50 text-amber-600 border-amber-100' },
                ].map((item, i) => (
                  <div key={i} className={`${item.color} border rounded-[2rem] p-6 md:p-8 text-center group hover:shadow-xl transition-all duration-500`}>
                    <div className="text-3xl font-black mb-1">{item.value}</div>
                    <div className="text-solar-deep font-bold text-sm">{item.label}</div>
                    <div className="text-slate-400 text-xs font-medium mt-2">{item.desc}</div>
                  </div>
                ))}
              </div>

              {/* Subsidy process */}
              <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Subsidy Process — We Handle Everything</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Register Online', 'DISCOM Approval', 'Install System', 'Get Subsidy ₹'].map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-emerald-600 font-black text-[10px]">{i + 1}</span>
                      </div>
                      <span className="text-slate-600 text-xs font-bold">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PM Surya Ghar Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-[4rem] p-12 lg:p-16 border border-emerald-200 text-center space-y-6">
                <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-emerald-600 text-5xl mx-auto shadow-xl">
                  <i className="fas fa-sun"></i>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-emerald-700">PM Surya Ghar</h3>
                  <p className="text-emerald-600/60 font-bold text-lg mt-1">Muft Bijli Yojana</p>
                </div>
                <p className="text-emerald-700/60 font-medium max-w-xs mx-auto">
                  Your home is eligible for up to 40% government subsidy on rooftop solar. Apply through us — we handle everything.
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-emerald-200 hover:-translate-y-1 w-full"
                  >
                    <i className="fas fa-check-circle mr-2"></i>Check My Eligibility
                  </button>
                  <p className="text-emerald-600/40 text-xs font-medium">Free consultation • No obligation • 48hr response</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-5 py-3 rounded-2xl shadow-xl shadow-emerald-500/30">
                <div className="text-xl font-black">Save</div>
                <div className="text-[8px] font-black uppercase tracking-widest opacity-80">Up to ₹78K</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. ON-GRID FAQ ── */}
      <OnGridFaqSection />

      {/* ── 10. CTA ── */}
      <section className="relative py-32 bg-solar-sky overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/30 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-solar-deep/30 blur-[150px] rounded-full"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center space-y-10">
          <div className="space-y-6">
            <span className="text-white/60 font-black uppercase tracking-[0.4em] text-[10px]">Start Today</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              Start Saving with<br />On-Grid Solar
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto font-medium">
              Free consultation. Government subsidy handled. Real savings from day one.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
              className="bg-white hover:bg-slate-50 text-solar-sky px-14 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all shadow-2xl hover:-translate-y-1"
            >
              <i className="fas fa-bolt mr-3"></i>Get Free Quote
            </button>
            <button
              onClick={() => { navigate('/calculator'); window.scrollTo(0, 0); }}
              className="bg-white/15 hover:bg-white/25 text-white px-14 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all border border-white/30 hover:-translate-y-1 backdrop-blur-sm"
            >
              <i className="fas fa-calculator mr-3"></i>Use Calculator
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OnGridSolar;
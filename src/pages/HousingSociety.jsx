import React from "react";
import { useNavigate } from "react-router-dom";
import HousingSocietyFaqSection from "../components/sections/HousingSocietyFaqSection";

const HousingSociety = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in bg-white">
      {/* Hero (Existing) */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover"
            alt="Housing Society Solar"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-solar-deep via-solar-deep/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-8">
            <span className="bg-solar-primary text-white px-6 py-2 rounded-lg font-black uppercase tracking-[0.3em] text-[10px]">
              Society Solutions
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white font-heading leading-tight tracking-tighter uppercase">
              Shared Solar <br />
              <span className="text-solar-primary">Collective Savings</span>.
            </h1>
            <p className="text-white/70 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
              Revolutionize your residential complex's maintenance costs with
              large-scale shared solar infrastructure.
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
                <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
                  Community Impact
                </span>
                <h2 className="text-5xl font-black text-solar-deep tracking-tight">
                  Sustainable Societies
                </h2>
                <p className="text-slate-500 text-xl leading-relaxed font-medium">
                  Shared solar infrastructure is the most efficient way to power
                  common areas, elevators, and water pumps in modern gated
                  communities.
                </p>
              </div>
              <div className="grid gap-8">
                {[
                  {
                    title: "Lower Maintenance Fees",
                    desc: "Slash common area electricity bills by up to 50%, directly reducing monthly maintenance for residents.",
                    icon: "fa-building-circle-check",
                  },
                  {
                    title: "Pumps & Lifts Backup",
                    desc: "Ensure continuous operation of essential services even during grid outages with hybrid storage.",
                    icon: "fa-battery-full",
                  },
                  {
                    title: "Group Subsidy Benefits",
                    desc: "Housing societies qualify for specialized government subsidy tiers that individuals cannot access.",
                    icon: "fa-tags",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center text-solar-primary shrink-0">
                      <i className={`fas ${item.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-solar-deep">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-4xl aspect-[4/5]">
                <img
                  src="https://media.istockphoto.com/id/1665925516/photo/renewable-energy-solar-panels-and-team-walking-on-roof-planning-for-inspection-at-sustainable.webp?a=1&b=1&s=612x612&w=0&k=20&c=Crl6okgc33pnVcaBkMBycHGIhP3Z1CKWgjMmq50OzFM="
                  className="w-full h-full object-cover"
                  alt="Apartment Solar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ★ How Society Solar Works */}
      {/* ★ Interactive Process Journey */}
      <section className="py-32 bg-white relative overflow-hidden">
        <style>{`
          @keyframes drawLine { from { height: 0; } to { height: 100%; } }
          @keyframes fadeSlide { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fadeSlideR { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes pulseRing { 0%,100% { box-shadow: 0 0 0 0 rgba(244,63,94,0.3); } 50% { box-shadow: 0 0 0 12px rgba(244,63,94,0); } }
          .process-line { animation: drawLine 2s ease-out both; }
          .process-card-l { animation: fadeSlide 0.6s ease-out both; }
          .process-card-r { animation: fadeSlideR 0.6s ease-out both; }
          .pulse-dot { animation: pulseRing 2.5s ease-in-out infinite; }
        `}</style>

        {/* Background decorative */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-solar-primary/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-sky-500/3 rounded-full blur-[80px]"></div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
              Your Journey
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-solar-deep tracking-tight">
              From RWA Vote to
              <br />
              Monthly Savings
            </h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
              A transparent, hassle-free process designed specifically for
              housing societies
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="max-w-5xl mx-auto relative">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-solar-primary/20 via-sky-500/20 to-emerald-500/20 hidden lg:block process-line"></div>

            {[
              {
                num: "01",
                title: "Society Resolution",
                desc: "RWA committee passes a resolution for solar installation in the general body meeting. We provide a ready-to-use proposal document that covers costs, savings, and ROI — making approval easy.",
                icon: "fa-users",
                color: "solar-primary",
                bgColor: "bg-rose-50",
                borderColor: "border-rose-100",
                iconBg: "bg-solar-primary/10",
                metric: "1 Meeting",
                metricLabel: "All it takes",
                side: "left",
              },
              {
                num: "02",
                title: "Technical Site Survey",
                desc: "Our engineers visit your society for a comprehensive audit — rooftop area measurement, structural assessment, shadow analysis, common area load calculation, and solar potential mapping.",
                icon: "fa-clipboard-check",
                color: "sky-500",
                bgColor: "bg-sky-50",
                borderColor: "border-sky-100",
                iconBg: "bg-sky-500/10",
                metric: "Free",
                metricLabel: "Zero cost survey",
                side: "right",
              },
              {
                num: "03",
                title: "Custom System Design",
                desc: "We design a system blueprint tailored to your society's specific needs — panel layout, inverter sizing, wiring plan, net metering configuration, and a detailed cost-benefit analysis for RWA review.",
                icon: "fa-drafting-compass",
                color: "amber-500",
                bgColor: "bg-amber-50",
                borderColor: "border-amber-100",
                iconBg: "bg-amber-500/10",
                metric: "48 Hours",
                metricLabel: "Design delivery",
                side: "left",
              },
              {
                num: "04",
                title: "Install & Start Saving",
                desc: "Professional installation in 2-4 weeks with zero disruption to residents. DISCOM applies net metering, and your society immediately starts saving on common area electricity bills.",
                icon: "fa-bolt",
                color: "emerald-500",
                bgColor: "bg-emerald-50",
                borderColor: "border-emerald-100",
                iconBg: "bg-emerald-500/10",
                metric: "2-4 Weeks",
                metricLabel: "Go live",
                side: "right",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`relative flex items-center mb-16 last:mb-0 ${step.side === "right" ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot — center */}
                <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      backgroundColor:
                        step.color === "solar-primary"
                          ? "#e85d3a"
                          : step.color === "sky-500"
                            ? "#0ea5e9"
                            : step.color === "amber-500"
                              ? "#f59e0b"
                              : "#10b981",
                      animation: "pulseRing 2.5s ease-in-out infinite",
                      animationDelay: `${i * 0.6}s`,
                    }}
                  >
                    <i className={`fas ${step.icon} text-white text-lg`}></i>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`w-full lg:w-[calc(50%-3.5rem)] ${step.side === "left" ? "lg:pr-0" : "lg:pl-0"} ${step.side === "left" ? "process-card-l" : "process-card-r"}`}
                  style={{ animationDelay: `${0.3 + i * 0.2}s` }}
                >
                  <div
                    className={`${step.bgColor} border ${step.borderColor} rounded-[2rem] p-8 lg:p-10 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden`}
                  >
                    {/* Background number */}
                    {/* Background number */}
                    <div
                      className={`absolute top-2 ${step.side === "left" ? "right-2" : "left-2"} text-[80px] font-black text-${step.color}/5 leading-none select-none pointer-events-none`}
                    >
                      {step.num}
                    </div>

                    <div className="relative z-10">
                      {/* Mobile icon */}
                      <div
                        className={`lg:hidden w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center mb-5`}
                      >
                        <i
                          className={`fas ${step.icon} text-${step.color} text-xl`}
                        ></i>
                      </div>

                      {/* Step number + title */}
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`text-${step.color} font-black text-sm tracking-widest`}
                        >
                          {step.num}
                        </span>
                        <div
                          className={`flex-1 h-px bg-${step.color}/15`}
                        ></div>
                      </div>

                      <h3 className="text-2xl font-extrabold font-heading text-solar-deep mb-3 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-[15px] font-medium leading-relaxed mb-6">
                        {step.desc}
                      </p>

                      {/* Metric badge */}
                      <div
                        className={`inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-sm border ${step.borderColor}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg bg-${step.color}/10 flex items-center justify-center`}
                        >
                          <i
                            className={`fas fa-clock text-${step.color} text-xs`}
                          ></i>
                        </div>
                        <div>
                          <div
                            className={`text-lg font-black text-${step.color} leading-none`}
                          >
                            {step.metric}
                          </div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            {step.metricLabel}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom CTA */}
            <div className="text-center mt-16 relative z-10">
              <div className="inline-flex items-center gap-4 bg-solar-deep rounded-2xl px-8 py-5 shadow-2xl">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <i className="fas fa-check text-white text-lg"></i>
                </div>
                <div className="text-left">
                  <div className="text-white font-extrabold text-lg leading-tight">
                    Ready in just 4 steps
                  </div>
                  <div className="text-white/50 text-sm font-medium">
                    Average society goes solar in under 30 days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ★ What Gets Powered */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
              Common Area Coverage
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-solar-deep tracking-tight">
              What Solar Powers in Your Society
            </h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
              A breakdown of typical common area electricity load covered by
              your solar system
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "fa-elevator",
                name: "Elevators & Lifts",
                pct: "35%",
                desc: "Largest common area load",
                color: "bg-indigo-50 text-indigo-500",
              },
              {
                icon: "fa-faucet-drip",
                name: "Water Pumps",
                pct: "25%",
                desc: "Borewell & overhead tanks",
                color: "bg-sky-50 text-sky-500",
              },
              {
                icon: "fa-lightbulb",
                name: "Corridor & Lobby Lights",
                pct: "15%",
                desc: "Stairwell & passage lighting",
                color: "bg-amber-50 text-amber-500",
              },
              {
                icon: "fa-video",
                name: "Parking & CCTV",
                pct: "10%",
                desc: "Security cameras & gates",
                color: "bg-rose-50 text-rose-500",
              },
              {
                icon: "fa-person-swimming",
                name: "Pool & Gym",
                pct: "10%",
                desc: "Clubhouse amenities",
                color: "bg-emerald-50 text-emerald-500",
              },
              {
                icon: "fa-tree",
                name: "Garden & Gate",
                pct: "5%",
                desc: "Landscaping & entry lights",
                color: "bg-lime-50 text-lime-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
              >
                <div
                  className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5 group-hover:scale-110 transition-transform`}
                >
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-lg font-black text-solar-deep mb-1">
                  {item.name}
                </h3>
                <p className="text-slate-400 text-sm font-medium mb-4">
                  {item.desc}
                </p>
                <div className="text-3xl font-black text-solar-primary">
                  {item.pct}
                </div>
                <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">
                  of common load
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ★ Before vs After Savings */}
      <section className="py-32 bg-solar-deep text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-[0.3em] text-[10px]">
              Real Impact
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Your Society — Before & After Solar
            </h2>
            <p className="text-white/40 text-lg font-medium">
              Based on a typical 100-flat society with 50kW system
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Before */}
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 lg:p-12">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400">
                  <i className="fas fa-xmark text-lg"></i>
                </div>
                <span className="text-red-400 font-black uppercase tracking-widest text-[10px]">
                  Without Solar
                </span>
              </div>
              <div className="space-y-8">
                {[
                  {
                    label: "Monthly Electricity Bill",
                    value: "₹2.5 Lakh",
                    icon: "fa-receipt",
                  },
                  {
                    label: "Maintenance Per Flat",
                    value: "₹4,500",
                    icon: "fa-building",
                  },
                  {
                    label: "Annual Society Bill",
                    value: "₹30 Lakh",
                    icon: "fa-calendar",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between pb-6 border-b border-white/5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/30">
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                      <span className="text-white/50 font-medium text-sm">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-2xl font-black">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* After */}
            <div className="bg-solar-primary/10 border border-solar-primary/20 rounded-[2.5rem] p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute top-6 right-6 bg-emerald-500 text-white px-4 py-1.5 rounded-full font-black uppercase tracking-widest text-[8px]">
                <i className="fas fa-arrow-trend-down mr-1"></i>70% Reduction
              </div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                  <i className="fas fa-check text-lg"></i>
                </div>
                <span className="text-emerald-400 font-black uppercase tracking-widest text-[10px]">
                  With Wattex Solar
                </span>
              </div>
              <div className="space-y-8">
                {[
                  {
                    label: "Monthly Electricity Bill",
                    value: "₹75,000",
                    saved: "₹1.75L saved",
                    icon: "fa-receipt",
                  },
                  {
                    label: "Maintenance Per Flat",
                    value: "₹2,800",
                    saved: "₹1,700 saved",
                    icon: "fa-building",
                  },
                  {
                    label: "Annual Society Bill",
                    value: "₹9 Lakh",
                    saved: "₹21L saved/yr",
                    icon: "fa-calendar",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between pb-6 border-b border-white/5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/30">
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                      <span className="text-white/50 font-medium text-sm">
                        {item.label}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black">{item.value}</div>
                      <div className="text-emerald-400 font-bold text-xs mt-1">
                        <i className="fas fa-arrow-down mr-1 text-[10px]"></i>
                        {item.saved}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ★ Parallax Trust Section */}
      <section
        className="relative h-[60vh] md:h-[70vh] bg-fixed bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-solar-deep/70 backdrop-blur-[2px]"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Trusted by <br />
              <span className="text-solar-yellow">500+ Housing Societies</span>
            </h2>
            <div className="w-24 h-1 bg-solar-primary mx-auto"></div>
            <p className="text-white/70 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
              From gated communities to large townships — powering shared spaces
              across India.
            </p>
            <div className="flex flex-wrap justify-center gap-12 pt-8">
              {[
                { val: "500+", label: "Societies" },
                { val: "₹50Cr+", label: "Saved Annually" },
                { val: "40%", label: "Avg Bill Reduction" },
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <div className="w-px h-16 bg-white/20 hidden md:block"></div>
                  )}
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-white">
                      {stat.val}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">
                      {stat.label}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ★ Solutions by Society Size */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
              Tailored for You
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-solar-deep tracking-tight">
              Pick Your Society Size
            </h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
              Custom solutions for every community scale
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {[
              {
                name: "Small Society",
                flats: "20–50 Flats",
                system: "10–25 kW",
                savings: "₹15,000/mo",
                payback: "3–4 Years",
                popular: false,
                color: "bg-solar-sky",
                borderColor: "border-slate-200",
                features: [
                  "Common area lighting",
                  "Water pump backup",
                  "Basic net metering",
                ],
              },
              {
                name: "Medium Society",
                flats: "50–200 Flats",
                system: "25–100 kW",
                savings: "₹60,000/mo",
                payback: "2.5–3 Years",
                popular: true,
                color: "bg-solar-primary",
                borderColor: "border-solar-primary",
                features: [
                  "Full common area coverage",
                  "Lift & pump backup",
                  "Smart monitoring dashboard",
                  "Priority maintenance",
                ],
              },
              {
                name: "Large Township",
                flats: "200–1000+ Flats",
                system: "100–500 kW",
                savings: "₹2.5L+/mo",
                payback: "2–3 Years",
                popular: false,
                color: "bg-solar-deep",
                borderColor: "border-slate-200",
                features: [
                  "Complete campus coverage",
                  "EV charging integration",
                  "Battery storage option",
                  "Dedicated project manager",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-[2.5rem] border-2 ${plan.borderColor} overflow-hidden relative ${plan.popular ? "lg:scale-105 shadow-2xl shadow-rose-200/50" : "shadow-xl"} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-6 bg-solar-yellow text-solar-deep px-4 py-1 rounded-b-lg font-black uppercase tracking-widest text-[8px] z-10">
                    Most Popular
                  </div>
                )}
                <div className={`${plan.color} text-white p-8`}>
                  <h3 className="text-2xl font-black">{plan.name}</h3>
                  <p className="text-white/70 font-medium mt-1">{plan.flats}</p>
                </div>
                <div className="bg-white p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium text-sm">
                        System Size
                      </span>
                      <span className="font-black text-solar-deep">
                        {plan.system}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium text-sm">
                        Monthly Savings
                      </span>
                      <span className="font-black text-solar-primary text-lg">
                        {plan.savings}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium text-sm">
                        Payback Period
                      </span>
                      <span className="font-black text-solar-deep">
                        {plan.payback}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-6 space-y-3">
                    {plan.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                          <i className="fas fa-check text-emerald-500 text-[8px]"></i>
                        </div>
                        <span className="text-slate-500 text-sm font-medium">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      navigate("/contact");
                      window.scrollTo(0, 0);
                    }}
                    className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                      plan.popular
                        ? "bg-solar-primary text-white hover:bg-rose-600 shadow-lg shadow-rose-200"
                        : "bg-slate-50 text-solar-deep hover:bg-slate-100"
                    }`}
                  >
                    Get Quote <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ★ Society Testimonials */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
              Happy Societies
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-solar-deep tracking-tight">
              What RWA Presidents Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sundar Iyer",
                role: "President, Palm Heights RWA",
                quote:
                  "Maintenance reduced by ₹1,800/flat. Residents are absolutely thrilled with the switch to solar!",
                flats: "120 Flats",
                city: "Hyderabad",
                image: "https://picsum.photos/seed/sundar/200/200",
                rating: 5,
              },
              {
                name: "Meera Reddy",
                role: "Secretary, Green Valley Society",
                quote:
                  "Zero common area electricity bills for 8 months now. The system truly pays for itself.",
                flats: "240 Flats",
                city: "Bangalore",
                image: "https://picsum.photos/seed/meera/200/200",
                rating: 5,
              },
              {
                name: "Pradeep Shah",
                role: "Chairman, Royal Towers",
                quote:
                  "ROI came in 2.5 years. Best decision our committee ever made for the society.",
                flats: "450 Flats",
                city: "Mumbai",
                image: "https://picsum.photos/seed/pradeep/200/200",
                rating: 5,
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-10 lg:p-12 rounded-[3rem] border border-slate-100 shadow-xl group hover:shadow-2xl transition-all duration-500 relative"
              >
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
                    <p className="text-solar-primary font-bold uppercase tracking-widest text-[9px]">
                      {t.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 text-solar-primary mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <i key={j} className="fas fa-star text-xs"></i>
                  ))}
                </div>
                <p className="text-slate-600 text-lg font-medium italic leading-relaxed relative z-10 mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-2">
                  <span className="bg-slate-50 text-slate-500 px-3 py-1.5 rounded-lg text-xs font-bold">
                    <i className="fas fa-building mr-1"></i>
                    {t.flats}
                  </span>
                  <span className="bg-slate-50 text-slate-500 px-3 py-1.5 rounded-lg text-xs font-bold">
                    <i className="fas fa-location-dot mr-1"></i>
                    {t.city}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ★ Government Subsidy Info */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-solar-primary font-black uppercase tracking-widest text-xs">
                  Government Benefits
                </span>
                <h2 className="text-5xl md:text-6xl font-black text-solar-deep tracking-tight">
                  Subsidies for <br />
                  <span className="text-solar-primary">Housing Societies</span>
                </h2>
                <p className="text-slate-500 text-xl leading-relaxed font-medium">
                  Group housing installations qualify for higher government
                  subsidies under PM Surya Ghar Yojana. We handle all paperwork
                  end-to-end.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    label: "Subsidy up to 3 kW",
                    value: "40%",
                    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
                  },
                  {
                    label: "Subsidy 3–10 kW",
                    value: "20%",
                    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
                  },
                  {
                    label: "For Common Areas",
                    value: "Special Tier",
                    color: "bg-sky-50 text-sky-600 border-sky-100",
                  },
                  {
                    label: "Paperwork",
                    value: "100% by Us",
                    color: "bg-amber-50 text-amber-600 border-amber-100",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`${item.color} border rounded-[2rem] p-8 text-center group hover:shadow-xl transition-all duration-500`}
                  >
                    <div className="text-3xl font-black mb-2">{item.value}</div>
                    <div className="text-slate-500 font-bold text-sm">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-[4rem] p-12 lg:p-16 border border-emerald-200 text-center space-y-6">
                <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-emerald-600 text-5xl mx-auto shadow-xl">
                  <i className="fas fa-sun"></i>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-emerald-700">
                    PM Surya Ghar
                  </h3>
                  <p className="text-emerald-600/60 font-bold text-lg mt-1">
                    Muft Bijli Yojana
                  </p>
                </div>
                <p className="text-emerald-700/60 font-medium max-w-xs mx-auto">
                  Your housing society is eligible for government subsidy on
                  rooftop solar installations.
                </p>
                <button
                  onClick={() => {
                    navigate("/contact");
                    window.scrollTo(0, 0);
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-emerald-200"
                >
                  <i className="fas fa-check-circle mr-2"></i>Check Eligibility
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ★ Society FAQ */}
      <HousingSocietyFaqSection />

      {/* CTA (Enhanced) */}
      <section className="py-24 bg-solar-sky">
        <div className="container mx-auto px-6 text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Ready to Upgrade Your <br />{" "}
            <span className="text-solar-deep">Society's Infrastructure?</span>
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto font-medium">
            Schedule a free rooftop audit for your housing society today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
              className="bg-white hover:bg-slate-50 text-solar-sky px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl hover:-translate-y-1"
            >
              <i className="fas fa-clipboard-check mr-3"></i>Book Free Audit
            </button>
            <button
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
              className="bg-white/15 hover:bg-white/25 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all border border-white/30 hover:-translate-y-1"
            >
              <i className="fas fa-phone mr-3"></i>Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HousingSociety;

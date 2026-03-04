import React, { useState } from 'react';
import { DEPARTMENTS } from '../data/navLinks';
import { CONTACT_FAQS } from '../data/faqs';
import FaqAccordion from '../components/ui/FaqAccordion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Modern Office" />
          <div className="absolute inset-0 bg-solar-deep/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-solar-deep/50 to-white"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-3 bg-solar-primary/20 backdrop-blur-md border border-solar-primary/30 px-6 py-2 rounded-full">
              <span className="w-2 h-2 bg-solar-primary rounded-full animate-pulse"></span>
              <span className="text-solar-primary font-black uppercase tracking-[0.3em] text-[10px]">Global Consultation Hub</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white font-heading leading-[1] tracking-tighter uppercase">
              Engineering <br /><span className="text-solar-primary">Connections</span>.
            </h1>
            <p className="text-white/60 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
              Transitioning to renewable energy requires precision. Our technical advisors are ready to architect your sustainable infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-40 -mt-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-6">
                <h2 className="text-5xl font-black text-solar-deep tracking-tight">Project Intake</h2>
                <p className="text-slate-500 text-xl font-medium leading-relaxed">
                  Start your journey toward zero-carbon operations. Choose a specialized department to expedite your inquiry.
                </p>
              </div>

              {/* Department Grid */}
              <div className="grid gap-4">
                {DEPARTMENTS.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-4xl transition-all duration-500 group">
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 flex items-center justify-center ${item.colorClass} text-xl bg-white rounded-xl shadow-sm`}>
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{item.dept}</h4>
                        <p className="text-solar-deep font-bold text-lg">{item.email}</p>
                      </div>
                    </div>
                    <i className="fas fa-arrow-right text-slate-200 group-hover:text-solar-primary transition-all"></i>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <div className="space-y-6 pt-10">
                <h3 className="text-2xl font-black text-solar-deep px-4">Common Briefings</h3>
                <FaqAccordion faqs={CONTACT_FAQS} />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="sticky top-32">
                <div className="bg-white rounded-[4rem] p-10 lg:p-20 shadow-4xl border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-solar-sky/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                  {!submitted ? (
                    <div className="relative z-10 space-y-12">
                      <div className="space-y-4">
                        <h3 className="text-3xl font-black text-solar-deep">Project Initiation Form</h3>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Estimated Response Time: &lt; 24 Hours</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Client Full Name</label>
                            <input required type="text" name="clientName" placeholder="Engineering Manager" className="w-full bg-slate-50 border-2 border-transparent p-6 rounded-3xl focus:bg-white focus:border-solar-sky outline-none transition-all font-bold placeholder:text-slate-200" />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Corporate Email</label>
                            <input required type="email" name="email" placeholder="example@org.com" className="w-full bg-slate-50 border-2 border-transparent p-6 rounded-3xl focus:bg-white focus:border-solar-sky outline-none transition-all font-bold placeholder:text-slate-200" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Phone Extension</label>
                            <input required type="tel" name="phone" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 border-2 border-transparent p-6 rounded-3xl focus:bg-white focus:border-solar-sky outline-none transition-all font-bold placeholder:text-slate-200" />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Project Sector</label>
                            <select name="sector" className="w-full bg-slate-50 border-2 border-transparent p-6 rounded-3xl focus:bg-white focus:border-solar-sky outline-none transition-all font-bold appearance-none cursor-pointer">
                              <option>Commercial Rooftop</option>
                              <option>Industrial Microgrid</option>
                              <option>Utility Scale Solar Farm</option>
                              <option>EV Fleet Infrastructure</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Technical Brief</label>
                          <textarea required name="brief" rows={4} placeholder="Describe the scope of your energy transition goals..." className="w-full bg-slate-50 border-2 border-transparent p-6 rounded-3xl focus:bg-white focus:border-solar-sky outline-none transition-all font-bold placeholder:text-slate-200 resize-none"></textarea>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <input type="checkbox" name="tfs" className="w-5 h-5 rounded-md border-slate-300 text-solar-sky focus:ring-solar-sky" />
                          <span className="text-xs text-slate-500 font-medium">Request priority technical feasibility study (TFS)</span>
                        </div>

                        <button type="submit" className="w-full bg-solar-deep hover:bg-solar-sky text-white py-8 rounded-[2rem] font-black uppercase tracking-[0.3em] text-[11px] shadow-4xl shadow-solar-deep/20 transition-all flex items-center justify-center gap-4 group">
                          SUBMIT PROJECT BRIEF
                          <i className="fas fa-paper-plane group-hover:translate-x-2 transition-transform"></i>
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="text-center py-20 space-y-10 animate-zoom-in">
                      <div className="w-32 h-32 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center text-5xl mx-auto border-8 border-white shadow-2xl">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="space-y-6">
                        <h3 className="text-4xl font-black text-solar-deep tracking-tight">Transmission Received</h3>
                        <p className="text-slate-500 font-medium text-xl max-w-sm mx-auto leading-relaxed">
                          Your technical brief has been routed to our <span className="text-solar-primary font-bold">Project Architecture Team</span>.
                        </p>
                      </div>
                      <div className="pt-8">
                        <button onClick={() => setSubmitted(false)} className="bg-slate-100 text-slate-400 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-solar-deep hover:text-white transition-all">
                          Initialize New Brief
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4">
                <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Global Presence</span>
                <h2 className="text-5xl font-black text-solar-deep tracking-tight">Visit Our Headquarters</h2>
              </div>
              <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="w-12 h-12 bg-solar-primary rounded-2xl flex items-center justify-center text-white text-xl">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-solar-deep font-black">101 Energy Plaza</p>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
            <div className="rounded-[4rem] overflow-hidden shadow-4xl border-8 border-white relative h-[500px] group">
              <iframe
  title="Wattex HQ Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d970486.7940225814!2d78.47345360000001!3d18.16557045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x61b4f62af6f2422b%3A0x707fd684483d9173!2sWattex%20Energy!5e0!3m2!1sen!2sin!4v1772634042139!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  className="grayscale group-hover:grayscale-0 transition-all duration-1000"
></iframe>
              <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10 rounded-[3.5rem]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 border-t border-slate-50 bg-slate-50/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {['ISO 9001 Certified', 'LEED Platinum Partner', 'TÜV Rheinland Approved', 'Engineering Council Member'].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 font-black text-solar-deep uppercase tracking-tighter text-xl">
                <i className="fas fa-award text-solar-primary"></i>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

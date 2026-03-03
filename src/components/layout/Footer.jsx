import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-solar-deep py-24 border-t border-white/5 text-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-4 gap-16">
        <div className="col-span-2 space-y-8">
          <Link to="/" className="flex items-center gap-4">
            <div className="w-12 h-12 bg-solar-primary rounded-xl flex items-center justify-center text-white font-black text-2xl">
              W
            </div>
            <span className="text-3xl font-black tracking-tighter uppercase">WATTEX</span>
          </Link>
          <p className="text-white/40 text-lg leading-relaxed max-w-sm">
            Engineering a carbon-neutral world through industrial-grade solar infrastructure.
          </p>
          <div className="flex gap-6 pt-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-solar-primary hover:text-white transition-all" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-solar-primary hover:text-white transition-all" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-solar-primary hover:text-white transition-all" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Solutions</h4>
          <ul className="space-y-4 text-white/40 font-bold text-sm">
            <li><Link to="/commercial" className="hover:text-white transition-colors">Commercial Solar</Link></li>
            <li><Link to="/residential" className="hover:text-white transition-colors">Residential Rooftop</Link></li>
            <li><Link to="/utility-scale" className="hover:text-white transition-colors">Utility Scale Plants</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Contact</h4>
          <p className="text-white/40 font-bold text-sm">
            101 Energy Plaza, SF<br />wattexenergy@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

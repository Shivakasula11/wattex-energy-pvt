import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CommercialSolar from './pages/CommercialSolar';
import ResidentialSolar from './pages/ResidentialSolar';
import HousingSociety from './pages/HousingSociety';
import UtilityScaleSolar from './pages/UtilityScaleSolar';
import OffGridSolar from './pages/OffGridSolar';
import OnGridSolar from './pages/OnGridSolar';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import SolarCalculator from './pages/SolarCalculator';

import OurProjects from './pages/OurProjects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/commercial" element={<CommercialSolar />} />
          <Route path="/residential" element={<ResidentialSolar />} />
          <Route path="/housing" element={<HousingSociety />} />
          <Route path="/utility-scale" element={<UtilityScaleSolar />} />
          <Route path="/off-grid" element={<OffGridSolar />} />
          <Route path="/on-grid" element={<OnGridSolar />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/calculator" element={<SolarCalculator />} />
         
           <Route path="/projects" element={<OurProjects />} />
          {/* Fallback to Home */}
          {/* <Route path="*" element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

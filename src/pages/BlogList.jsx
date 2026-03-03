import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BLOGS from '../data/blogs';
import ReviewsGrid from '../components/sections/ReviewsGrid';

const BlogList = () => {
  const [activeCategory] = useState('All');
  const navigate = useNavigate();
  const filteredBlogs = activeCategory === 'All' ? BLOGS : BLOGS.filter((b) => b.category === activeCategory);

  return (
    <div className="animate-fade-in pt-32 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black text-solar-deep tracking-tighter">The Journal</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              onClick={() => { navigate(`/blog/${blog.id}`); window.scrollTo(0, 0); }}
              className="bg-white rounded-[3rem] overflow-hidden group cursor-pointer shadow-3xl hover:-translate-y-2 transition-all duration-500 border border-slate-100"
            >
              <div className="h-72 overflow-hidden relative">
                <img src={blog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={blog.title} />
              </div>
              <div className="p-10 space-y-4">
                <h3 className="text-2xl font-black text-solar-deep group-hover:text-solar-primary transition-colors leading-tight">{blog.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <ReviewsGrid />
      </div>
    </div>
  );
};

export default BlogList;

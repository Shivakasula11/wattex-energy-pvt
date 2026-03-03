import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BLOGS from '../data/blogs';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = BLOGS.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="pt-32 pb-40 bg-white min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl text-center py-20">
          <h1 className="text-4xl font-black text-solar-deep mb-4">Post Not Found</h1>
          <button onClick={() => navigate('/blogs')} className="text-solar-primary font-black uppercase text-xs tracking-widest">
            <i className="fas fa-arrow-left mr-2"></i> Back to Journal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-40 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <button onClick={() => navigate('/blogs')} className="mb-12 text-solar-primary font-black uppercase text-xs tracking-widest flex items-center gap-2 group">
          <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i> Back to Journal
        </button>
        <h1 className="text-4xl md:text-7xl font-black text-solar-deep mb-8 leading-tight tracking-tighter">{blog.title}</h1>
        <div className="prose prose-xl prose-slate max-w-none blog-content-styles" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </div>
    </div>
  );
};

export default BlogPost;

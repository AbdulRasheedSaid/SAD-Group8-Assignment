import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Jobs", "Studio", "For Sale", "Events"];

const posts = [
  { id: 1, category: "Jobs", title: "Assistant Gallery Monitor", author: "Dean's Office", date: "2h ago" },
  { id: 2, category: "Studio", title: "Sublet: Edgewood Ave Studio", author: "Sarah M.", date: "5h ago" },
  { id: 3, category: "For Sale", title: "Large Format Camera Lens", author: "Tech Shop", date: "1d ago" },
  { id: 4, category: "Events", title: "Thursday Night Critique", author: "Painting Dept", date: "3h ago" },
  { id: 5, category: "Jobs", title: "Graphic Design Internship", author: "Yale Press", date: "1d ago" },
  { id: 6, category: "Studio", title: "Shared Darkroom Space", author: "Photo Dept", date: "2d ago" },
];

const BulletinBoard = () => {
  const [filter, setFilter] = useState("All");

  const filteredPosts = filter === "All" 
    ? posts 
    : posts.filter(post => post.category === filter);

  return (
    <section className="py-24 px-8 md:px-16 bg-[#fdfcf0]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 italic text-slate-900 border-l-8 border-yellow-400 pl-6">
            Community Bulletin Board
          </h2>
          
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? "bg-green-600 text-white" 
                  : "bg-white text-slate-900 border-2 border-slate-900 hover:bg-yellow-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white border-2 border-slate-900 p-6 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] transition-shadow"
              >
                <div>
                  <div className="flex justify-between items-center mb-4 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-slate-900 mb-8 underline decoration-yellow-400 decoration-2 underline-offset-4">
                    {post.title}
                  </h3>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <span className="text-sm italic font-medium">By {post.author}</span>
                  <button className="text-green-600 font-black text-xl hover:translate-x-1 transition-transform">
                    →
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default BulletinBoard;
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    category: "Exhibition",
    title: "Side Show: MFA Painting & Printmaking",
    date: "Jan 15 - Feb 10",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80",
    size: "large",
  },
  {
    id: 2,
    category: "Lecture",
    title: "The Politics of Typography with Silas Munro",
    date: "Jan 22, 6:00 PM",
    image: null,
    size: "small",
  },
  {
    id: 3,
    category: "Workshop",
    title: "Material Studies: Post-Digital Sculpture",
    date: "Feb 05",
    image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=800&q=80",
    size: "small",
  },
  {
    id: 4,
    category: "Public Event",
    title: "Open Studios 2026",
    date: "April 12-14",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80",
    size: "medium",
  },
];

const HappeningAtSoA = () => {
  return (
    <section id="exhibitions" className="py-24 px-8 md:px-16 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-slate-900 pb-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900">
            Happening <br /> <span className="text-green-600 font-outline-2">at SoA</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm font-mono text-slate-500 mt-4 md:mt-0">
          Current exhibitions, lectures, and public programs at the Yale School of Art.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative flex flex-col justify-between border-2 border-slate-900 p-6 transition-all hover:bg-[#fdfcf0] ${
              event.size === "large" ? "lg:col-span-2" : ""
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-widest bg-yellow-400 px-2 py-1">
                  {event.category}
                </span>
                <span className="text-sm font-mono font-bold">{event.date}</span>
              </div>
              
              <h3 className="text-3xl font-bold leading-tight mb-6 group-hover:text-green-700 transition-colors">
                {event.title}
              </h3>
            </div>

            {event.image ? (
              <div className="overflow-hidden h-64 w-full bg-slate-100">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center border-t-2 border-slate-900 border-dashed">
                <p className="text-slate-400 italic font-mono uppercase text-center p-4">
                  Free and open to the public. <br /> Registration required.
                </p>
              </div>
            )}
            
            <button className="mt-6 self-start text-sm font-black uppercase tracking-widest border-b-2 border-slate-900 group-hover:border-green-600 transition-all">
              View Details +
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HappeningAtSoA;
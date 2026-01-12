import { motion } from "framer-motion";
import { BiCalendarEvent, BiEnvelope } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const upcomingDates = [
  { day: "05", month: "FEB", event: "Spring Semester Open Studios" },
  { day: "12", month: "FEB", event: "MFA Thesis Exhibition: Part I" },
  { day: "28", month: "FEB", event: "Visiting Artist Lecture: Sculpture" },
];

const CalendarNewsletter = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full border-t-2 border-slate-900">
      
      <div className="w-full lg:w-1/2 p-8 md:p-16 bg-white">
        <div className="flex items-center gap-4 mb-12">
          <BiCalendarEvent size={32} className="text-green-600" />
          <h2 className="text-3xl font-black uppercase tracking-tighter italic">Important Dates</h2>
        </div>

        <div className="space-y-8">
          {upcomingDates.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 border-b border-slate-100 pb-6 group cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center bg-yellow-400 p-3 min-w-7.5 h-17.5 font-black">
                <span className="text-2xl leading-none">{item.day}</span>
                <span className="text-xs">{item.month}</span>
              </div>
              <p className="text-xl font-bold group-hover:text-green-600 transition-colors uppercase tracking-tight">
                {item.event}
              </p>
            </motion.div>
          ))}
        </div>
        
        <button className="mt-12 text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
          View Full Academic Calendar <BsArrowRight />
        </button>
      </div>

      <motion.div 
        initial={{ backgroundColor: "#14532d" }}
        whileInView={{ backgroundColor: "#166534" }}
        className="w-full lg:w-1/2 p-8 md:p-16 text-white flex flex-col justify-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full overflow-hidden opacity-10 pointer-events-none whitespace-nowrap py-4">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="text-9xl font-black uppercase"
          >
            STAY CONNECTED • SUBSCRIBE • STAY CONNECTED • SUBSCRIBE •
          </motion.div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <BiEnvelope size={32} className="text-yellow-400" />
            <h2 className="text-4xl font-black uppercase tracking-tighter">The Weekly Bulletin</h2>
          </div>
          
          <p className="text-green-100 mb-10 max-w-md text-lg leading-relaxed">
            Get the latest news on exhibitions, visiting artist lectures, and community updates delivered to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-0 border-2 border-white">
            <input 
              type="email" 
              placeholder="YOUR@EMAIL.COM" 
              className="bg-transparent p-4 flex-1 outline-none placeholder:text-green-300 font-mono"
            />
            <button className="bg-white text-green-900 px-8 py-4 font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors">
              Join
            </button>
          </form>
          
          <p className="mt-4 text-[10px] font-mono text-green-300 uppercase">
            * By subscribing, you agree to Yale University's privacy policy.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CalendarNewsletter;
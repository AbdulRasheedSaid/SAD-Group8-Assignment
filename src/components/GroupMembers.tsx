import { motion } from "framer-motion";
import { BsPeopleFill } from "react-icons/bs";

const members = [
  { name: "Awula Tanti Moses", id: "2425401995" },
  { name: "Acquah Emmanuel", id: "2425401371" },
  { name: "Abdul-Rasheed Said Boakye", id: "2425404513" },
  { name: "Quaye Nahil Alvin", id: "2425401608" },
  { name: "Osabutey Yaw Felix", id: "2425402255" },
  { name: "Atisa Bernard", id: "2425403163" },
  { name: "Asibe Boakye Osei Kwame", id: "2425401614" },
  { name: "Mensah Enoch", id: "2425402782" },
  { name: "Allotey Jonathan Addotey", id: "2425402312" },
  { name: "Jiagge Emekor Kojo", id: "2425403135" },
];

const GroupMembers = () => {
  return (
    <section className="bg-slate-50 py-20 px-8 md:px-16 border-t-2 border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-green-600 mb-4">
              <BsPeopleFill size={24} />
              <span className="font-mono text-sm tracking-[0.3em] uppercase font-bold">
                System Analysis Group 8
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Project <br /> <span className="text-green-600">Contributors</span>
            </h2>
          </div>
          <div className="bg-yellow-400 p-4 border-2 border-slate-900 font-mono text-xs font-bold uppercase">
            Total Members: 10
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l-2 border-t-2 border-slate-900">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-8 border-r-2 border-b-2 border-slate-900 bg-white hover:bg-green-50 transition-colors group relative overflow-hidden"
            >
              <span className="absolute right-4 top-4 font-mono text-slate-200 group-hover:text-green-200 transition-colors text-4xl font-black">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <div className="relative z-10">
                <h3 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-green-700 transition-colors">
                  {member.name}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <p className="font-mono text-xs text-slate-500 font-bold tracking-wider">
                    ID: {member.id}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupMembers;
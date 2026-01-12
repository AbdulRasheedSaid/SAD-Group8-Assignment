import { motion } from "framer-motion";

const footerLinks = {
  academic: [
    { name: "Programs", href: "#" },
    { name: "Faculty", href: "#" },
    { name: "Exhibitions", href: "#" },
    { name: "Publications", href: "#" },
  ],
  quickLinks: [
    { name: "Yale Home", href: "#" },
    { name: "The Wiki (Legacy)", href: "#" },
    { name: "Art Library", href: "#" },
    { name: "Webmail", href: "#" },
  ],
  administrative: [
    { name: "Admissions", href: "#" },
    { name: "Financial Aid", href: "#" },
    { name: "Health Services", href: "#" },
    { name: "Safety & Security", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 px-8 md:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        <div className="space-y-6">
          <h2 className="text-3xl font-black tracking-tighter uppercase leading-none">
            Yale <br /> <span className="text-green-500">School of Art</span>
          </h2>
          <p className="text-slate-400 text-sm font-mono leading-relaxed">
            1156 Chapel Street <br />
            P.O. Box 208339 <br />
            New Haven, CT 06520
          </p>
          <div className="flex gap-4">
            {['IG', 'TW', 'FB'].map(social => (
              <div key={social} className="w-10 h-10 border border-white/20 flex items-center justify-center text-xs font-bold hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                {social}
              </div>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-green-500 font-bold mb-8">
              {title.replace(/([A-Z])/g, ' $1')}
            </h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-slate-300 hover:text-white transition-colors text-lg font-medium inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          © 2026 Yale School of Art. Built for System Analysis Individual Project.
        </p>
        <div className="flex gap-8 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          <a href="#" className="hover:text-yellow-400 transition-colors">Accessibility</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Contact Webmaster</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
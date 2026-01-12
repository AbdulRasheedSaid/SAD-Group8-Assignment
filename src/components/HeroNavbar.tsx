import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { BiMenu, BiX } from "react-icons/bi";

const HeroNavbar = ({ bg }: { bg?: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Admissions", href: "#admissions" },
        { name: "Exhibitions", href: "#exhibitions" },
        { name: "Painting/Printmaking", href: "#painting" },
        { name: "Graphic Design", href: "#design" },
        { name: "Photography", href: "#photo" },
        { name: "Sculpture", href: "#sculpture" },
    ];

    const navVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <motion.nav
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className={`fixed top-0 left-0 right-0 px-8 py-6 lg:px-16 flex justify-between items-center w-full z-50 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'} ${bg ? bg : 'bg-transparent'}`}
            >
                <motion.a 
                    variants={itemVariants} 
                    href="/" 
                    className="text-xl font-black tracking-tighter uppercase text-slate-900 border-b-4 border-yellow-400 leading-none"
                >
                    Yale <span className="block text-xs font-mono tracking-widest text-green-700">School of Art</span>
                </motion.a>

                <div className="hidden lg:flex flex-row gap-10 font-bold text-[13px] uppercase tracking-widest text-slate-700">
                    {navLinks.slice(0, 4).map((link) => (
                        <motion.a
                            key={link.name}
                            variants={itemVariants}
                            href={link.href}
                            className="relative group overflow-hidden"
                        >
                            <span className="block transition-transform duration-300 group-hover:-translate-y-full">{link.name}</span>
                            <span className="absolute top-0 left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-green-600 italic">
                                {link.name}
                            </span>
                        </motion.a>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <motion.a
                        variants={itemVariants}
                        href="#apply"
                        className="hidden md:block text-xs font-black uppercase tracking-widest bg-slate-900 text-white px-6 py-3 hover:bg-green-600 transition-colors"
                    >
                        Apply 2026
                    </motion.a>

                    <motion.button
                        variants={itemVariants}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="p-2 bg-slate-100 text-slate-900 hover:bg-yellow-400 transition-colors lg:hidden"
                    >
                        <BiMenu size={28} />
                    </motion.button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 200 }}
                        className="fixed inset-0 z-100 bg-[#fdfcf0] flex flex-col p-8 md:p-16 lg:hidden"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="font-black text-2xl tracking-tighter">NAVIGATE</span>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="p-4 bg-slate-900 text-white rounded-full hover:rotate-90 transition-transform duration-300"
                            >
                                <BiX size={32} />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900 hover:text-green-600 transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>

                        <div className="mt-auto border-t-2 border-slate-900 pt-8 flex justify-between items-end">
                            <div>
                                <p className="font-mono text-sm text-slate-500 uppercase mb-2">Inquiries</p>
                                <a href="mailto:artschool.admissions@yale.edu" className="text-xl font-bold underline decoration-yellow-400">artschool.admissions@yale.edu</a>
                            </div>
                            <div className="hidden sm:block text-right">
                                <p className="font-mono text-xs text-slate-400">1156 Chapel Street<br/>New Haven, CT 06510</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HeroNavbar;
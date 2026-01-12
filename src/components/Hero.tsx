import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroNavbar from "./HeroNavbar";

const Hero = () => {
    const containerRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const rotateBg = useTransform(scrollYProgress, [0, 1], [0, 45]);

    const containerVars: Variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVars: Variants = {
        initial: { y: 30, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section 
            ref={containerRef}
            className="relative h-screen w-full flex flex-col justify-center items-start px-8 md:px-16 bg-[#fdfcf0] overflow-hidden"
        >
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <HeroNavbar bg="bg-[#fdfcf0]" />

            <motion.div
                variants={containerVars}
                initial="initial"
                animate="animate"
                className="z-10 w-full"
            >
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
                    <div className="flex-1">
                        <motion.span
                            variants={itemVars}
                            className="text-sm font-mono tracking-[0.3em] uppercase text-green-700 mb-6 block font-bold"
                        >
                            Established 1869
                        </motion.span>

                        <motion.h1
                            variants={itemVars}
                            className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter text-slate-900"
                        >
                            YALE <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 via-green-500 to-green-600">
                                SCHOOL OF ART
                            </span>
                        </motion.h1>
                    </div>

                    <div className="flex-1 lg:pl-12 border-l-0 lg:border-l-4 border-yellow-400">
                        <motion.p
                            variants={itemVars}
                            className="text-xl md:text-2xl text-slate-800 max-w-xl leading-relaxed font-medium"
                        >
                            Redefining the visual landscape. A collaborative environment where 
                            tradition meets radical experimentation.
                        </motion.p>

                        <motion.div
                            variants={itemVars}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <button className="px-10 py-4 bg-green-600 text-white font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200/50 rounded-none uppercase tracking-wider">
                                Explore Programs
                            </button>
                            <button className="px-10 py-4 border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all rounded-none uppercase tracking-wider">
                                Apply Now
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                style={{ y: yBg, rotate: rotateBg }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute right-[-5%] top-[10%] w-[500px] h-[500px] border-[60px] border-yellow-400 rounded-full pointer-events-none"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
                className="absolute left-[10%] bottom-[5%] w-32 h-32 bg-green-500 opacity-20 rotate-12 pointer-events-none"
            />
        </section>
    );
};

export default Hero;
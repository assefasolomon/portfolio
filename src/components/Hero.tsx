import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { HERO_CONTENT } from "../constants";
import myImage from "../assets/solomon.png";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left"
        >
          <div className="inline-block px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-6 backdrop-blur-sm">
            <span className="text-primary font-semibold tracking-wide text-sm uppercase">
              {HERO_CONTENT.role}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {HERO_CONTENT.name}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
            {HERO_CONTENT.subheadline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 bg-white text-darker font-bold rounded-lg hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
            >
              Contact Me <ArrowRight size={20} />
            </a>
            <a
              href="/resume.pdf"
              download="Solomon.Assefa.pdf"
              className="flex items-center gap-2 px-8 py-4 bg-slate-800/50 text-white border border-slate-700 font-semibold rounded-lg hover:bg-slate-800 transition-colors hover:border-primary/50"
            >
              Download Resume <Download size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[400px] h-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl rotate-6 opacity-20 blur-sm"></div>
            <div className="absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
              <img
                src={myImage}
                alt="Solomon Assefa"
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "../constants";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-darker relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-primary block"></span>
              About Me
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>{ABOUT_CONTENT.description1}</p>
              <p>{ABOUT_CONTENT.description2}</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                <h3 className="text-3xl font-bold text-primary mb-1">2+</h3>
                <p className="text-sm text-slate-500 uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                <h3 className="text-3xl font-bold text-secondary mb-1">10+</h3>
                <p className="text-sm text-slate-500 uppercase tracking-wider">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 border-2 border-slate-800 rounded-full animate-[spin_10s_linear_infinite] border-t-primary border-r-transparent border-b-transparent border-l-transparent opacity-20"></div>
              <div className="absolute inset-4 border-2 border-slate-800 rounded-full animate-[spin_15s_linear_infinite_reverse] border-t-secondary border-r-transparent border-b-transparent border-l-transparent opacity-20"></div>
              <img
                src="https://picsum.photos/seed/code/600/600?grayscale"
                alt="Coding Environment"
                className="w-full h-full object-cover rounded-full p-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

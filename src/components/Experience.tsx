import React from "react";
import { motion } from 'framer-motion';
import { Briefcase } from "lucide-react";
import { EXPERIENCE_DATA } from "../constants";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-darker relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 space-y-12">
          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12 md:pl-0"
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary border-4 border-darker shadow-[0_0_10px_rgba(59,130,246,0.5)] md:left-1/2 md:-translate-x-1/2 z-10"></div>

              <div
                className={`md:flex items-start justify-between gap-10 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block w-1/2" />

                <div className="md:w-1/2 relative">
                  <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all hover:bg-slate-900">
                    <div className="flex items-center gap-2 mb-2 text-primary text-sm font-semibold uppercase tracking-wide">
                      <Briefcase size={16} />
                      {item.company}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {item.role}
                    </h3>
                    <span className="text-slate-500 text-sm mb-4 block">
                      {item.period}
                    </span>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-slate-400 text-sm"
                        >
                          <span className="min-w-[6px] h-[6px] rounded-full bg-secondary mt-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Arrow for desktop */}
                  <div
                    className={`hidden md:block absolute top-8 w-4 h-4 bg-slate-900 border-b border-l border-slate-800 transform rotate-45 ${
                      index % 2 === 0 ? "-left-2" : "-right-2"
                    }`}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import { motion } from "framer-motion";
import { SKILLS_DATA } from "../constants";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A curated list of technologies I use to build scalable AI solutions
            and robust applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS_DATA.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/20">
                <category.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 rounded-full border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

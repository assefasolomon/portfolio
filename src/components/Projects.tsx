import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS_DATA } from "../constants";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-400 max-w-xl">
              A selection of my work ranging from national-scale platforms to
              experimental AI models.
            </p>
          </div>
          <a
            href="#"
            className="text-primary hover:text-white transition-colors font-medium flex items-center gap-2"
          >
            View GitHub <ArrowUpRightIcon />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-slate-700 transition-all duration-300 ${
                project.isFeatured
                  ? "md:col-span-2 flex flex-col md:flex-row"
                  : ""
              }`}
            >
              <div
                className={`overflow-hidden ${
                  project.isFeatured ? "md:w-3/5 h-64 md:h-auto" : "h-64"
                }`}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-darker/50 group-hover:bg-darker/20 transition-colors"></div>
              </div>

              <div
                className={`p-8 flex flex-col justify-center ${
                  project.isFeatured ? "md:w-2/5" : ""
                }`}
              >
                {project.isFeatured && (
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Featured Project
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <button className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors">
                    <Github size={18} /> Code
                  </button>
                  <button className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowUpRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

export default Projects;

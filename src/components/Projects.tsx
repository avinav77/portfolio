import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data/data";

function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Things I've built
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-zinc-500">
            A selection of projects that showcase my approach to building
            practical, maintainable software.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {portfolioData.projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 ${
                index === 0 ? "lg:col-span-2 lg:p-10" : ""
              }`}
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/[0.06] blur-3xl transition duration-500 group-hover:bg-indigo-500/[0.12]" />

              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                      Project 0{index + 1}
                    </p>

                    <h3
                      className={`font-semibold ${
                        index === 0
                          ? "text-3xl sm:text-4xl"
                          : "text-2xl"
                      }`}
                    >
                      {project.name}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-zinc-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>

                <p
                  className={`mt-6 leading-7 text-zinc-400 ${
                    index === 0 ? "max-w-3xl text-base" : ""
                  }`}
                >
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white transition hover:text-zinc-300"
                  >
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 transition hover:text-white"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
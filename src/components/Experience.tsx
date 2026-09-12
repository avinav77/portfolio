import { motion } from "motion/react";
import { portfolioData } from "../data/data";

function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Experience
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Where I've been building
          </h2>
        </motion.div>

        <div className="space-y-12">
          {portfolioData.experience.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid gap-6 border-t border-white/10 pt-8 md:grid-cols-[180px_1fr]"
            >
              <div>
                <p className="text-sm text-zinc-500">
                  {experience.duration}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {experience.role}
                </h3>

                <p className="mt-1 text-zinc-400">
                  {experience.company}
                </p>

                <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
                  {experience.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
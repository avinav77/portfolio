import { motion } from "motion/react";
import { portfolioData } from "../data/data";

const skillGroups = [
  {
    title: "Languages",
    skills: portfolioData.skills.languages,
  },
  {
    title: "Frontend",
    skills: portfolioData.skills.frontend,
  },
  {
    title: "Backend",
    skills: portfolioData.skills.backend,
  },
  {
    title: "Databases",
    skills: portfolioData.skills.databases,
  },
  {
    title: "Tools",
    skills: portfolioData.skills.tools,
  },
  {
    title: "Concepts",
    skills: portfolioData.skills.concepts,
  },
];

function Skills() {
  return (
    <section id="skills" className="border-y border-white/5 bg-white/[0.015] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Skills
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            My technical toolkit
          </h2>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-zinc-950 p-7 transition hover:bg-zinc-900"
            >
              <h3 className="mb-5 text-sm font-medium text-zinc-300">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-white/5 px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/10 hover:text-white"
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
}

export default Skills;
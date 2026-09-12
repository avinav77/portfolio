import { ArrowUpRight, FileText } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data/data";

function Resume() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/[0.08] blur-[100px]" />

          <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <FileText size={19} />
              </div>

              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                Resume
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Interested in my background?
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                My resume includes a detailed overview of my experience,
                projects, technical skills, and education.
              </p>
            </div>

            <a
              href={portfolioData.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              View Resume
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
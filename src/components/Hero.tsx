import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data/data";

function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background */}
      <div className="grid-background absolute inset-0 -z-20" />

      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.08] blur-[120px]" />

      <div className="absolute right-0 top-1/4 -z-10 h-64 w-64 rounded-full bg-purple-500/[0.05] blur-[100px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Status */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to software engineering opportunities
          </div>

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            {personal.role}
          </p>

          <h1 className="text-5xl font-bold tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            {personal.name}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            {personal.tagline}
          </p>

          {/* Tech highlights */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Node.js", "Express", "C#", ".NET", "Angular"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-500"
                >
                  {tech}
                </span>
              ),
            )}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Explore my work
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Resume ↗
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              Email ↗
            </a>
          </div>
        </motion.div>

        {/* Right-side engineering card */}
        {/* Profile image */}
<motion.div
  initial={{ opacity: 0, scale: 0.95, x: 30 }}
  animate={{ opacity: 1, scale: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.15 }}
  className="hidden lg:block"
>
  <div className="relative mx-auto w-full max-w-md">
    {/* Ambient glow */}
    <div className="absolute -inset-6 rounded-[2rem] bg-white/[0.03] blur-3xl" />

    {/* Image container */}
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900">
      <div className="aspect-[4/5]">
        <img
          src={personal.image}
          alt={`${personal.name} - ${personal.role}`}
          className="h-full w-full object-cover object-center grayscale transition duration-700 hover:grayscale-0"
        />
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950/80 to-transparent" />

      {/* Name overlay */}
      <div className="absolute bottom-6 left-6">
        <p className="text-sm font-medium text-white">
          {personal.name}
        </p>

        <p className="mt-1 text-xs text-zinc-400">
          {personal.role}
        </p>
      </div>
    </div>
  </div>
</motion.div>
      </div>

      <a
        href="#experience"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-zinc-600 transition hover:text-white sm:block"
        aria-label="Scroll to experience"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}

export default Hero;
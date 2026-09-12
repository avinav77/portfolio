import { Mail } from "lucide-react";
import { portfolioData } from "../data/data";

function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xl font-semibold">{personal.name}</p>

            <p className="mt-2 text-sm text-zinc-600">
              {personal.role}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
            >
              <Mail size={16} />
              Email
            </a>

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
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} {personal.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
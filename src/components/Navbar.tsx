import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolioData } from "../data/data";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { personal } = portfolioData;

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-sm font-semibold tracking-wide text-white"
        >
          {personal.name}
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm transition ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-white"
                }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute -bottom-5 left-1/2 h-px w-5 -translate-x-1/2 bg-white" />
                )}
              </a>
            );
          })}

          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-white/30 hover:bg-white/5"
          >
            Resume
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-lg border border-white/10 p-2 text-zinc-400 transition hover:text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-zinc-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white"
            >
              View Resume ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
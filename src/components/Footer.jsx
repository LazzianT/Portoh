import { ArrowUpRight, Github, Instagram, Linkedin } from 'lucide-react';
import { navLinks } from '../data/portfolio.js';
import { CurvyArrow, Sparkle } from './DecorativeElements.jsx';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/LazzianT' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lazzian-al-falah-a18733306/' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -left-20 -top-10 h-56 w-56 rounded-full bg-navy-800 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-10 top-8 h-24 w-24 dots-light opacity-40" aria-hidden="true" />
      <Sparkle className="absolute right-1/3 top-6 h-5 w-5" />

      <div className="container-x relative flex flex-col gap-10 py-14 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <a href="#home" className="relative inline-flex items-center" aria-label="Lazzian Al Falah home">
            <span className="font-display text-4xl font-extrabold leading-none tracking-tighter text-white">
              L
            </span>
            <span className="ml-0.5 mt-4 h-2.5 w-2.5 rounded-full bg-lime" />
          </a>
          <p className="mt-5 text-sm leading-relaxed text-white/55">
            Web developer turning ideas into real-world applications. Always curious, always
            learning, always building.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-lime hover:bg-lime hover:text-navy"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 transition-colors hover:text-lime">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Get in Touch
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:alfalah.lazzian03@gmail.com"
                  className="text-white/70 transition-colors hover:text-lime"
                >
                  alfalah.lazzian03@gmail.com
                </a>
              </li>
              <li className="text-white/70">Indonesia</li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lazzian-al-falah-a18733306/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 transition-colors hover:text-lime"
                >
                  linkedin.com/in/lazzian-al-falah-a18733306
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Let&apos;s talk
            </p>
            <a href="#contact" className="btn-lime mt-4">
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <CurvyArrow className="mt-3 hidden h-10 w-16 sm:block" color="#B8F500" />
          </div>
        </div>
      </div>

      <div className="container-x relative border-t border-white/10 py-6">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Lazzian Al Falah. All rights reserved.</p>
          <p>Built with React, Vite &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

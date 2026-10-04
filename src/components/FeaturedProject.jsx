import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { featuredProject } from '../data/portfolio.js';
import { Sparkle } from './DecorativeElements.jsx';

export default function FeaturedProject() {
  const p = featuredProject;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-navy p-7 shadow-float sm:p-9"
    >
      <div className="pointer-events-none absolute -left-16 -top-24 h-64 w-64 rounded-full bg-navy-800 blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 dot-grid opacity-[0.12]" aria-hidden="true" />
      <Sparkle className="absolute left-1/2 top-6 hidden h-5 w-5 -translate-x-1/2 lg:block" />

      <div className="relative grid flex-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy">
            <Star className="h-3.5 w-3.5 fill-navy" />
            Featured Project
          </span>

          <h3 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {p.title}
          </h3>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {p.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            aria-label="Explore WMS project"
            className="mt-8 inline-grid h-14 w-14 place-items-center rounded-full bg-white/90 text-navy transition-transform duration-300 group-hover:translate-x-1 hover:scale-105"
          >
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 6 }}
          whileInView={{ opacity: 1, x: 0, rotate: 2 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotate: 0, y: -6 }}
          className="relative lg:-mb-10 lg:-mr-8 lg:-mt-6"
        >
          <div className="overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
            <img
              src={p.image}
              alt="WMS warehouse management dashboard screenshot"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative h-full drop-shadow-[0_18px_28px_rgba(6,27,65,0.14)] transition-[filter] duration-300 hover:drop-shadow-[0_30px_45px_rgba(6,27,65,0.22)]"
    >
      <div className="card-shape flex h-full flex-col rounded-[1.75rem] bg-white">
        <span
          aria-hidden="true"
          className="absolute left-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full bg-navy font-display text-sm font-extrabold text-lime shadow-card transition-colors duration-300 group-hover:bg-lime group-hover:text-navy"
        >
          {String(index + 2).padStart(2, '0')}
        </span>

        <div className="relative m-3 min-h-[10rem] flex-1 overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-soft via-white to-lime/25">
          <span
            className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-lime/40 blur-2xl"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute bottom-3 left-3 h-12 w-12 dot-grid opacity-[0.14]"
            aria-hidden="true"
          />
          <img
            src={project.image}
            alt={`${project.title} interface`}
            className="absolute inset-0 h-full w-full object-contain p-6 drop-shadow-[0_16px_20px_rgba(6,27,65,0.18)] transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.04]"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-4 px-6 pb-8 pt-1">
          <div>
            <h3 className="font-display text-xl font-bold leading-snug text-navy">{project.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{project.description}</p>
          </div>

          <div className="flex items-end justify-between gap-4">
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="tech-pill">
                  {t}
                </li>
              ))}
            </ul>
            <span
              aria-hidden="true"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-lime group-hover:text-navy"
            >
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

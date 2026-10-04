import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolio.js';
import FeaturedProject from './FeaturedProject.jsx';
import ProjectCard from './ProjectCard.jsx';
import { Note, CurvyArrow } from './DecorativeElements.jsx';

export default function Projects() {
  const [pm, sendit, lazytech, school] = projects;

  return (
    <section id="projects" className="relative overflow-hidden py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted">
              <span className="h-2.5 w-2.5 rounded-full bg-lime" />
              Projects
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl">
              Featured <span className="text-lime">Projects</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Here are some of the projects I&apos;ve worked on. Each project is built with real
              problems in mind and designed to create meaningful impact.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            href="#contact"
            className="btn-ghost shrink-0 self-start sm:self-auto"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>

        <div className="relative mt-20">
          <Note className="absolute -top-10 right-10 z-20 hidden text-xl xl:block" rotate="-6deg">
            Real Projects.
            <br />
            Real Impact.
            <CurvyArrow className="mt-1 h-10 w-16" color="#061B41" />
          </Note>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FeaturedProject />
            </div>
            <ProjectCard project={pm} />

            <ProjectCard project={sendit} index={1} />
            <ProjectCard project={lazytech} index={2} />
            <ProjectCard project={school} index={3} />
          </div>

          <div className="mt-2 hidden justify-end xl:flex">
            <Note className="text-xl" rotate="4deg">
              More Projects
              <br />
              Coming Soon!
              <CurvyArrow className="ml-auto mt-1 h-10 w-16" color="#061B41" />
            </Note>
          </div>
        </div>
      </div>
    </section>
  );
}

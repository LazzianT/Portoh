import { motion } from 'framer-motion';
import { ArrowRight, Atom, Database, Hexagon, Wind } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import { LimeBlob, Sparkle, DotsGrid, Note, CurvyArrow } from './DecorativeElements.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const techStack = [
  { name: 'React', Icon: Atom },
  { name: 'Node.js', Icon: Hexagon },
  { name: 'SQL Server', Icon: Database },
  { name: 'Tailwind', Icon: Wind },
];

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-8 sm:pt-32 lg:pt-36 lg:pb-16">
      <LimeBlob className="-left-24 top-20 h-72 w-72 sm:h-96 sm:w-96" />

      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-4">
        <div className="relative z-10">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-lime" />
            Hello! I&apos;m
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-4 font-display text-[3.5rem] font-extrabold leading-[0.92] tracking-tight text-navy sm:text-7xl lg:text-[5.75rem]"
          >
            Lazzian
            <span className="mt-1 block text-lime">Al Falah</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted"
          >
            I&apos;m a web developer who loves turning ideas into real-world applications. I
            enjoy building clean, scalable systems with modern technologies and always excited to
            learn something new.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button type="button" onClick={() => scrollTo('#projects')} className="btn-lime">
              See My Work
              <ArrowRight className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => scrollTo('#contact')} className="btn-ghost">
              Contact Me
            </button>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-12">
            <p className="text-sm font-semibold text-navy">Tech I work with</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {techStack.map(({ name, Icon }, i) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  custom={5 + i * 0.5}
                  whileHover={{ y: -6, rotate: -2 }}
                  className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-navy/10 bg-white px-4 py-2.5 shadow-card transition-colors duration-300 hover:border-lime hover:shadow-float"
                  title={name}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-lime group-hover:text-navy">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-navy">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
        >
          <Note className="absolute -left-2 top-4 z-20 hidden text-xl sm:block lg:-left-6" rotate="-8deg">
            Let&apos;s
            <br />
            Create Together!
          </Note>
          <Note
            className="absolute -right-2 top-0 z-20 hidden text-right text-xl sm:block lg:-right-6"
            rotate="4deg"
          >
            Turn
            <br />
            Ideas
            <br />
            into
            <br />
            <span className="scribble-underline pb-1">Real Impact</span>
          </Note>
          <motion.img
            src={profile.heroPortrait}
            alt="Lazzian Al Falah, web developer, with a code card"
            className="relative w-full"
            style={{
              clipPath:
                'polygon(6% 0, 84% 0, 84% 40%, 100% 40%, 100% 100%, 0 100%, 0 26%, 6% 26%)',
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <Sparkle className="absolute -left-4 bottom-16 h-6 w-6" />
          <DotsGrid className="absolute bottom-4 right-6 hidden opacity-70 sm:grid" cols={4} rows={3} />
        </motion.div>
      </div>
    </section>
  );
}

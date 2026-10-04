import { motion } from 'framer-motion';
import { profile, skillCards } from '../data/portfolio.js';
import { CurvyArrow } from './DecorativeElements.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SkillCard({ card, index }) {
  const offsets = [
    'z-30 mt-0',
    'z-20 -ml-2 mt-14 sm:-ml-4 lg:-ml-6',
    'z-10 -ml-2 mt-4 sm:-ml-4 lg:-ml-6',
  ];
  return (
    <motion.img
      src={card.image}
      alt={`${card.title} - ${card.description}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      whileHover={{ y: -10, rotate: 0, zIndex: 40 }}
      className={`h-44 w-auto shrink-0 drop-shadow-[0_18px_22px_rgba(6,27,65,0.30)] transition-[filter] duration-300 hover:drop-shadow-[0_28px_30px_rgba(6,27,65,0.32)] sm:h-52 lg:h-48 ${offsets[index % 3]}`}
      style={{ rotate: card.rotate }}
      loading="lazy"
    />
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-6 bottom-6 -z-10 rounded-[3rem] bg-gradient-to-r from-soft via-soft/40 to-soft/70"
        aria-hidden="true"
      />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative lg:col-span-4"
        >
          <div className="absolute -left-2 -top-2 h-2/3 w-2/3 rounded-[2.5rem] bg-lime/70" aria-hidden="true" />
          <img
            src={profile.aboutPortrait}
            alt="Lazzian Al Falah smiling, pointing forward"
            className="relative w-full max-w-sm rounded-[2.5rem] object-cover shadow-card lg:max-w-none"
            loading="lazy"
          />
          <CurvyArrow className="absolute -bottom-8 right-2 hidden h-14 w-20 lg:block" />
        </motion.div>

        <div className="lg:col-span-4 lg:px-2">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-lime" />
            About Me
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-[2.75rem]"
          >
            Turning Ideas
            <span className="mt-1 block text-lime">into Real Impact</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="mt-5 text-sm leading-relaxed text-muted sm:text-base"
          >
            I&apos;m passionate about web development, problem solving, and creating products that
            make people&apos;s work easier. I enjoy exploring new technologies and continuously
            improving my skills.
          </motion.p>
        </div>

        <div className="lg:col-span-4">
          <div className="flex items-start justify-start overflow-x-auto px-6 pb-8 pt-4 [scrollbar-width:none] lg:justify-center lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
            {skillCards.map((card, i) => (
              <SkillCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

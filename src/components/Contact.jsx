import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import ContactForm from './ContactForm.jsx';
import { CurvyArrow, Note } from './DecorativeElements.jsx';

const details = [
  { icon: Mail, label: 'Email', value: 'alfalah.lazzian03@gmail.com', href: 'mailto:alfalah.lazzian03@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Indonesia', href: undefined },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/lazzian-al-falah-a18733306', href: 'https://www.linkedin.com/in/lazzian-al-falah-a18733306/' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 lg:py-20">
      <div
        className="pointer-events-none absolute -left-12 top-12 h-44 w-44 rounded-[3rem] bg-lime/70 blur-[70px]"
        aria-hidden="true"
      />
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-white sm:px-10 lg:rounded-[3rem] lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-navy-800 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-lime/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute left-1/2 top-8 h-32 w-32 dots-light opacity-50" aria-hidden="true" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_auto_0.95fr] lg:gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:pb-8"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80">
                <span className="h-2.5 w-2.5 rounded-full bg-lime" />
                Get in Touch
              </span>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                Let&apos;s Build
                <span className="block">Something Great</span>
                <span className="block text-lime">Together!</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
                Have a project in mind or just want to say hi? Feel free to reach out. I&apos;m
                always open to new opportunities.
              </p>

              <ul className="mt-9 space-y-3">
                {details.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-navy">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-left">
                        <span className="block text-xs font-semibold uppercase tracking-wider text-white/45">
                          {label}
                        </span>
                        <span className="text-sm font-semibold text-white">{value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          className="flex max-w-xs items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.03] p-3 transition-colors hover:bg-white/10"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex max-w-xs items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.03] p-3">
                          {inner}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            <div className="relative mx-auto flex w-full items-end justify-center lg:mx-0 lg:w-auto lg:-mb-16 lg:self-end">
              <span
                className="pointer-events-none absolute bottom-6 h-36 w-36 rounded-[2.25rem] bg-lime lg:bottom-10 lg:h-44 lg:w-44"
                aria-hidden="true"
              />
              <Note className="absolute right-0 top-0 z-20 hidden text-xl lg:block" rotate="-6deg">
                Let&apos;s
                <br />
                Talk!
                <CurvyArrow className="ml-auto mt-1 h-8 w-14" color="#B8F500" />
              </Note>

              <motion.img
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                src={profile.contactPortrait}
                alt="Lazzian Al Falah ready to talk"
                className="relative z-10 w-52 drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] sm:w-60 lg:w-64 xl:w-72"
                loading="lazy"
              />
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
              className="w-full max-w-md rounded-[1.75rem] bg-white p-5 shadow-float sm:p-7 lg:max-w-none"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
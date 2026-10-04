import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navLinks } from '../data/portfolio.js';

const cvUrl = '/Lazzian-Al-Falah-CV.pdf';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 shadow-[0_10px_30px_-20px_rgba(6,27,65,0.4)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between gap-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="relative flex items-center"
          aria-label="Lazzian Al Falah home"
        >
          <span className="font-display text-3xl font-extrabold leading-none tracking-tighter text-navy-950">
            L
          </span>
          <span className="ml-0.5 mt-3 h-2.5 w-2.5 rounded-full bg-lime" />
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'text-navy' : 'text-muted hover:text-navy'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0 h-[4px] rounded-full bg-lime"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={cvUrl}
            download="Lazzian-Al-Falah-CV.pdf"
            className="btn-navy hidden !px-5 !py-2.5 sm:inline-flex"
          >
            Download CV
            <Download className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-navy/10 bg-white text-navy md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy/5 bg-white md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className={`block rounded-2xl px-4 py-3 text-base font-semibold ${
                      active === link.href.slice(1) ? 'bg-soft text-navy' : 'text-muted'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={cvUrl}
                  download="Lazzian-Al-Falah-CV.pdf"
                  className="btn-navy mt-2 w-full"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

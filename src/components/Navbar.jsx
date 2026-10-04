import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navLinks } from '../data/portfolio.js';
import MobileMenu from './MobileMenu.jsx';

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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 20);
  };

  const activeLabel = navLinks.find((l) => l.href.slice(1) === active)?.label ?? 'Menu';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-white/85 shadow-[0_10px_30px_-20px_rgba(6,27,65,0.4)] backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
      <nav className="container-x relative z-50 flex h-[72px] items-center justify-between gap-4">
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
          {!open && (
            <a
              href={cvUrl}
              download="Lazzian-Al-Falah-CV.pdf"
              className="btn-navy hidden !px-5 !py-2.5 sm:inline-flex"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-full border border-navy/10 bg-white pl-2.5 pr-1.5 text-navy transition-colors duration-300 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : activeLabel}
                initial={{ y: 9, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -9, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="hidden text-xs font-semibold uppercase tracking-[0.16em] min-[400px]:inline-block"
              >
                {open ? 'Close' : activeLabel}
              </motion.span>
            </AnimatePresence>
            <span
              className={`grid h-8 w-8 place-items-center rounded-full transition-colors duration-300 ${
                open ? 'bg-lime text-navy' : 'bg-navy text-white'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'x' : 'menu'}
                  initial={{ rotate: open ? -90 : 90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: open ? 90 : -90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.18 }}
                  className="grid place-items-center"
                >
                  {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </motion.span>
              </AnimatePresence>
            </span>
          </button>
        </div>
        </nav>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} active={active} onNavigate={handleNav} />
    </>
  );
}

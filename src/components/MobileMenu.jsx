import { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import { ArrowUpRight, Download, Github, Instagram, Linkedin } from 'lucide-react';
import { navLinks } from '../data/portfolio.js';
import { LimeBlob, Sparkle } from './DecorativeElements.jsx';

const cvUrl = '/Lazzian-Al-Falah-CV.pdf';
const email = 'alfalah.lazzian03@gmail.com';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/LazzianT' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lazzian-al-falah-a18733306/',
  },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com' },
];

const CARD_W = 124;
const CARD_H = 150;
const DRAG_THRESHOLD = 10;

function MenuPanel({ reduce, active, onClose, onNavigate }) {
  const listRef = useRef(null);
  const drag = useRef({ active: false, moved: false, x: 0, y: 0 });
  const suppress = useRef(false);
  const initial = Math.max(
    navLinks.findIndex((l) => l.href.slice(1) === active),
    0
  );
  const focusRef = useRef(initial);
  const [focus, setFocus] = useState(initial);
  const [touching, setTouching] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 320, damping: 26, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 320, damping: 26, mass: 0.5 });

  const focusFromY = (clientY) => {
    const el = listRef.current;
    if (!el) return;
    let closest = 0;
    let min = Infinity;
    el.querySelectorAll('[data-row]').forEach((row, i) => {
      const r = row.getBoundingClientRect();
      const d = Math.abs(clientY - (r.top + r.height / 2));
      if (d < min) {
        min = d;
        closest = i;
      }
    });
    focusRef.current = closest;
    setFocus(closest);
  };

  const track = (e) => {
    const w = window.innerWidth;
    const x = Math.min(Math.max(e.clientX + 82, CARD_W / 2 + 8), w - CARD_W / 2 - 8);
    mx.set(x - CARD_W / 2);
    my.set(e.clientY - 92 - CARD_H / 2);
  };

  const onDown = (e) => {
    drag.current = { active: true, moved: false, x: e.clientX, y: e.clientY };
    track(e);
    focusFromY(e.clientY);
  };

  const onMove = (e) => {
    if (!drag.current.active) return;
    if (
      !drag.current.moved &&
      Math.hypot(e.clientX - drag.current.x, e.clientY - drag.current.y) > DRAG_THRESHOLD
    ) {
      drag.current.moved = true;
    }
    track(e);
    focusFromY(e.clientY);
  };

  const onUp = () => {
    const wasDrag = drag.current.moved;
    drag.current.active = false;
    setTouching(false);
    if (wasDrag) {
      suppress.current = true;
      onNavigate(navLinks[focusRef.current].href);
    }
  };

  const onRowClick = (e, href) => {
    e.preventDefault();
    if (suppress.current) {
      suppress.current = false;
      return;
    }
    onNavigate(href);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: '-6%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-6%' }}
        transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 overflow-y-auto bg-white/70 backdrop-blur-2xl md:hidden"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {!reduce && <LimeBlob className="-bottom-24 -right-16 h-72 w-72 opacity-50" />}
          <div className="absolute left-6 top-1/3 h-40 w-40 dot-grid opacity-30" />
          <Sparkle className="absolute right-8 top-28 h-6 w-6" />
        </div>

        <div className="container-x relative flex min-h-[100dvh] flex-col pb-[max(28px,env(safe-area-inset-bottom))] pt-[92px]">
          <p className="text-sm font-medium text-navy/60">
            Drag the list. The preview follows your finger.
          </p>

          <ul
            ref={listRef}
            className="mt-5 flex touch-none select-none flex-col"
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerLeave={onUp}
            onPointerCancel={onUp}
          >
            {navLinks.map((link, i) => {
              const isActive = active === link.href.slice(1);
              const isFocus = focus === i;
              return (
                <li key={link.href}>
                  <motion.a
                    data-row
                    href={link.href}
                    onClick={(e) => onRowClick(e, link.href)}
                    onFocus={() => {
                      focusRef.current = i;
                      setFocus(i);
                    }}
                    aria-current={isActive ? 'true' : undefined}
                    animate={{ opacity: isFocus ? 1 : 0.4, x: isFocus ? 0 : -3 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 border-b border-navy/10 py-3.5"
                  >
                    <span
                      className={`font-display text-xs font-bold tabular-nums transition-colors ${
                        isFocus ? 'text-lime-600' : 'text-navy/35'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-4xl font-extrabold leading-none tracking-tight text-navy">
                      {link.label}
                    </span>
                    {isActive && (
                      <span className="mt-1 h-2 w-2 rounded-full bg-lime" aria-hidden="true" />
                    )}
                    <ArrowUpRight
                      className={`ml-auto h-5 w-5 transition-colors ${
                        isFocus ? 'text-lime-600' : 'text-navy/25'
                      }`}
                    />
                  </motion.a>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto space-y-5 pt-10">
            <a
              href={cvUrl}
              download="Lazzian-Al-Falah-CV.pdf"
              onClick={onClose}
              className="btn-lime w-full"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>

            <div className="flex items-center justify-between gap-3">
              <a
                href={`mailto:${email}`}
                onClick={onClose}
                className="truncate text-sm font-medium text-navy/70 transition-colors hover:text-lime-600"
              >
                {email}
              </a>
              <div className="flex shrink-0 items-center gap-2">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-full border border-navy/15 text-navy transition-colors hover:border-lime hover:bg-lime"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          style={{ x: sx, y: sy }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: touching ? 1 : 0, scale: touching ? 1 : 0.85 }}
          transition={{ duration: 0.22 }}
          className="pointer-events-none fixed left-0 top-0 z-50"
        >
          <div
            className="overflow-hidden rounded-[26px] border border-navy/10 bg-white shadow-float"
            style={{ width: CARD_W, height: CARD_H }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={focus}
                src={navLinks[focus].preview}
                alt=""
                initial={{ opacity: 0, scale: 1.12 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default function MobileMenu({ open, onClose, active, onNavigate }) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence>
      {open && (
        <MenuPanel
          key="menu"
          reduce={reduce}
          active={active}
          onClose={onClose}
          onNavigate={onNavigate}
        />
      )}
    </AnimatePresence>
  );
}

import { motion } from 'framer-motion';

export function Sparkle({ className = '', color = '#B8F500' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 0c.6 5.4 2.4 8.4 7.4 9.6C14.4 10.8 12.6 14 12 24c-.6-10-2.4-13.2-7.6-14.4C9.6 8.4 11.4 5.4 12 0Z"
        fill={color}
      />
    </svg>
  );
}

export function CurvyArrow({ className = '', color = '#B8F500' }) {
  return (
    <svg viewBox="0 0 140 80" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 70C22 26 52 8 96 16c10 2 20 6 28 12"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M104 8c8 2 16 7 20 16 2 5-2 9-7 7-4-2-8-5-11-8"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DotsGrid({ className = '', onDark = false, cols = 6, rows = 5 }) {
  const dots = Array.from({ length: cols * rows });
  return (
    <div
      className={`grid gap-2 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}
      aria-hidden="true"
    >
      {dots.map((_, i) => (
        <span
          key={i}
          className={`block h-1.5 w-1.5 rounded-full ${onDark ? 'bg-white/30' : 'bg-navy/20'}`}
        />
      ))}
    </div>
  );
}

export function LimeBlob({ className = '' }) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ background: 'radial-gradient(circle at 30% 30%, #d6ff66, #b8f500 55%, #9cd100)' }}
      aria-hidden="true"
      animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.7, 0.55] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export function Note({ children, className = '', rotate = '0deg' }) {
  return (
    <span
      className={`pointer-events-none select-none font-hand font-semibold leading-tight text-navy ${className}`}
      style={{ transform: `rotate(${rotate})` }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

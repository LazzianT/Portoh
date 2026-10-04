import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const initial = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Enter a valid email.';
    if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters.';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSent(true);
    setForm(initial);
  };

  const fieldClass = (hasError) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted/70 outline-none transition focus:border-navy focus:ring-2 focus:ring-lime/50 ${
      hasError ? 'border-red-400' : 'border-navy/10'
    }`;

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-[1.75rem] bg-white p-10 text-center shadow-float"
      >
        <CheckCircle2 className="h-12 w-12 text-lime-600" />
        <p className="font-display text-xl font-bold text-navy">Message sent!</p>
        <p className="text-sm text-muted">
          Thanks for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn-navy mt-2">
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={update('name')}
          placeholder="Budi Santoso"
          className={fieldClass(errors.name)}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
          Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={update('email')}
          placeholder="budi@contoh.com"
          className={fieldClass(errors.email)}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={update('message')}
          placeholder="Ceritakan tentang proyekmu..."
          className={`${fieldClass(errors.message)} resize-none`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-navy mt-1 w-full">
        Send Message
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

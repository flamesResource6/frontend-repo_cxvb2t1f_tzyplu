import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-amber-400/10 p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Let’s unlock your next growth lever</h3>
          <p className="mt-3 text-slate-300">Tell us your bottleneck. We’ll propose a solution in 48 hours.</p>

          <form className="mx-auto mt-8 grid gap-4 sm:max-w-xl">
            <input type="text" placeholder="Name" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40" />
            <input type="email" placeholder="Work email" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40" />
            <textarea rows="4" placeholder="What are you trying to improve?" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40" />
            <motion.button whileHover={{ y: -1 }} whileTap={{ y: 0 }} type="button" className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-6 py-3 text-white shadow-lg shadow-violet-500/30">Request Proposal</motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}

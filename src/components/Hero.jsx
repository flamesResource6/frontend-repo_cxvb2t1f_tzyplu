import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.25),transparent_60%)]" />
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/30 to-slate-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 lg:pt-36 lg:pb-40">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            AI + Automation for forward-thinking teams
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Arnanz AI
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-4 max-w-2xl text-lg text-slate-300">
            We design and deploy intelligent systems that eliminate bottlenecks, boost conversions, and automate repetitive work — with a specialty in real estate workflows.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }} className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-6 py-3 text-white shadow-lg shadow-violet-500/30">Start a Project</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-slate-200">Explore Services</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

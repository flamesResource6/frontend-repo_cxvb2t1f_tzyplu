import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-violet-300" />
              </div>
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-tight">Arnanz AI</p>
              <p className="text-xs text-slate-300/70">Automation & Intelligence</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-slate-300 hover:text-white transition">Services</a>
            <a href="#realestate" className="text-slate-300 hover:text-white transition">Real Estate</a>
            <a href="#process" className="text-slate-300 hover:text-white transition">Process</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
          </nav>

          <motion.a
            href="#contact"
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/20"
          >
            Get a Proposal
          </motion.a>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

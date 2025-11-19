import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import RealEstateFocus from './components/RealEstateFocus';
import Process from './components/Process';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 [background:radial-gradient(1250px_650px_at_50%_-20%,rgba(124,58,237,0.25),transparent_60%)]" />

      <Navbar />
      <Hero />
      <Services />
      <RealEstateFocus />
      <Process />
      <CTA />

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Arnanz AI. All rights reserved.</p>
          <p>Modern AI solutions for real estate and beyond.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

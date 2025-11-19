import { CheckCircle2 } from 'lucide-react';

const steps = [
  { title: 'Discovery', desc: 'We assess your goals, data, and stack to identify high-ROI opportunities.' },
  { title: 'Solution Design', desc: 'We propose a roadmap with quick wins and scalable foundations.' },
  { title: 'Implementation', desc: 'We build, integrate, and QA workflows across your tools.' },
  { title: 'Optimization', desc: 'We monitor performance and iterate for continuous improvement.' },
];

export default function Process() {
  return (
    <section id="process" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">How we work</h2>
          <p className="mt-2 text-slate-300">A clear path from idea to measurable impact.</p>
        </div>

        <ol className="grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-violet-500/20 text-violet-300 flex items-center justify-center text-sm font-semibold">{i + 1}</div>
                <p className="text-white font-medium">{s.title}</p>
              </div>
              <p className="mt-3 text-sm text-slate-300">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { Building2, Calendar, MapPinned, ClipboardCheck } from 'lucide-react';

const points = [
  {
    icon: Building2,
    title: 'Lead-to-Tour Automation',
    desc: 'Qualify leads, answer common questions, and book showings automatically.'
  },
  {
    icon: Calendar,
    title: 'Appointment Coordination',
    desc: 'Two-way synced scheduling with reminders across email, SMS, and voice.'
  },
  {
    icon: MapPinned,
    title: 'Listing Intelligence',
    desc: 'Auto-generate descriptions, detect price anomalies, and surface comps.'
  },
  {
    icon: ClipboardCheck,
    title: 'Transaction Ops',
    desc: 'Document collection, e-sign nudges, and milestone updates without back-and-forth.'
  }
];

export default function RealEstateFocus() {
  return (
    <section id="realestate" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Built for real estate</h2>
          <p className="mt-2 text-slate-300">Use-cases we implement most often for brokerages, teams, and operators.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <p.icon className="h-5 w-5 text-amber-300" />
                </div>
                <p className="text-white font-medium">{p.title}</p>
              </div>
              <p className="mt-3 text-sm text-slate-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

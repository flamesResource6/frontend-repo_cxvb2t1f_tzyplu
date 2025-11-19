import { Bot, Workflow, MessageSquare, GaugeCircle } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Voice & Chat Agents',
    desc: '24/7 lead qualification, appointment scheduling, and intake across phone, SMS, and web chat.'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Connect your CRM, listings, and marketing channels to remove manual steps and errors.'
  },
  {
    icon: MessageSquare,
    title: 'Personalized Outreach',
    desc: 'Hyper-targeted campaigns that follow up automatically and increase response rates.'
  },
  {
    icon: GaugeCircle,
    title: 'Analytics & Optimization',
    desc: 'Dashboards and feedback loops that continuously improve performance.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">What we deliver</h2>
          <p className="mt-2 text-slate-300">Practical AI solutions that move metrics, not just buzzwords.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-violet-300" />
                </div>
                <p className="text-white font-medium">{s.title}</p>
              </div>
              <p className="mt-3 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

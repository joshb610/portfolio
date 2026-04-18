import { useSectionFade } from '../hooks/useSectionFade'

const EXPERIENCE = [
  {
    title: 'Lead Frontend Developer',
    company: 'FC Root Systems',
    location: 'Knoxville, TN',
    period: 'Jan 2026 – Mar 2026',
    note: 'Startup ceased operations due to funding loss',
    bullets: [
      'Led frontend development of a multi-tenant fulfillment platform built with React, TypeScript, Vite, and HeroUI',
      'Built interactive dashboards with real-time KPIs, SLA monitoring, and trend visualizations enabling clients to track fulfillment performance',
      'Developed a visual RBAC permission matrix managing 100+ permissions with tri-state controls, bulk actions, and a comprehensive security admin console',
      'Collaborated on backend and database integrations to support new features',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'HeroUI', 'RBAC'],
  },
  {
    title: 'Software Testing Intern',
    company: 'AMS Corp.',
    location: 'Knoxville, TN',
    period: 'Jul 2022 – Jul 2024',
    bullets: [
      'Automated test plans with Power Automate Desktop, reducing manual testing and increasing consistency',
      'Converted Python-based machine learning scripts into C#, streamlining data analysis and eliminating the need for Python on end-user machines',
      'Analyzed problems and worked with engineers to develop solutions and improve automated test coverage',
      'Wrote reports detailing research and uses of possible solutions to future company projects',
    ],
    tags: ['Python', 'C#', 'Power Automate', 'Test Automation', 'ML'],
  },
]

export default function Experience() {
  const ref = useSectionFade()

  return (
    <section id="experience" ref={ref as React.RefObject<HTMLElement>} className="section-fade w-full py-32 bg-slate-900/30">
      <div className="section-inner">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 whitespace-nowrap">Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/50 to-transparent" />
        </div>

        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((job, i) => (
            <div key={i} className="glass-card rounded-xl card-body">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">{job.title}</h3>
                  <p className="text-indigo-400 font-medium mt-1">{job.company}</p>
                  {job.note && <p className="text-xs text-amber-400/80 mt-1.5 italic">{job.note}</p>}
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm text-slate-400 font-medium">{job.period}</span>
                  <p className="text-xs text-slate-500 mt-1">{job.location}</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="text-indigo-500 mt-1 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className="skill-tag text-xs">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

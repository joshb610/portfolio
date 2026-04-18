import { useSectionFade } from '../hooks/useSectionFade'

const SKILLS = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'C/C++', 'SQL', 'Dart', 'Java'] },
  { category: 'Frontend', items: ['React', 'HTML', 'CSS', 'Vite', 'Node.js'] },
  { category: 'Tools & Frameworks', items: ['Git/GitHub', 'Power Automate', 'Flutter', 'Scikit-Learn', 'NumPy', 'Matplotlib'] },
  { category: 'Concepts', items: ['Test Automation', 'Quality Assurance', 'OOP', 'RESTful APIs', 'Machine Learning'] },
]

export default function About() {
  const ref = useSectionFade()

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="section-fade w-full py-32">
      <div className="section-inner">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 whitespace-nowrap">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-slate-400 leading-relaxed text-base">
            <p>
              I'm a Computer Science graduate from the{' '}
              <span className="text-indigo-400 font-medium">University of Tennessee, Knoxville</span>{' '}
              (May 2024) with a strong focus on frontend development and test automation.
            </p>
            <p>
              Most recently, I led frontend development at{' '}
              <span className="text-slate-200 font-medium">FC Root Systems</span>, where I built a
              multi-tenant fulfillment platform with React, TypeScript, and Vite — including real-time
              KPI dashboards and a complex RBAC permission management system.
            </p>
            <p>
              Before that, I spent two years at{' '}
              <span className="text-slate-200 font-medium">AMS Corp</span> automating test workflows
              with Power Automate Desktop and porting Python ML scripts to C# for end-user deployment.
            </p>
            <p>
              I'm currently building a cross-platform fitness app with Flutter/Firebase, and looking
              for my next opportunity as a software developer.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://linkedin.com/in/joshbutler-dev" target="_blank" rel="noopener noreferrer" className="btn-outline !py-2.5 !px-5 text-sm">LinkedIn</a>
              <a href="https://github.com/joshb610" target="_blank" rel="noopener noreferrer" className="btn-outline !py-2.5 !px-5 text-sm">GitHub</a>
              <a href={`${import.meta.env.BASE_URL}JLB-Resume.pdf`} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 !px-5 text-sm">
                Resume
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-10">
            {SKILLS.map(({ category, items }) => (
              <div key={category} className="glass-card rounded-xl" style={{ margin: '1rem',padding: '1rem 1.25rem' }}>
                <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

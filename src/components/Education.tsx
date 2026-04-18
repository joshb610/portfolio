import { useSectionFade } from '../hooks/useSectionFade'

const COURSEWORK = [
  { category: 'Machine Learning & Data', icon: '🤖', courses: ['Machine Learning I & II', 'Probability & Random Variables'] },
  { category: 'Software Development', icon: '💻', courses: ['Systems Programming', 'Programming Languages', 'Software Engineering'] },
  { category: 'Theoretical Foundations', icon: '📐', courses: ['Discrete Structures I & II', 'Data Structures & Algorithms I & II', 'Computer Organization'] },
  { category: 'Cybersecurity & Systems', icon: '🔒', courses: ['Applied Cryptography', 'Systems Architecture', 'Computer Systems Interfaces'] },
]

export default function Education() {
  const ref = useSectionFade()

  return (
    <section id="education" ref={ref as React.RefObject<HTMLElement>} className="section-fade w-full py-32 bg-slate-900/30">
      <div className="section-inner">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 whitespace-nowrap">Education</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/50 to-transparent" />
        </div>

        <div className="glass-card rounded-xl card-body mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-3xl shrink-0">🎓</div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">Bachelor of Science in Computer Science</h3>
                <p className="text-indigo-400 font-medium mt-1">University of Tennessee, Knoxville</p>
              </div>
            </div>
            <span className="inline-block bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-sm font-medium rounded-full shrink-0" style={{ padding: '4px 12px' }}>
              Graduated May 2024
            </span>
          </div>
          <div className="flex items-start gap-3 bg-indigo-500/5 border border-indigo-500/15 rounded-lg p-5">
            <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
            <p className="text-slate-400 text-sm leading-relaxed">
              Served as <span className="text-slate-200 font-medium">Lead Frontend Developer</span> for a senior capstone project, designing and implementing a React-based web application that met all project requirements and deadlines.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-slate-300 mb-8">Relevant Coursework</h3>
        <div className="grid sm:grid-cols-2 gap-8">
          {COURSEWORK.map(({ category, icon, courses }) => (
            <div key={category} className="glass-card rounded-xl card-body">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{icon}</span>
                <h4 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">{category}</h4>
              </div>
              <ul className="space-y-3">
                {courses.map((course) => (
                  <li key={course} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="text-indigo-500/60 mt-1 shrink-0 text-xs">●</span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

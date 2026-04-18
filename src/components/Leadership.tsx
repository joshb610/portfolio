import { useSectionFade } from '../hooks/useSectionFade'

export default function Leadership() {
  const ref = useSectionFade()

  return (
    <section id="leadership" ref={ref as React.RefObject<HTMLElement>} className="section-fade w-full py-24">
      <div className="section-inner">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 whitespace-nowrap">Leadership</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/50 to-transparent" />
        </div>

        <div className="glass-card rounded-xl card-body flex items-center gap-6">
          <div className="w-16 h-16 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-3xl shrink-0">
            ⚜️
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-100">Eagle Scout</h3>
            <p className="text-amber-400 font-medium mt-1">Boy Scouts of America</p>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Achieved in 2019 — the highest rank attainable in Scouting, requiring demonstrated leadership, community service, and a self-directed Eagle project.
            </p>
          </div>
          <div className="shrink-0 ml-auto hidden sm:block">
            <span className="inline-block bg-amber-500/15 text-amber-400 border border-amber-500/30 text-sm font-medium rounded-full" style={{ padding: '4px 12px' }}>
              2019
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="hero-glow top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div
        className="hero-glow bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)' }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-8 pb-24">
        <div className="animate-fade-in-up delay-100 mb-6">
          <span className="skill-tag text-sm">Available for opportunities</span>
        </div>

        <h1 className="animate-fade-in-up delay-200 text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="gradient-text">Josh Butler</span>
        </h1>

        <h2 className="animate-fade-in-up delay-300 text-xl md:text-2xl text-slate-400 font-medium mb-8">
          Software Developer & CS Graduate
        </h2>

        <p className="animate-fade-in-up delay-400 text-slate-400 text-base md:text-lg leading-relaxed mb-12" style={{ textAlign: 'center' }}>
          UT Knoxville CS grad with 2+ years building test automation and frontend tooling.
          Experienced in React, TypeScript, Python, and C# — focused on clean, performant UIs.
        </p>

        <div className="animate-fade-in-up delay-500 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            View My Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Get In Touch
          </button>
          <a
            href="https://linkedin.com/in/joshbutler-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator — positioned relative to section, not content div */}
      <div className="animate-fade-in delay-700 absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}

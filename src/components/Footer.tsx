export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-slate-800/60 flex justify-center">
      <div className="section-inner flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Josh Butler. Built with React & TypeScript.</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/joshb610" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/joshbutler-dev" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
          <a href="mailto:joshlbutler610@gmail.com" className="hover:text-indigo-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}

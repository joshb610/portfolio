import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

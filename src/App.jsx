import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiArrowRight, FiCheck, FiCopy, FiMenu, FiX, FiCode, FiLayers, FiTerminal } from 'react-icons/fi'
import ProjectsSection from './Components/ProjectsSection'
import './App.css'

const email = 'mianmobeen13200@gmail.com'
const skills = [
  { icon: <FiCode aria-hidden="true" />, title: 'Frontend development', text: 'Responsive interfaces, reusable components and clear user experiences.', tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { icon: <FiLayers aria-hidden="true" />, title: 'Backend development', text: 'APIs, application logic and databases that connect the whole experience.', tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Supabase'] },
  { icon: <FiTerminal aria-hidden="true" />, title: 'Python & FastAPI', text: 'Currently learning Python and FastAPI to expand my backend development skills.', tags: ['Python', 'FastAPI'], learning: true },
]
const education = [
  ['In progress', 'BS Software Engineering', 'The University of Faisalabad (TUF)'],
  ['Completed', 'MERN Stack Development', 'Edify College of IT · Four-month course'],
  ['Completed', 'IELTS', 'English language assessment'],
  ['2023', 'Pre-Engineering', 'Alflah College, Jhumra'],
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (!menuOpen) return
    const close = (event) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [menuOpen])
  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 2500)
    return () => window.clearTimeout(timer)
  }, [copied])
  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopied(true) }
    catch { window.location.href = `mailto:${email}` }
  }
  return <div className="site-shell" id="top">
    <a className="skip-link" href="#main">Skip to main content</a>
    <header className="site-header"><div className="container header-inner">
      <a className="wordmark" href="#top" aria-label="Mobeen Shahid - Back to top"><span className="brand-mark">m.</span>Mobeen Shahid</a>
      <nav id="primary-navigation" className={`primary-nav ${menuOpen ? 'primary-nav--open' : ''}`} aria-label="Main navigation">
        {[['Work', '#work'], ['Skills', '#expertise'], ['About', '#about'], ['Contact', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <a className="header-cta" href={`mailto:${email}`}>Let’s talk <FiArrowUpRight /></a>
      <button className="mobile-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</button>
    </div></header>
    <main id="main">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="availability"><span />Open to internships & collaboration</p>
          <p className="eyebrow">FULL-STACK DEVELOPER</p>
          <h1 id="hero-title">Thoughtful code.<br /><span>Useful experiences.</span></h1>
          <p className="hero-lead">I’m Mobeen, a MERN stack developer turning ideas into practical web applications. Currently studying Software Engineering at TUF and learning Python & FastAPI.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">View my projects <FiArrowUpRight /></a><a className="button button-secondary" href="#expertise">Explore my skills <FiArrowRight /></a></div>
          <div className="hero-stack"><span>MY CORE STACK</span><p>MongoDB <i /> Express.js <i /> React <i /> Node.js</p></div>
        </div>
        <aside className="profile-card" aria-label="About Mobeen Shahid">
          <div className="portrait-wrap"><img src="/portrait.webp" width="520" height="1016" fetchPriority="high" alt="Mobeen Shahid" /><span className="profile-location">Based in Pakistan</span></div>
          <div className="profile-caption"><div><strong>Mobeen Shahid</strong><span>Developer & software engineering student</span></div><span className="profile-arrow" aria-hidden="true"><FiCode /></span></div>
        </aside>
      </section>
      <ProjectsSection />
      <section id="expertise" className="container section-pad" aria-labelledby="skills-title">
        <div className="section-heading-row"><div><p className="eyebrow">THE TOOLKIT</p><h2 id="skills-title">Skills behind the work.</h2></div><p>Full-stack foundations.<br />Always making room to learn.</p></div>
        <div className="mern-banner"><span className="completion-icon"><FiCheck /></span><div><strong>MERN Stack</strong><p>Completed training · MongoDB, Express.js, React & Node.js</p></div><span className="completion-badge">Completed</span></div>
        <div className="skills-grid">{skills.map(({ icon, title, text, tags, learning }) => <article className="skill-card" key={title}><div className="skill-top">{icon}{learning && <span className="learning-badge">Currently learning</span>}</div><h3>{title}</h3><p>{text}</p><ul className="tags">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
        <div className="workflow"><span>TOOLS I WORK WITH</span><p>Git & GitHub <b>·</b> Vite <b>·</b> Vercel <b>·</b> Cloudflare</p></div>
      </section>
      <section id="about" className="about-section section-pad" aria-labelledby="about-title"><div className="container about-grid">
        <div><p className="eyebrow">A LITTLE ABOUT ME</p><h2 id="about-title">Learning by building.<br />Improving with every project.</h2><p className="about-description">I’m pursuing BS Software Engineering at The University of Faisalabad. I enjoy connecting the details of an interface with the logic that makes it work.</p><p className="about-description">My projects explore everyday tools, publishing, appointment booking and e-commerce. I’m looking for opportunities to contribute, collaborate and keep growing as a developer.</p><a className="text-link" href={`mailto:${email}`}>Let’s connect <FiArrowUpRight /></a></div>
        <div className="education"><h3>Education & training</h3>{education.map(([status, title, place]) => <article className="education-item" key={title}><span>{status}</span><h4>{title}</h4><p>{place}</p></article>)}</div>
      </div></section>
      <section id="contact" className="container contact-section" aria-labelledby="contact-title"><div className="contact-panel"><div><p className="eyebrow">LET’S CONNECT</p><h2 id="contact-title">Have something in mind?</h2><p>A project, an internship or a conversation about building something useful.</p><a className="email-link" href={`mailto:${email}`}>{email} <FiArrowUpRight /></a></div><button className="copy-button" onClick={copyEmail}>{copied ? <FiCheck /> : <FiCopy />}<span aria-live="polite">{copied ? 'Email copied' : 'Copy email'}</span></button></div></section>
    </main>
    <footer className="container site-footer"><span>© {new Date().getFullYear()} Mobeen Shahid</span><span>Built with purpose. Always learning.</span><a href="#top">Back to top ↑</a></footer>
  </div>
}

import { useEffect, useState } from 'react'
import {
  FiArrowDown, FiArrowRight, FiArrowUpRight, FiCheck, FiChevronRight,
  FiCopy, FiMail,
  FiMenu, FiMonitor, FiLayers, FiCode, FiX,
} from 'react-icons/fi'
import './App.css'

const email = 'mianmobeen13200@gmail.com'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Journey', href: '#journey' },
]

const projects = [
  {
    number: '01',
    title: 'Appointment Booking Platform',
    eyebrow: 'FULL-STACK WEB APP',
    category: 'Full stack',
    description: 'A booking experience built around structured client details, visa-related workflows, and an admin dashboard.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://frountend-seven.vercel.app/',
    visual: 'booking',
    featured: true,
  },
  {
    number: '02',
    title: 'Story Nest — Writing & Stories',
    eyebrow: 'PUBLISHING PLATFORM',
    category: 'Full stack',
    description: 'A writing platform with public stories, a simple editor, comments and reader-friendly article pages. Designed to make reading and sharing feel easy.',
    tags: ['React', 'Express', 'MongoDB'],
    link: 'https://blogs-six-wine.vercel.app/',
    visual: 'blog',
  },
  {
    number: '03',
    title: 'Multi-Tools Hub',
    eyebrow: 'DEVELOPER & PRODUCTIVITY TOOLS',
    category: 'Tools',
    description: 'A growing collection of practical browser-based utilities, built with usability and everyday workflows in mind.',
    tags: ['React', 'Vite', 'Utilities'],
    link: 'https://multitool-hub.pages.dev/',
    visual: 'tools',
  },
  {
    number: '04',
    title: 'Zayvora Fashion Jewels',
    eyebrow: 'E-COMMERCE · IN PROGRESS',
    category: 'Products',
    description: 'A premium jewelry storefront project exploring product discovery, a manageable catalog, and a WhatsApp-first checkout.',
    tags: ['Astro', 'React', 'Supabase'],
    link: null,
    visual: 'jewelry',
  },
]

const expertise = [
  {
    icon: <FiMonitor aria-hidden="true" />,
    index: '01 / FRONTEND',
    title: 'Interfaces that feel effortless.',
    description: 'Responsive websites with thoughtful details, fluid layouts, and clear user journeys.',
    tags: ['React', 'JavaScript', 'HTML & CSS', 'Tailwind CSS'],
  },
  {
    icon: <FiLayers aria-hidden="true" />,
    index: '02 / BACKEND',
    title: 'The logic behind the experience.',
    description: 'Connecting interfaces to APIs, authentication flows, and reliable data models.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Supabase'],
  },
  {
    icon: <FiCode aria-hidden="true" />,
    index: '03 / LEARNING & TOOLING',
    title: 'Curious beyond the stack.',
    description: 'Exploring Python, useful automation, and the tools that help ship working products.',
    tags: ['Python', 'Git & GitHub', 'Vite', 'Vercel'],
  },
]

const journey = [
  {
    date: '2023 — PRESENT',
    title: 'BS Software Engineering — In Progress',
    place: 'The University of Faisalabad (TUF)',
    text: 'Currently pursuing a degree in Software Engineering, developing strong skills in software development, databases, and problem-solving.',
  },
  {
    date: 'COMPLETED',
    title: 'IELTS — English Language Assessment',
    place: 'International English Language Testing System (IELTS)',
    text: 'Completed the IELTS assessment to further develop and demonstrate English communication skills.',
  },
  {
    date: 'PRACTICAL TRAINING',
    title: 'MERN Stack Development',
    place: 'Edify College of IT',
    text: 'Completed a four-month course and strengthened my skills by developing real web applications.',
  },
  {
    date: '2023',
    title: 'Pre-Engineering',
    place: 'Alflah College, Jhumra',
    text: 'Studied mathematics and analytical subjects before moving into software engineering.',
  },
]

function SectionIntro({ label, title, description }) {
  return (
    <div className="section-intro">
      <p className="eyebrow"><span className="eyebrow-line" />{label}</p>
      <h2 className="section-heading">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function ProjectArtwork({ project }) {
  return (
    <div className={`project-art project-art--${project.visual}`} aria-hidden="true">
      {project.visual === 'booking' && (
        <div className="art-browser booking-preview">
          <div className="art-browser-bar"><span /><span /><span /><i>appointments / overview</i></div>
          <div className="booking-preview-body">
            <div className="booking-preview-menu"><div className="demo-logo">A.</div><b /><b /><b /><b /></div>
            <div className="booking-preview-content">
              <small>GOOD MORNING</small><strong>Everything in one place.</strong>
              <div className="booking-demo-stat"><span>Appointment overview</span><b>—</b></div>
              <div className="booking-demo-grid"><span /><span /><span /></div>
              <div className="booking-demo-lines"><i /><i /><i /></div>
            </div>
          </div>
        </div>
      )}
      {project.visual === 'blog' && (
        <div className="blog-art-inner">
          <div className="blog-overline">STORY NEST / WRITING</div>
          <div className="blog-cover-image" />
          <div className="blog-cover-title">A space for<br />stories<span>.</span></div>
          <div className="blog-cover-foot">READ / WRITE / SHARE <FiArrowUpRight /></div>
        </div>
      )}
      {project.visual === 'tools' && (
        <div className="tool-art-inner">
          <div className="tool-art-top"><span className="tool-art-mark">M<span>.</span></span><span>YOUR TOOLBOX, SIMPLIFIED</span></div>
          <div className="tool-art-title">Small tools.<br /><em>Big impact.</em></div>
          <div className="tool-art-widgets"><span>JSON {`{ }`}</span><span>↔ Convert</span><span>⌗ Encode</span></div>
        </div>
      )}
      {project.visual === 'jewelry' && (
        <div className="jewelry-art-inner">
          <div className="jewelry-art-top">ZAYVORA <span>FASHION JEWELS</span></div>
          <div className="jewelry-gem"><div /></div>
          <div className="jewelry-art-copy">Everyday elegance.<small>A LITTLE LUXURY, ALWAYS</small></div>
        </div>
      )}
      <span className="art-index">{project.number} / 04</span>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <ProjectArtwork project={project} />
      <div className="project-details">
        <div className="project-meta"><span>{project.eyebrow}</span><span>{project.number} / 04</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
        <div className="project-actions">
          {project.link ? (
            <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`}>
              Live project <FiArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span className="project-unavailable">Currently in development <FiChevronRight aria-hidden="true" /></span>
          )}
        </div>
      </div>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let frame = 0
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0)
      frame = 0
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress)
    }
    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} aria-hidden="true" />

      <header className="site-header">
        <div className="header-inner container">
          <a className="wordmark" href="#top" onClick={() => setMenuOpen(false)} aria-label="Mobeen Shahid - Back to top">mobeen<span>.</span></a>
          <nav className={`primary-nav ${menuOpen ? 'primary-nav--open' : ''}`} id="primary-navigation" aria-label="Main navigation">
            {navLinks.map(({ label, href }) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="mobile-nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Get in touch <FiArrowUpRight aria-hidden="true" /></a>
          </nav>
          <a className="header-cta" href="#contact">Let's talk <FiArrowUpRight aria-hidden="true" /></a>
          <button className="mobile-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-controls="primary-navigation" aria-expanded={menuOpen}>
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="hero-kicker"><span className="status-dot" /> OPEN TO INTERNSHIP & COLLABORATION</p>
            <h1 id="hero-title">Building for<br />the <span>web.</span><br />Thinking <em>beyond.</em></h1>
            <p className="hero-lead">Hey, I'm <strong>Mobeen Shahid</strong> — pursuing BS Software Engineering at The University of Faisalabad (TUF), building practical products with the MERN stack and Python.</p>
            <div className="hero-credentials" aria-label="Education and qualifications"><span>BS Software Engineering · TUF</span><span>IELTS completed</span></div>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <FiArrowUpRight aria-hidden="true" /></a>
              <a className="button button-text" href="#contact">Let's connect <FiArrowRight aria-hidden="true" /></a>
            </div>
            <div className="hero-bottom"><span className="hero-scroll-icon"><FiArrowDown aria-hidden="true" /></span><span>SCROLL TO EXPLORE</span><span className="hero-bottom-line" /><span>BASED IN PAKISTAN</span></div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
            <div className="portrait-wrap"><img src="/Pic.jpg" alt="Portrait of Mobeen Shahid" width="650" height="650" fetchPriority="high" /></div>
            <span className="hero-visual-label">01 / HUMAN BEHIND THE CODE</span>
            <div className="floating-note"><span className="note-symbol">✳</span><span>CURIOUS MIND<br /><strong>CREATIVE BUILDER</strong></span></div>
            <div className="hero-decor" aria-hidden="true">*</div>
          </div>
        </section>

        <div className="marquee-wrap" aria-label="Areas of interest: Design, development, learning, building">
          <div className="marquee-track" aria-hidden="true">
            {[0, 1, 2, 3].map((item) => <span className="marquee-set" key={item}><b>DESIGN</b><i>✳</i><b>DEVELOP</b><i>✳</i><b>LEARN</b><i>✳</i><b>BUILD</b><i>✳</i></span>)}
          </div>
        </div>

        <section id="about" className="about-section section-pad container" aria-labelledby="about-title">
          <div className="about-lead">
            <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</p>
            <h2 id="about-title">Developer by skill.<br /><span>Builder by nature.</span></h2>
          </div>
          <div className="about-copy">
            <p>I'm currently studying BS Software Engineering at The University of Faisalabad (TUF). I've also completed IELTS, and I enjoy taking projects from an initial idea to a working experience.</p>
            <p>From full-stack apps to productivity tools and e-commerce experiences, I like turning complicated problems into simple, usable solutions.</p>
            <a href="#expertise" className="text-link">A closer look at my skills <FiArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="about-stats" aria-label="Portfolio highlights">
            <div><strong>04<span>+</span></strong><span>PROJECTS SHOWCASED</span></div>
            <div><strong>03</strong><span>CORE FOCUS AREAS</span></div>
            <div><strong>∞</strong><span>CURIOSITY TO LEARN</span></div>
          </div>
        </section>

        <section id="work" className="work-section section-pad" aria-labelledby="work-title">
          <div className="container">
            <div className="work-header">
              <SectionIntro label="THINGS I'VE BUILT" title={<>Selected <span>work.</span></>} description="A few projects that show how I approach real problems with design, code, and curiosity." />
              <div className="filter-bar" role="group" aria-label="Filter projects">
                {['All', 'Full stack', 'Tools', 'Products'].map((filter) => (
                  <button type="button" key={filter} className={activeFilter === filter ? 'filter-btn filter-btn--active' : 'filter-btn'} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>
                ))}
              </div>
            </div>
            <div className="projects-grid" aria-live="polite">
              {visibleProjects.map((project) => <ProjectCard key={project.number} project={project} />)}
            </div>
          </div>
        </section>

        <section id="expertise" className="expertise-section section-pad container" aria-labelledby="expertise-title">
          <div className="expertise-heading">
            <SectionIntro label="WHAT I BRING TO THE TABLE" title={<>A versatile <span>toolkit.</span></>} description="Learning continuously, and using the right technology for the problem at hand." />
            <span className="large-star" aria-hidden="true">✳</span>
          </div>
          <div className="expertise-grid">
            {expertise.map((item) => <article className="expertise-card" key={item.index}>
              <div className="expertise-card-top"><span className="expertise-icon">{item.icon}</span><span>{item.index}</span></div>
              <h3>{item.title}</h3><p>{item.description}</p>
              <div className="expertise-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>)}
          </div>
        </section>

        <section id="journey" className="journey-section section-pad" aria-labelledby="journey-title">
          <div className="container journey-layout">
            <div className="journey-header"><SectionIntro label="MY PATH SO FAR" title={<>Always <span>learning.</span></>} description="A quick look at the experiences shaping how I think and build." /></div>
            <div className="timeline">
              {journey.map(item => <article className="timeline-item" key={item.title}>
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-body"><h3>{item.title}</h3><p className="timeline-place">{item.place}</p><p>{item.text}</p></div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <p className="eyebrow"><span className="eyebrow-line" /> GOT SOMETHING IN MIND?</p>
            <h2 id="contact-title">Let's make<br /><em>something</em> happen<span>.</span></h2>
            <p>Have a project, opportunity, or just want to say hello? My inbox is open.</p>
            <a className="button button-dark" href={`mailto:${email}?subject=Let's%20connect`}>Say hello <FiArrowUpRight aria-hidden="true" /></a>
            <div className="contact-options">
              <div><span>DROP ME A LINE</span><a href={`mailto:${email}`}>{email} <FiArrowUpRight aria-hidden="true" /></a></div>
              <button type="button" className="copy-button" onClick={copyEmail} aria-label="Copy email address">{copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}{copied ? 'Copied!' : 'Copy email'}</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#top" className="wordmark" aria-label="Mobeen Shahid - back to top">mobeen<span>.</span></a>
          <p>Designed & built with care by Mobeen Shahid.</p>
          <div className="footer-links"><a href={`mailto:${email}`} aria-label="Email Mobeen"><FiMail aria-hidden="true" /></a><a href="#top" className="back-top">Back to top ↑</a></div>
        </div>
      </footer>
    </div>
  )
}

export default App

import { FiArrowUpRight, FiCalendar, FiFeather, FiHeart, FiShoppingBag } from 'react-icons/fi'
import './ProjectsSection.css'

const supportingProjects = [
  {
    number: '02',
    name: 'Nourish',
    category: 'Nutrition & daily routines',
    description: 'Weekly meal planning, a personal food journal and weight tracking, with familiar foods and a simple daily routine.',
    stack: ['Meal planning', 'Food journal', 'Progress'],
    link: 'https://nourish-nutrition-app-nine.vercel.app/',
    icon: FiHeart,
    tone: 'green',
  },
  {
    number: '03',
    name: 'Appointment Booking',
    category: 'Full-stack application',
    description: 'A structured booking experience for client appointments, visa-related details and everyday administration.',
    stack: ['React', 'Express', 'MongoDB'],
    link: 'https://frountend-seven.vercel.app/',
    icon: FiCalendar,
    tone: 'blue',
  },
  {
    number: '04',
    name: 'Story Nest',
    category: 'Writing & publishing',
    description: 'A place to discover stories, share ideas and join the conversation. Built around a simple, readable experience.',
    stack: ['React', 'Node.js', 'MongoDB'],
    link: 'https://blogs-six-wine.vercel.app/',
    icon: FiFeather,
    tone: 'peach',
  },
  {
    number: '05',
    name: 'Zayvora Fashion Jewels',
    category: 'E-commerce · in development',
    description: 'A jewelry storefront with product collections, catalog management and a WhatsApp-first ordering experience.',
    stack: ['Astro', 'React', 'Supabase'],
    link: null,
    icon: FiShoppingBag,
    tone: 'sand',
  },
]

const projectTotal = String(supportingProjects.length + 1).padStart(2, '0')

export default function ProjectsSection() {
  return (
    <section id="work" className="work-showcase section-pad" aria-labelledby="work-title">
      <div className="container">
        <div className="showcase-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> SELECTED PROJECTS</p>
            <h2 id="work-title" className="section-heading">Practical ideas.<br /><span>Built for the web.</span></h2>
          </div>
          <p className="showcase-intro">A closer look at what I build, from everyday tools to full-stack applications.</p>
        </div>

        <article className="featured-work" aria-labelledby="tools-project-title">
          <div className="featured-work-copy">
            <div className="featured-work-meta"><span className="main-project-label"><i aria-hidden="true" />Main project</span><span>01 / {projectTotal}</span></div>
            <p className="featured-work-category">TOOLS & PRODUCTIVITY</p>
            <h3 id="tools-project-title">Multi-Tools<br />Hub<span>.</span></h3>
            <p className="featured-work-description">Useful tools for files, images and everyday work. One place to resize an image, work with PDFs, format code and get things done.</p>
            <ul className="featured-work-highlights" aria-label="Tools Hub highlights">
              <li>File & PDF utilities</li>
              <li>Image editing & conversion</li>
              <li>Developer tools</li>
            </ul>
            <div className="featured-work-bottom">
              <a className="featured-work-link" href="https://multitool-hub.pages.dev/" target="_blank" rel="noopener noreferrer" aria-label="Visit Multi-Tools Hub (opens in a new tab)">Explore Tools Hub <FiArrowUpRight aria-hidden="true" /></a>
              <span className="featured-work-stack">React · Vite · Cloudflare</span>
            </div>
          </div>
          <a className="featured-work-preview" href="https://multitool-hub.pages.dev/" target="_blank" rel="noopener noreferrer" aria-label="Open the Multi-Tools Hub website preview (opens in a new tab)">
            <div className="preview-window">
              <div className="preview-window-bar" aria-hidden="true"><span className="preview-window-dots"><i /><i /><i /></span><span>multitool-hub.pages.dev</span><FiArrowUpRight /></div>
              <img src="/projects/tools-hub.png" alt="Multi-Tools Hub homepage with image resizing, PDF merging and JSON formatting tools" width="1280" height="860" loading="lazy" decoding="async" />
            </div>
            <span className="preview-caption">A real look at the live product <FiArrowUpRight aria-hidden="true" /></span>
          </a>
        </article>

        <div className="supporting-work-heading"><span>More of my work</span><span>{String(supportingProjects.length).padStart(2, '0')} PROJECTS</span></div>
        <div className="supporting-work-grid">
          {supportingProjects.map((project) => {
            const Icon = project.icon
            return (
              <article className="supporting-work-card" key={project.name}>
                <div className="supporting-work-top"><span className={`supporting-work-icon supporting-work-icon--${project.tone}`}><Icon aria-hidden="true" /></span><span>{project.number} / {projectTotal}</span></div>
                <p className="supporting-work-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="supporting-work-description">{project.description}</p>
                <ul className="supporting-work-stack" aria-label={`${project.name} highlights`}>{project.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                <div className="supporting-work-footer">
                  {project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} (opens in a new tab)`}>View live project <FiArrowUpRight aria-hidden="true" /></a> : <span className="project-progress"><i aria-hidden="true" />In development</span>}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

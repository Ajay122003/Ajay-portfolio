import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-16 px-5 py-20 sm:px-9 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected work" title="Projects in" accent="Practice" description="A selection of applications and experiments built around useful, real-world workflows." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => <article key={project.title} data-reveal style={{ transitionDelay: `${(index % 3) * 80}ms` }} className="group overflow-hidden rounded-xl border border-line bg-panel transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-35px_rgba(32,36,33,0.5)]">
            <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.tone}`}>
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#ffffff 0.7px, transparent 0.7px)', backgroundSize: '12px 12px' }} />
              <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="relative h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" />
              <span className="absolute bottom-3 left-3 rounded-md bg-ink/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">0{index + 1}</span>
            </div>
            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-rust">{project.category}</p>
              <h3 className="mt-2 font-display text-lg font-bold text-ink">{project.title}</h3>
              <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-muted">{project.description}</p>
              {project.href ? <a href={project.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-ink transition group-hover:text-rust">View repository <ExternalLink size={14} /></a> : <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-muted">Repository link unavailable <ArrowUpRight size={14} /></span>}
              {project.link ? <a href={project.link} target="_blank" rel="noreferrer" className="mt-4 ms-2 inline-flex items-center gap-2 text-xs font-bold text-ink transition group-hover:text-rust">View Project <ExternalLink size={14} /></a> : <span className="mt-4 ms-2 inline-flex items-center gap-2 text-xs font-medium text-muted">link unavailable <ArrowUpRight size={14} /></span>}
            </div>
          </article>)}
        </div>
      </div>
    </section>
  )
}

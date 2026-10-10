import { ArrowUpRight, Building2, CalendarDays, MapPin } from 'lucide-react'
import { workExperience } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-16 bg-[#eeeee7] px-5 py-20 sm:px-9 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Career" title="Work" accent="Experience" description="Professional work and the products I contribute to day to day." />
        <article data-reveal className="rounded-2xl border border-line bg-panel p-5 shadow-[0_20px_60px_-50px_rgba(32,36,33,0.4)] sm:p-8 lg:p-9">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e9eee8] text-olive"><Building2 size={22} /></div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-xl font-bold text-ink">{workExperience.title}</h3>
                <span className="rounded-full bg-[#e9eee8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-olive">Full-time</span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">Present</span>
              </div>
              <p className="mt-1 font-semibold text-rust">{workExperience.company}</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted"><span className="inline-flex items-center gap-1.5"><CalendarDays size={14} />{workExperience.period}</span><span className="inline-flex items-center gap-1.5"><MapPin size={14} />{workExperience.location}</span></div>
              <ul className="mt-6 space-y-3 pl-4 text-sm leading-7 text-muted marker:text-rust">
                {workExperience.points.map((point) => <li key={point} className="list-disc">{point}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">{workExperience.technologies.map((technology) => <span key={technology} className="rounded-md border border-line bg-paper px-2.5 py-1.5 text-[11px] font-medium text-muted">{technology}</span>)}</div>
              <a href="#projects" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-rust hover:text-rust-dark">Explore projects <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

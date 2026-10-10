import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { education, internships } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

function TimelineCard({ item }) {
  return (
    <article className="relative border-l border-[#d6d8cf] pb-6 pl-5 last:pb-0">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-rust" />
      <div className="rounded-xl border border-line bg-panel p-4 sm:p-5">
        <span className="mb-2 inline-flex rounded-full bg-[#f4e9e2] px-2.5 py-1 text-[11px] font-bold text-rust">{item.years}</span>
        <h4 className="font-display text-base font-bold text-ink">{item.title}</h4>
        <p className="mt-1 text-sm text-muted">{item.detail || item.organization}</p>
        {item.result && <p className="mt-2 text-xs font-semibold text-olive">{item.result}</p>}
        {item.detail && item.organization && <p className="mt-2 text-xs font-semibold text-olive">{item.organization}</p>}
      </div>
    </article>
  )
}

export default function EducationExperienceSection() {
  return (
    <section id="education" className="scroll-mt-16 px-5 py-20 sm:px-9 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Background" title="Education &" accent="Training" description="Academic foundations and hands-on learning that shaped my approach to software development." />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div><h3 className="mb-5 flex items-center gap-2 font-display text-lg font-bold"><GraduationCap size={19} className="text-rust" />Education</h3><div>{education.map((item) => <TimelineCard key={item.title + item.years} item={item} />)}</div></div>
          <div><h3 className="mb-5 flex items-center gap-2 font-display text-lg font-bold"><BriefcaseBusiness size={18} className="text-rust" />Internships</h3><div>{internships.map((item) => <TimelineCard key={item.title} item={item} />)}</div></div>
        </div>
      </div>
    </section>
  )
}

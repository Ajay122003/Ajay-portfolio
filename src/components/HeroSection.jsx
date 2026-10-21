import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { certifications, projects, resumeUrl, skills, workExperience } from '../data/portfolio.js'
import PortfolioAssistant from './PortfolioAssistant.jsx'

function getExperienceDuration(startDate, now = new Date()) {
  const [year, month, day] = startDate.split('-').map(Number)
  const start = new Date(year, month - 1, day)
  let months = (now.getFullYear() - start.getFullYear()) * 12
    + now.getMonth()
    - start.getMonth()

  if (now.getDate() < start.getDate()) months -= 1

  months = Math.max(months, 0)
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  if (years === 0 && remainingMonths === 0) return '<1 mo'

  return [
    years > 0 && `${years} yr${years === 1 ? '' : 's'}`,
    remainingMonths > 0 && `${remainingMonths} mo`,
  ].filter(Boolean).join(' ')
}

export default function HeroSection() {
  const experienceDuration = getExperienceDuration(workExperience.startedAt)
  const stats = [
    { value: `${projects.length}+`, label: 'Projects built' },
    { value: `${skills.length}+`, label: 'Technologies' },
    { value: `${certifications.length}`, label: 'Certifications' },
    { value: experienceDuration, label: 'Experience' },
  ]

  return (
    <section id="about" className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center overflow-hidden px-5 py-16 sm:px-9 lg:min-h-screen lg:px-14 lg:py-20">
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full border border-[#9f3c27]/10 sm:right-0" />
      <div className="pointer-events-none absolute -right-10 top-32 h-60 w-60 rounded-full border border-[#506653]/10" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:gap-16">
        <div data-reveal>
          <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-olive"><span className="h-2 w-2 rounded-full bg-emerald-500" />Available for opportunities</p>
          <h1 className="max-w-2xl font-display text-5xl font-extrabold leading-[1.04] tracking-normal text-ink sm:text-6xl xl:text-7xl">Full Stack<br /><span className="text-rust">Developer</span></h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">I build thoughtful web applications with React, Django, and REST APIs, with a focus on practical tools, clear interfaces, and reliable integrations.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={resumeUrl} download className="inline-flex items-center gap-2 rounded-lg bg-rust px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rust-dark"><Download size={16} />Download CV</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-[#c7c9be] px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink">Let’s talk <ArrowUpRight size={16} /></a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-6">
            {stats.map(({ value, label }) => <div key={label}><p className="font-display text-2xl font-bold text-ink">{value}</p><p className="mt-1 text-[11px] uppercase tracking-wider text-muted">{label}</p></div>)}
          </div>
          <a href="#education" className="mt-9 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted transition hover:text-rust"><ArrowDown size={14} />Explore portfolio</a>
        </div>
        <div data-reveal>
          <PortfolioAssistant />
        </div>
      </div>
    </section>
  )
}

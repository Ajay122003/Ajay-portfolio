import { Atom, Braces, CloudCog, Code2, Coffee, Component, Database, GitBranch, Layers3, PanelsTopLeft, Server, Terminal, Wind, Workflow, Zap } from 'lucide-react'
import { skills } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

const iconMap = { Atom, Braces, CloudCog, Code2, Coffee, Component, Database, GitBranch, Layers3, PanelsTopLeft, Server, Terminal, Wind, Workflow, Zap }

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-16 bg-[#eeeee7] px-5 py-20 sm:px-9 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Expertise" title="Tools I" accent="Work With" description="Technologies I use to plan, build, and ship complete applications." />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code2
            return <article key={skill.name} data-reveal style={{ transitionDelay: `${(index % 3) * 55}ms` }} className="rounded-xl border border-line bg-panel p-4 transition hover:border-[#c7c9be]">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#e9eee8] text-olive"><Icon size={19} strokeWidth={1.8} /></span>
                <span className="flex-1 text-sm font-semibold text-ink">{skill.name}</span>
                <span className="text-xs tabular-nums text-muted">{skill.level}%</span>
              </div>
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-[#e8e8df]"><div className="h-full rounded-full bg-rust" style={{ width: `${skill.level}%` }} /></div>
            </article>
          })}
        </div>
      </div>
    </section>
  )
}

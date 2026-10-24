import { CloudCog } from 'lucide-react'
import { useEffect, useState } from 'react'
import { siCss, siDocker, siDjango, siFastapi, siGithub, siHtml5, siJavascript, siLinux, siModelcontextprotocol, siMysql, siNextdotjs, siNginx, siOpenapiinitiative, siPostgresql, siPython, siReact, siTailwindcss, siTypescript, siVuedotjs } from 'simple-icons'
import { skills } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'full-stack', label: 'Full Stack' },
  { id: 'devops', label: 'DevOps / Deploy' },
]

const iconMap = {
  HTML5: siHtml5,
  CSS3: siCss,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  React: siReact,
  'Tailwind CSS': siTailwindcss,
  Python: siPython,
  Django: siDjango,
  FastAPI: siFastapi,
  Docker: siDocker,
  Nginx: siNginx,
  'Linux Server': siLinux,
  'Next.js': siNextdotjs,
  'Vue.js': siVuedotjs,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  'Git & GitHub': siGithub,
  'REST APIs': siOpenapiinitiative,
  MCP: siModelcontextprotocol,
}

const customIconMap = { Azure: CloudCog }

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const visibleSkills = activeFilter === 'all' || activeFilter === 'full-stack'
    ? skills
    : skills.filter((skill) => skill.categories.includes(activeFilter))

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    const cards = document.querySelectorAll('#skills [data-reveal]')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [activeFilter])

  return (
    <section id="skills" className="scroll-mt-16 bg-[#eeeee7] px-5 py-20 sm:px-9 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Expertise" title="Tools I" accent="Work With" description="Technologies I use to plan, build, and ship complete applications." />
        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter skills">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${activeFilter === filter.id ? 'border-rust bg-rust text-white' : 'border-line bg-panel text-muted hover:border-rust hover:text-rust'}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="grid gap-3 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
          {visibleSkills.map((skill, index) => {
            const icon = iconMap[skill.name]
            const CustomIcon = customIconMap[skill.name]
            return <article key={skill.name} data-reveal style={{ transitionDelay: `${(index % 3) * 55}ms` }} className="rounded-xl border border-line bg-panel p-4 transition hover:border-[#c7c9be]">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#e9eee8]">
                  {icon ? <svg aria-hidden="true" viewBox={icon.viewBox} className="h-5 w-5" style={{ fill: `#${icon.hex}` }}><path d={icon.path} /></svg> : CustomIcon ? <CustomIcon aria-hidden="true" size={20} strokeWidth={1.8} className="text-olive" /> : <img src="/image/java.png" alt="" className="h-5 w-5 object-contain" />}
                </span>
                <span className="flex-1 text-sm font-semibold text-ink">{skill.name}</span>
                {skill.level !== undefined && <span className="text-xs tabular-nums text-muted">{skill.level}%</span>}
              </div>
              {/* <div className="mt-4 h-1 overflow-hidden rounded-full bg-[#e8e8df]"><div className="skill-bar-fill h-full rounded-full bg-rust" style={{ width: `${skill.level}%` }} /></div> */}
            </article>
          })}
        </div>
      </div>
    </section>
  )
}

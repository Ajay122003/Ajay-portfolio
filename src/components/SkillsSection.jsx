import { siCss, siDjango, siFastapi, siGithub, siHtml5, siJavascript, siModelcontextprotocol, siMysql, siNextdotjs, siOpenapiinitiative, siPython, siReact, siTailwindcss, siVuedotjs } from 'simple-icons'
import { skills } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

const iconMap = {
  HTML5: siHtml5,
  CSS3: siCss,
  JavaScript: siJavascript,
  React: siReact,
  'Tailwind CSS': siTailwindcss,
  Python: siPython,
  Django: siDjango,
  FastAPI: siFastapi,
  'Next.js': siNextdotjs,
  'Vue.js': siVuedotjs,
  MySQL: siMysql,
  'Git & GitHub': siGithub,
  'REST APIs': siOpenapiinitiative,
  MCP: siModelcontextprotocol,
}

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-16 bg-[#eeeee7] px-5 py-20 sm:px-9 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Expertise" title="Tools I" accent="Work With" description="Technologies I use to plan, build, and ship complete applications." />
        <div className="grid gap-3 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => {
            const icon = iconMap[skill.name]
            return <article key={skill.name} data-reveal style={{ transitionDelay: `${(index % 3) * 55}ms` }} className="rounded-xl border border-line bg-panel p-4 transition hover:border-[#c7c9be]">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#e9eee8]">
                  {icon ? <svg aria-hidden="true" viewBox={icon.viewBox} className="h-5 w-5" style={{ fill: `#${icon.hex}` }}><path d={icon.path} /></svg> : <img src="/image/java.png" alt="" className="h-5 w-5 object-contain" />}
                </span>
                <span className="flex-1 text-sm font-semibold text-ink">{skill.name}</span>
                <span className="text-xs tabular-nums text-muted">{skill.level}%</span>
              </div>
              {/* <div className="mt-4 h-1 overflow-hidden rounded-full bg-[#e8e8df]"><div className="skill-bar-fill h-full rounded-full bg-rust" style={{ width: `${skill.level}%` }} /></div> */}
            </article>
          })}
        </div>
      </div>
    </section>
  )
}

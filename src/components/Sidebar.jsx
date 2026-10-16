import { Award, BriefcaseBusiness, Code2, Github, GraduationCap, Mail, MapPin, Phone, UserRound } from 'lucide-react'
import { navigation, resumeUrl, socialLinks } from '../data/portfolio.js'

const navigationIcons = {
  about: UserRound,
  education: GraduationCap,
  experience: BriefcaseBusiness,
  projects: Code2,
  skills: Code2,
  certifications: Award,
  contact: Mail,
}

export default function Sidebar({ activeSection, onNavigate }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[258px] flex-col items-center overflow-y-auto bg-[#24352c] px-6 py-8 text-white lg:flex">
      <a href="#about" aria-label="Ajay E home" className="mb-4 h-36 w-36 shrink-0 overflow-hidden rounded-full border-4 border-white/15">
        <img src="/image/Ajay%20E.jpeg" alt="Ajay E" className="block h-full w-full object-cover object-[center_20%]" />
      </a>
      <h1 className="font-display text-xl font-extrabold">Ajay E</h1>
      <p className="mt-1 flex items-center gap-1.5 text-xs text-white/60"><MapPin size={13} /> Coimbatore, India</p>
      <p className="mb-4 mt-4 min-h-5 text-center text-xs font-medium text-white/80">Full Stack Developer</p>

      <nav aria-label="Main navigation" className="w-full space-y-1">
        {navigation.map(({ id, label }) => {
          const Icon = navigationIcons[id]
          return (
            <a key={id} href={`#${id}`} onClick={onNavigate} aria-current={activeSection === id ? 'location' : undefined}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${activeSection === id ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
              <Icon size={17} strokeWidth={1.8} />{label}
            </a>
          )
        })}
      </nav>

      <div className="mt-auto w-full pt-7">
        <div className="mb-4 flex justify-center gap-3">
          <a aria-label="GitHub" href={socialLinks.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 p-2 text-white/75 transition hover:bg-white/10 hover:text-white"><Github size={17} /></a>
          <a aria-label="LinkedIn" href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-2.5 py-2 text-xs font-bold text-white/75 transition hover:bg-white/10 hover:text-white">in</a>
          <a aria-label="Phone" href="tel:+919342198948" className="rounded-full border border-white/15 p-2 text-white/75 transition hover:bg-white/10 hover:text-white"><Phone size={17} /></a>
          <a aria-label="Email" href="mailto:ajayelango54@gmail.com" className="rounded-full border border-white/15 p-2 text-white/75 transition hover:bg-white/10 hover:text-white"><Mail size={17} /></a>
        </div>
        <a href={resumeUrl} download className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10">
          Download resume
        </a>
      </div>
    </aside>
  )
}

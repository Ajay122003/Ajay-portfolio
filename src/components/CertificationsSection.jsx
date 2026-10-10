import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

export default function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-16 px-5 py-20 sm:px-9 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Learning" title="Certificates &" accent="Training" description="Selected courses and workshops that broadened my technical foundation." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certificate) => <a key={certificate.title} href={certificate.image} target="_blank" rel="noreferrer" data-reveal className="group flex min-h-36 items-start gap-4 rounded-xl border border-line bg-panel p-5 transition hover:-translate-y-0.5 hover:border-[#c7c9be] hover:shadow-[0_18px_35px_-32px_rgba(32,36,33,0.5)]">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#f4e9e2] text-rust"><Award size={20} /></span>
            <span className="min-w-0 flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-rust">{certificate.date} · {certificate.organization}</span>
              <span className="mt-2 block font-display text-base font-bold text-ink">{certificate.title}</span>
              <span className="mt-1 block text-xs leading-5 text-muted">{certificate.detail}</span>
            </span>
            <ExternalLink size={14} className="mt-1 shrink-0 text-muted transition group-hover:text-rust" />
          </a>)}
        </div>
      </div>
    </section>
  )
}

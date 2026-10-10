import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react'
import { contactDetails, socialLinks } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

const contactIcons = { Location: MapPin, Phone, Email: Mail }

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 bg-[#eeeee7] px-5 py-20 sm:px-9 lg:px-14 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Contact" title="Let’s" accent="Connect" description="Open to full-time roles, internships, and freelance projects. Send a note and let’s talk about what we can build." />
          <div className="space-y-3">
            {contactDetails.map((detail) => {
              const Icon = contactIcons[detail.label]
              return <div key={detail.label} className="flex items-center gap-3 rounded-xl border border-line bg-panel p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#e9eee8] text-olive"><Icon size={18} /></span>
                <div><p className="text-[10px] font-bold uppercase tracking-wider text-muted">{detail.label}</p>{detail.href ? <a href={detail.href} className="mt-1 block text-sm font-semibold text-ink hover:text-rust">{detail.value}</a> : <p className="mt-1 text-sm font-semibold text-ink">{detail.value}</p>}</div>
              </div>
            })}
          </div>
          <div className="mt-5 flex gap-3">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#24352c] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-olive">GitHub <ArrowUpRight size={14} /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-4 py-2.5 text-xs font-bold text-ink transition hover:border-ink">LinkedIn <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div data-reveal className="rounded-2xl border border-line bg-panel p-5 sm:p-7">
          <h3 className="mb-5 font-display text-xl font-bold text-ink">Send a message</h3>
          <form action="https://formspree.io/f/mandlelq" method="POST" className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-semibold text-muted">Full name<input type="text" name="fullname" autoComplete="name" placeholder="Your name" required className="mt-2 w-full rounded-lg border border-line bg-paper px-3.5 py-3 text-sm text-ink outline-none placeholder:text-muted/65 focus:border-rust" /></label>
            <label className="text-xs font-semibold text-muted">Email address<input type="email" name="email" autoComplete="email" placeholder="you@example.com" required className="mt-2 w-full rounded-lg border border-line bg-paper px-3.5 py-3 text-sm text-ink outline-none placeholder:text-muted/65 focus:border-rust" /></label>
            <label className="text-xs font-semibold text-muted sm:col-span-2">Subject<input type="text" name="subject" placeholder="What would you like to discuss?" className="mt-2 w-full rounded-lg border border-line bg-paper px-3.5 py-3 text-sm text-ink outline-none placeholder:text-muted/65 focus:border-rust" /></label>
            <label className="text-xs font-semibold text-muted sm:col-span-2">Message<textarea name="details" rows="5" placeholder="Write your message here…" required className="mt-2 w-full resize-y rounded-lg border border-line bg-paper px-3.5 py-3 text-sm text-ink outline-none placeholder:text-muted/65 focus:border-rust" /></label>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-rust px-5 py-3 text-sm font-semibold text-white transition hover:bg-rust-dark sm:col-span-2">Send message <Send size={15} /></button>
          </form>
        </div>
      </div>
    </section>
  )
}

import { Menu, X } from 'lucide-react'
import { useEffect } from 'react'
import { navigation, resumeUrl } from '../data/portfolio.js'

export default function MobileNavigation({ open, setOpen }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between border-b border-line bg-paper/95 px-5 backdrop-blur lg:hidden">
        <a href="#about" className="font-display text-lg font-extrabold text-ink">Ajay E</a>
        <button type="button" onClick={() => setOpen(true)} aria-label="Open navigation" aria-expanded={open} className="rounded-lg p-2 text-ink hover:bg-black/5"><Menu size={23} /></button>
      </header>
      <div className={`fixed inset-0 z-40 bg-ink/45 transition-opacity lg:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <nav aria-label="Mobile navigation" aria-hidden={!open} className={`fixed right-0 top-0 z-50 flex h-dvh w-[min(84vw,330px)] flex-col bg-[#24352c] px-6 py-7 text-white shadow-2xl transition-transform duration-300 lg:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="mb-7 flex items-start justify-between">
          <div><p className="font-display text-xl font-extrabold">Ajay E.</p><p className="mt-1 text-xs text-white/60">Full Stack Developer</p></div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close navigation" className="rounded-lg p-2 text-white/80 hover:bg-white/10"><X size={21} /></button>
        </div>
        <div className="space-y-1">
          {navigation.map(({ id, label }) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white">{label}</a>)}
        </div>
        <a href={resumeUrl} download className="mt-7 rounded-lg bg-white/10 px-4 py-3 text-center text-sm font-semibold hover:bg-white/15">Download resume</a>
      </nav>
    </>
  )
}

import { useEffect, useState } from 'react'
import CertificationsSection from './components/CertificationsSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import EducationExperienceSection from './components/EducationExperienceSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import MobileNavigation from './components/MobileNavigation.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import Sidebar from './components/Sidebar.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import WorkExperienceSection from './components/WorkExperienceSection.jsx'

export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const replaySectionAnimation = (event) => {
    if (!(event.target instanceof Element)) return

    const anchor = event.target.closest('a[href^="#"]')
    const section = anchor
      ? document.getElementById(anchor.hash.slice(1))
      : event.target.closest('main section[id]') || document.getElementById(activeSection)

    if (!section?.matches('main section[id]')) return
    section.classList.remove('is-click-animated')
    void section.offsetWidth
    section.classList.add('is-click-animated')
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          if (entry.target.matches('section[id]')) setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -12% 0px' })
    document.querySelectorAll('[data-reveal], main section[id]').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-paper text-ink" onClickCapture={replaySectionAnimation}>
      <Sidebar activeSection={activeSection} />
      <MobileNavigation open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      <main className="pt-16 lg:ml-[258px] lg:pt-0">
        <HeroSection />
        <EducationExperienceSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <div className="lg:ml-[258px]"><SiteFooter /></div>
    </div>
  )
}

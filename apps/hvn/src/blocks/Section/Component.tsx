import { AboutSection } from '@/components/about/AboutSection'
import { Hero } from '@/components/hero/Hero'

type SectionProps = {
  sectionName?: string
}

export const SectionBlock: React.FC<SectionProps> = (prop) => {
  const type = prop?.sectionName || 'hero'

  if (type === 'hero') {
    return (
      <section className="relative min-h-screen bg-gradient-to-b from-primary to-secondary" id="home">
        <Hero />
      </section>
    )
  }

  return (
    <section id="about">
      <AboutSection />
    </section>
  )
}

import Hero from '@/components/Hero'
import Tagline from '@/components/Tagline'
import AboutSection from '@/components/AboutSection'
import CommitmentSection from '@/components/CommitmentSection'
import ApproachSection from '@/components/ApproachSection'
import WhatWeDo from '@/components/WhatWeDo'
import TeamSection from '@/components/TeamSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Tagline />
      <AboutSection />
      <CommitmentSection />
      <ApproachSection />
      <WhatWeDo />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  )
}

import React from 'react'
import { FeatureSection } from '../../components/FeatureSection'
import { Header } from '../../components/Header'
import { HeroSection } from '../../components/HeroSection'
import { NewLetterSection } from '@/components/NewLetterSection'
import { Footer } from '@/components/Footer'
import { PriceSection } from '@/components/PriceSection'
import { StaticSection } from '@/components/StaticSection'


export const Home = () => {
  return (
    <div className="
        relative min-h-screen overflow-hidden
        bg-[#0f1120]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:56px_56px]
      ">
      <Header />
      <HeroSection />
      <FeatureSection />
      <StaticSection />
      <PriceSection />
      <NewLetterSection />
      <Footer />
    </div>
  )
}

import { Hero } from '@/sections/Hero'
import { Stats } from '@/sections/Stats'
import { Why } from '@/sections/Why'
import { Divisions } from '@/sections/Divisions'
import { Process } from '@/sections/Process'
import { Mission } from '@/sections/Mission'
import { Facility } from '@/sections/Facility'
import { Projects } from '@/sections/Projects'
import { CTA } from '@/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Why />
      <Divisions />
      <Process />
      <Mission />
      <Facility />
      <Projects />
      <CTA />
    </>
  )
}

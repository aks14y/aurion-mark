import { PageHeader } from '@/components/layout/PageHeader'
import { PageInProgress } from '@/components/layout/PageInProgress'
import { Stats } from '@/sections/Stats'
import { Mission } from '@/sections/Mission'
import { Why } from '@/sections/Why'

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Aurion Mark"
        title={
          <>
            One partner.
            <br />
            <span className="text-chalk-dim">Total delivery.</span>
          </>
        }
        intro="Aurion Mark Decoration Design LLC delivers integrated design-and-build across the UAE, with in-house fabrication and a single point of responsibility from first drawing to handover."
      />
      <PageInProgress note="The dedicated About page is next in the build queue. The sections below are the live home-page content for this subject, already ported into the new design system." />
      <Stats />
      <Mission />
      <Why />
    </>
  )
}

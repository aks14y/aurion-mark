import { PageHeader } from '@/components/layout/PageHeader'
import { PageInProgress } from '@/components/layout/PageInProgress'
import { Divisions } from '@/sections/Divisions'
import { Process } from '@/sections/Process'

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="What we do"
        title={
          <>
            Integrated
            <br />
            <span className="text-chalk-dim">expertise.</span>
          </>
        }
        intro="Nine trade divisions delivered by our own teams — steel structure, aluminium and glazing, fit-out and joinery, interior design, MEP, flooring and ceiling, demolition, water and pipeline, and oil field works."
      />
      <PageInProgress note="The Services page will expand each division into its own entry with scope, typical deliverables and project references. The register below is already live." />
      <Divisions />
      <Process />
    </>
  )
}

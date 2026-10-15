import { PageHeader } from '@/components/layout/PageHeader'
import { PageInProgress } from '@/components/layout/PageInProgress'
import { Facility } from '@/sections/Facility'

export default function FacilityPage() {
  return (
    <>
      <PageHeader
        label="Manufacturing excellence"
        title={
          <>
            Our
            <br />
            <span className="text-chalk-dim">facility.</span>
          </>
        }
        intro="Dedicated workshops in Dubai for steel fabrication, joinery, aluminium and fit-out pre-fabrication — complete control over quality, cost and schedule from production to site installation."
      />
      <PageInProgress note="The Facility page will add workshop capability, machinery and capacity detail, plus facility photography. The overview below is already live." />
      <Facility />
    </>
  )
}

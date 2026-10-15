import { PageHeader } from '@/components/layout/PageHeader'
import { PageInProgress } from '@/components/layout/PageInProgress'
import { Process } from '@/sections/Process'
import { CTA } from '@/sections/CTA'

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        label="How we work"
        title={
          <>
            Our
            <br />
            <span className="text-chalk-dim">process.</span>
          </>
        }
        intro="Five stages from first consultation to handover, with authority approvals completed before anything is fabricated."
      />
      <PageInProgress note="The Process page will carry stage-by-stage detail — what we need from you, what you receive, and typical durations. The five-stage overview below is already live." />
      <Process />
      <CTA />
    </>
  )
}

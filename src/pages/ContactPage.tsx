import { PageHeader } from '@/components/layout/PageHeader'
import { PageInProgress } from '@/components/layout/PageInProgress'
import { CTA } from '@/sections/CTA'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Get in touch"
        title={
          <>
            Start your
            <br />
            <span className="text-chalk-dim">project with us.</span>
          </>
        }
        intro="Send drawings, a scope note or a site address and we will come back with a design direction, a bill of quantities and a programme."
      />
      <PageInProgress note="The Contact page will add an enquiry form with project-type and scope fields, plus a location map. Contact details below are live." />
      <CTA />
    </>
  )
}

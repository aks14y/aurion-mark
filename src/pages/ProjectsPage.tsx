import { PageHeader } from '@/components/layout/PageHeader'
import { PageInProgress } from '@/components/layout/PageInProgress'
import { Projects } from '@/sections/Projects'
import { CTA } from '@/sections/CTA'

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Selected work"
        title={
          <>
            Projects
            <br />
            <span className="text-chalk-dim">across the UAE.</span>
          </>
        }
        intro="Steel works, interior design, pipeline and oil field projects delivered across commercial, residential and industrial sectors."
      />
      <PageInProgress note="The Projects page needs the real project photography and case-study copy before it can be built properly — send the assets and I will lay them out in this system." />
      <Projects />
      <CTA />
    </>
  )
}

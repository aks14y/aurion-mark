/**
 * Single source of truth for site copy.
 *
 * Copy is reproduced verbatim from the existing aurionmark.com site, except
 * blocks marked "NEW COPY" — those fill gaps the legacy markup never exposed
 * (accordion bodies, step descriptions) and should be reviewed before launch.
 */

export const company = {
  name: 'Aurion Mark',
  legalName: 'Aurion Mark Decoration Design LLC',
  city: 'Dubai',
  country: 'United Arab Emirates',
} as const

export const tagline = [
  { lead: 'Built with ', emphasis: 'precision.' },
  { lead: 'Finished with ', emphasis: 'purpose.' },
] as const

export const nav = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Facility', to: '/facility' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
] as const

export const hero = {
  eyebrow: 'Dubai design + build',
  heading: ['Aurion Mark', 'Dubai, UAE'],
  locale: 'Dubai, UAE',
  intro: 'Turnkey interiors from our Dubai workshops, on one contract.',
} as const

/** Hero specification plate — the practical facts a buyer checks first. */
export const spec = [
  { key: 'Base', value: 'Dubai, United Arab Emirates' },
  { key: 'Scope', value: 'Design, fabrication and fit-out' },
  { key: 'Contract', value: 'Single point of responsibility' },
  { key: 'Compliance', value: 'Dubai Municipality & UAE authorities' },
  { key: 'Hours', value: 'Mon–Sat, 8:00 AM – 6:00 PM' },
] as const

export const why = {
  heading: { lead: 'One partner. ', emphasis: 'Total delivery.' },
  intro:
    'We eliminate the complexity of multi-contractor coordination. From the first drawing to final handover, Aurion Mark manages every trade, every timeline, and every standard.',
  points: [
    {
      title: 'Turnkey Accountability',
      body: 'Single-point responsibility for design, procurement, construction and fit-out. One contract. One guarantee.',
    },
    {
      title: 'UAE Regulatory Compliance',
      body: 'Fully compliant with Dubai Municipality, Abu Dhabi and all relevant UAE authority standards.',
    },
    {
      title: 'In-House Fabrication',
      body: 'Our own workshops for joinery and steelwork ensure quality control and faster delivery timelines.',
    },
  ],
} as const

export const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '25+', label: 'Years Experience' },
  { value: '09', label: 'Trade Divisions' },
] as const

export const divisions = {
  heading: { lead: 'Nine trades, ', emphasis: 'one contract' },
  subheading: 'Tick what you need. We send the scope in one email.',
  // NEW COPY — one-line summaries. The legacy site kept these behind an accordion.
  items: [
    {
      id: 'steel-structure',
      name: 'Steel Structure',
      summary:
        'Load-bearing MS frameworks and architectural stainless steel finishes, fabricated in our own workshops.',
    },
    {
      id: 'aluminium-glazing',
      name: 'Aluminium & Glazing',
      summary:
        'Curtain walls, window systems, cladding and architectural glass installation.',
    },
    {
      id: 'fit-out-joinery',
      name: 'Fit-Out & Joinery',
      summary:
        'Complete interior fit-out and bespoke joinery, prefabricated in-house before it reaches site.',
    },
    {
      id: 'interior-design',
      name: 'Interior Design',
      summary:
        'Concept development, space planning, technical drawings and material specification.',
    },
    {
      id: 'mep-works',
      name: 'MEP Works',
      summary:
        'Mechanical, electrical and plumbing installations, coordinated under a single contract.',
    },
    {
      id: 'flooring-ceiling',
      name: 'Flooring & Ceiling',
      summary:
        'Supply and installation of floor and ceiling systems for commercial and residential interiors.',
    },
    {
      id: 'demolition-works',
      name: 'Demolition Works',
      summary:
        'Controlled strip-out and demolition, prepared for the fit-out that follows.',
    },
    {
      id: 'water-pipeline',
      name: 'Water & Pipeline Works',
      summary: 'Water supply, drainage and pipeline installation to authority standards.',
    },
    {
      id: 'oil-field',
      name: 'Oil Field Gas Lines, Containers & Generators',
      summary:
        'Fabrication and installation for oil field gas lines, containers and generators.',
    },
  ],
} as const

export const process = {
  heading: { lead: 'From talk ', emphasis: 'to keys' },
  // NEW COPY — step descriptions. The legacy site listed titles only.
  steps: [
    {
      n: '01',
      title: 'Consultation',
      body: 'We review your requirement, site conditions and budget.',
    },
    {
      n: '02',
      title: 'Design & BOQ',
      body: 'Drawings, material selection and a priced bill of quantities.',
    },
    {
      n: '03',
      title: 'Approvals',
      body: 'Submission and coordination with the relevant UAE authorities.',
    },
    {
      n: '04',
      title: 'Execution',
      body: 'In-house fabrication and site installation, managed trade by trade.',
    },
    {
      n: '05',
      title: 'Handover',
      body: 'Inspection, snagging and final handover.',
    },
  ],
} as const

export const mission = {
  heading: { lead: 'Our ', emphasis: 'Mission, Vision & Values' },
  blocks: [
    {
      title: 'Our Mission',
      body: 'Our mission is to engineer and fabricate Mild Steel structural and Stainless Steel solutions that exceed industry benchmarks in strength, durability, and precision. From load-bearing MS frameworks to architectural SS finishes, our in-house workshops integrate advanced fabrication with skilled craftsmanship — then carry that same standard through joinery, glazing, MEP, and fit-out to hand over complete turnkey projects under one contract. Every solution we deliver is built to create measurable value for our clients and the communities we work in, while we advance our engineering standards each day, grounded in our core operating principles.',
    },
    {
      title: 'Our Vision',
      body: 'At Aurion Mark, we envision a future where integrated design-and-build delivery sets the benchmark for quality and accountability across the UAE. We see spaces shaped by precision craftsmanship and lasting durability — where design ambition and on-time, on-budget delivery are never a trade-off. Our vision is a built environment that inspires for generations.',
    },
    {
      title: 'Our Values',
      body: 'We are guided by integrity and transparency in everything we do. We deliver high-quality solutions through skilled craftsmanship, precision, and on-time delivery, while understanding our clients’ vision and consistently exceeding their expectations. We embrace innovation, sustainability, and responsible growth in every project we undertake.',
    },
  ],
} as const

export const facility = {
  heading: { lead: 'Manufacturing ', emphasis: 'Excellence' },
  subheading: 'Our Facility',
  statement: ['Built In-House.', 'Delivered On Time.'],
  body: 'Our Dubai facility houses dedicated workshops for steel fabrication, joinery, aluminium and fit-out pre-fabrication — giving us complete control over quality, cost and schedule from production through to site installation. Everything we build is inspected and approved before it leaves our doors.',
  workshops: ['Steel fabrication', 'Joinery', 'Aluminium', 'Fit-out pre-fabrication'],
} as const

export const projects = {
  heading: { lead: 'Selected ', emphasis: 'Work' },
  categories: [
    { name: 'Steel Works', count: 'Structural & architectural' },
    { name: 'Interior Design Works', count: 'Concept to handover' },
    { name: 'Pipeline Works', count: 'Water & drainage' },
    { name: 'Oil Field Works', count: 'Gas lines & containers' },
  ],
} as const

export const contact = {
  heading: { lead: 'Start Your ', emphasis: 'Project With Us' },
  office: 'Dubai, United Arab Emirates',
  phones: ['+971 50 125 1945', '+971 52 220 3395'],
  // PLACEHOLDER — the legacy site obfuscated this address. Confirm before launch.
  email: 'info@aurionmark.com',
  hours: 'Mon–Sat, 8:00 AM – 6:00 PM',
} as const

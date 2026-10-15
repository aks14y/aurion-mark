import { Link } from 'react-router-dom'
import { company, contact, nav } from '@/data/site'
import { Wordmark } from './Wordmark'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-2">
      <div className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
        <div>
          <Wordmark />
          <p className="mt-5 type-label text-chalk-faint">
            Decoration Design LLC
          </p>
          <p className="mt-6 measure-tight text-sm text-chalk-dim">
            Integrated interior design, fit-out, joinery, glazing, MEP and
            structural works — under one roof, on one contract.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="type-label text-chalk-faint">Navigate</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-chalk-dim transition-colors duration-300 hover:text-brass"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="type-label text-chalk-faint">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm text-chalk-dim">
            <li>{contact.office}</li>
            {contact.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="transition-colors duration-300 hover:text-brass"
                >
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors duration-300 hover:text-brass"
              >
                {contact.email}
              </a>
            </li>
            <li className="text-chalk-faint">{contact.hours}</li>
          </ul>
        </div>
      </div>

      {/* Oversized wordmark, set as a closing graphic rather than a label. */}
      <div aria-hidden className="shell select-none pb-2">
        <span
          className="block font-display font-semibold uppercase leading-[0.8] tracking-[-0.03em] text-ink-4"
          style={{
            fontSize: 'clamp(3rem, 13vw, 12rem)',
            fontStretch: 'condensed',
          }}
        >
          Aurion Mark
        </span>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="type-label text-chalk-faint">
          © {year} {company.legalName}
        </p>
        <p className="type-label text-chalk-faint">
          {company.city} · {company.country}
        </p>
      </div>
    </footer>
  )
}

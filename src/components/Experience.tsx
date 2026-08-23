import { useState } from 'react'
import { FiArrowUpRight, FiLink2 } from 'react-icons/fi'

type Job = {
  range: string
  title: string
  company: string
  companyUrl: string
  description: string
  links?: { label: string; href: string }[]
  tags: string[]
}

const jobs: Job[] = [
  {
    range: '2021 — Present',
    title: 'Senior Frontend Engineer',
    company: 'Klaviyo',
    companyUrl: 'https://klaviyo.com',
    description:
      "Lead engineering efforts across our design system and front end platform, partnering closely with designers and engineers to build new products — including Composer, our email and SMS builder — with accessibility built into the foundation of everything we ship.",
    tags: ['React', 'TypeScript', 'Storybook', 'GraphQL'],
  },
  {
    range: '2019 — 2021',
    title: 'Frontend Engineer',
    company: 'Apple',
    companyUrl: 'https://apple.com',
    description:
      'Built and shipped features for Apple Music editorial and Apple Music for Artists, and helped maintain MusicKit JS, a library that lets web developers add Apple Music playback to their own applications.',
    links: [
      { label: 'MusicKit.js', href: 'https://developer.apple.com/musickit/' },
      {
        label: '9to5Mac',
        href: 'https://9to5mac.com',
      },
      { label: 'The Verge', href: 'https://theverge.com' },
    ],
    tags: ['Ember', 'SCSS', 'JavaScript', 'MusicKit.js'],
  },
  {
    range: '2016 — 2017',
    title: 'Developer',
    company: 'Scout Studio',
    companyUrl: 'https://scout.camd.northeastern.edu',
    description:
      'Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.',
    tags: ['Jekyll', 'SCSS', 'JavaScript', 'WordPress'],
  },
  {
    range: 'July — Dec 2016',
    title: 'Software Engineer Co-op',
    company: 'Starry',
    companyUrl: 'https://starry.com',
    description:
      "Worked with the UI team to engineer and improve major features of Starry's customer-facing Android app.",
    links: [
      { label: 'Android App', href: '#' },
      { label: 'ScreenTime 2.0', href: '#' },
    ],
    tags: ['Cordova', 'Backbone', 'JavaScript', 'CSS'],
  },
  {
    range: 'July — Dec 2015',
    title: 'Creative Technologist Co-op',
    company: 'MullenLowe U.S.',
    companyUrl: 'https://mullenlowe.com',
    description:
      'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
]

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="scroll-mt-24 pt-16 lg:pt-24">
      <ul className="flex list-none flex-col gap-2 p-0">
        {jobs.map((job, index) => {
          const isHovered = hoveredIndex === index
          const isDimmed = hoveredIndex !== null && !isHovered

          return (
            <li key={`${job.company}-${job.range}`}>
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                className={`group relative -mx-6 rounded-lg p-6 transition-all duration-300 ${
                  isHovered ? 'bg-slate-800/50 shadow-lg' : 'bg-transparent'
                } ${isDimmed ? 'opacity-50' : 'opacity-100'}`}
              >
                <div className="sm:grid sm:grid-cols-[130px_1fr] sm:gap-4">
                  <header className="mb-1 text-sm font-medium tracking-wide text-text-secondary uppercase sm:mb-0 sm:pt-1">
                    {job.range}
                  </header>

                  <div>
                    <h3 className="text-xl leading-snug font-semibold">
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`no-underline transition-colors duration-200 hover:text-accent-light ${
                          isHovered ? 'text-teal-300' : 'text-text-primary'
                        }`}
                      >
                        {job.title} · {job.company}{' '}
                        <FiArrowUpRight
                          aria-hidden="true"
                          className="inline h-4 w-4 -translate-y-0.5"
                        />
                      </a>
                    </h3>

                    <p className="mt-2 max-w-[560px] text-base leading-[1.6] text-text-secondary">
                      {job.description}
                    </p>

                    {job.links && (
                      <ul className="mt-3 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
                        {job.links.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm text-text-secondary no-underline transition-colors duration-200 hover:text-accent-light"
                            >
                              <FiLink2 aria-hidden="true" className="h-3.5 w-3.5" />
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}

                    <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
                      {job.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-teal-400/10 px-3 py-1.5 text-xs font-medium text-teal-300"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      <a
        href="#"
        className="mt-12 inline-flex items-center gap-2 text-base font-semibold text-text-primary no-underline transition-colors duration-200 hover:text-accent-light"
      >
        View Full Résumé
        <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </a>
    </section>
  )
}

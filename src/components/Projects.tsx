import { useState, type ReactNode } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'

type Project = {
  title: string
  url: string
  description: string
  meta?: { icon: 'star' | 'download'; label: string }
  tags?: string[]
  thumbnail: ReactNode
}

function SpotifyCourseThumbnail() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-teal-500 via-sky-600 to-indigo-700 p-2.5">
      <div className="flex items-center gap-1.5 text-[9px] font-semibold text-white/90">
        <span>node</span>
        <span className="text-white/50">·</span>
        <span>⬡</span>
        <span className="text-white/50">·</span>
        <span>♫</span>
      </div>
      <p className="text-[11px] leading-tight font-bold text-white">
        Build a Spotify Connected App
      </p>
    </div>
  )
}

function SpotifyProfileThumbnail() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 bg-slate-950">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-primary text-[9px] font-bold text-white">
        BC
      </div>
      <p className="text-[9px] font-medium text-white/80">Brittany Chiang</p>
    </div>
  )
}

function HalcyonThumbnail() {
  return (
    <div className="flex h-full w-full flex-col gap-1.5 bg-[#1d2433] p-2.5">
      <p className="text-[11px] font-semibold text-amber-400">Halcyon</p>
      <div className="flex flex-col gap-1">
        <div className="h-1 w-3/4 rounded-full bg-white/15" />
        <div className="h-1 w-1/2 rounded-full bg-accent-light/25" />
        <div className="h-1 w-5/6 rounded-full bg-white/10" />
      </div>
    </div>
  )
}

function BrittanyChiangV4Thumbnail() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-1 bg-slate-950 p-2.5">
      <p className="text-[11px] font-bold text-white">Brittany Chiang.</p>
      <p className="text-[9px] text-text-secondary">I build things for the web.</p>
    </div>
  )
}

const projects: Project[] = [
  {
    title: 'Build a Spotify Connected App',
    url: 'https://www.thebrittanychiang.com',
    description:
      'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.',
    thumbnail: <SpotifyCourseThumbnail />,
  },
  {
    title: 'Spotify Profile',
    url: 'https://spotify-profile.herokuapp.com',
    description:
      'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    meta: { icon: 'star', label: '720' },
    tags: ['React', 'Express', 'Spotify API', 'Heroku'],
    thumbnail: <SpotifyProfileThumbnail />,
  },
  {
    title: 'Halcyon Theme',
    url: 'https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode',
    description:
      'Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.',
    meta: { icon: 'download', label: '100k+ Installs' },
    thumbnail: <HalcyonThumbnail />,
  },
  {
    title: 'brittanychiang.com (v4)',
    url: 'https://github.com/bchiang7/v4',
    description:
      'Fourth iteration of my personal website built with Gatsby and hosted on Netlify. Designed and built from scratch, with an emphasis on interaction and identity.',
    meta: { icon: 'star', label: '1.4k' },
    tags: ['Gatsby', 'React', 'Styled Components'],
    thumbnail: <BrittanyChiangV4Thumbnail />,
  },
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="scroll-mt-24 pt-16 lg:pt-24">
      <ul className="flex list-none flex-col gap-2 p-0">
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index
          const isDimmed = hoveredIndex !== null && !isHovered

          return (
            <li key={project.title}>
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                className={`group relative -mx-6 rounded-lg p-6 transition-all duration-300 ${
                  isHovered ? 'bg-slate-800/50 shadow-lg' : 'bg-transparent'
                } ${isDimmed ? 'opacity-50' : 'opacity-100'}`}
              >
                <div className="sm:grid sm:grid-cols-[140px_1fr] sm:gap-6">
                  <div className="mb-3 h-20 w-[140px] shrink-0 overflow-hidden rounded-md border border-white/10 sm:mb-0">
                    {project.thumbnail}
                  </div>

                  <div>
                    <h3 className="text-xl leading-snug font-semibold">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`no-underline transition-colors duration-200 hover:text-accent-light ${
                          isHovered ? 'text-accent-light' : 'text-text-primary'
                        }`}
                      >
                        {project.title}{' '}
                        <FiArrowUpRight
                          aria-hidden="true"
                          className="inline h-4 w-4 -translate-y-0.5"
                        />
                      </a>
                    </h3>

                    <p className="mt-2 max-w-[560px] text-base leading-[1.6] text-text-secondary">
                      {project.description}
                    </p>

                    {project.meta && (
                      <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-text-primary">
                        {project.meta.icon === 'star' ? (
                          <FaStar aria-hidden="true" className="h-3.5 w-3.5" />
                        ) : (
                          <FiDownload aria-hidden="true" className="h-4 w-4" />
                        )}
                        {project.meta.label}
                      </div>
                    )}

                    {project.tags && (
                      <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full bg-accent-light/10 px-3 py-1.5 text-xs font-medium text-accent-light"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

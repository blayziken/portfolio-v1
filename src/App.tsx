import {
  FaCodepen,
  FaGithub,
  FaGoodreadsG,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'
import { CursorGlow } from './components/CursorGlow'

const navItems = [
  { label: 'About', href: '#about', active: true },
  { label: 'Experience', href: '#experience', active: false },
  { label: 'Projects', href: '#projects', active: false },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: FaLinkedin },
  { label: 'CodePen', href: 'https://codepen.io', Icon: FaCodepen },
  { label: 'Instagram', href: 'https://instagram.com', Icon: FaInstagram },
  { label: 'Goodreads', href: 'https://goodreads.com', Icon: FaGoodreadsG },
]

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 lg:flex-row">
      <CursorGlow />
      <aside className="box-border flex flex-col self-start px-6 pt-12 pb-8 sm:px-10 lg:sticky lg:top-0 lg:min-h-screen lg:flex-[0_0_clamp(340px,49vw,707px)] lg:pt-[102px] lg:pr-16 lg:pb-[92px] lg:pl-[132px]">
        <div>
          <h1 className="m-0 text-[51px] font-extrabold leading-[1.05] tracking-[-1.5px] text-text-primary">
            Brittany Chiang
          </h1>
          <h2 className="mt-4 text-2xl font-semibold leading-[1.3] text-text-primary">
            Frontend Engineer
          </h2>
          <p className="mt-6 max-w-[280px] text-lg leading-[1.4] text-text-secondary">
            I build accessible, pixel-perfect experiences for the web.
          </p>
        </div>

        <nav className="mt-10 flex flex-col gap-6 lg:mt-22" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`group flex items-center gap-4 py-1 text-[13px] font-bold tracking-[2px] transition-colors duration-200 ${
                item.active
                  ? 'text-text-primary opacity-100'
                  : 'text-text-secondary opacity-60 hover:text-text-primary hover:opacity-100'
              }`}
            >
              <span
                aria-hidden="true"
                className={`h-px bg-current transition-[width] duration-200 group-hover:w-12 group-hover:h-0.5 ${
                  item.active ? 'w-20 h-0.5' : 'w-8'
                }`}
              />
              {item.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <ul className="mt-10 flex list-none items-center gap-5 p-0 lg:mt-auto lg:pt-16">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex text-text-secondary transition-colors duration-200 hover:text-primary"
              >
                <Icon className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <main className="box-border min-w-0 flex-1 px-6 pt-2 pb-16 sm:px-10 lg:pt-[102px] lg:pr-[132px] lg:pb-24 lg:pl-0">
        <p className="max-w-[600px] mb-[18px] text-lg leading-[1.5] text-text-secondary">
          Hi there! I'm Brittany, and I like building things. I'm a frontend
          engineer with expertise in crafting accessible, pixel-perfect user
          interfaces. I take pride in creating thoughtful, inclusive products
          and have a sharp eye for the little details that separate a good
          product from an exceptional one. I enjoy working most at the
          intersection of design and engineering, where great user experience
          meets clean, scalable code.
        </p>
        <p className="max-w-[600px] mb-[18px] text-lg leading-[1.5] text-text-secondary">
          Currently, I'm a Senior Frontend Engineer at{' '}
          <a
            className="font-bold text-text-primary no-underline hover:text-primary hover:underline"
            href="#"
          >
            Klaviyo
          </a>
          , where I work on our design system and help build new products,
          like{' '}
          <a
            className="font-bold text-text-primary no-underline hover:text-primary hover:underline"
            href="#"
          >
            Composer
          </a>
          . I lead engineering efforts across our component library and
          front end platform, partnering closely with designers and
          engineers to ensure accessibility is built into the foundation of
          everything we ship.
        </p>
        <p className="max-w-[600px] mb-[18px] text-lg leading-[1.5] text-text-secondary">
          Previously, I've worked across a wide range of environments — from
          product studios to startups and large tech companies — including{' '}
          <a
            className="font-bold text-text-primary no-underline hover:text-primary hover:underline"
            href="#"
          >
            Apple
          </a>
          ,{' '}
          <a
            className="font-bold text-text-primary no-underline hover:text-primary hover:underline"
            href="#"
          >
            Starry Internet
          </a>
          , and{' '}
          <a
            className="font-bold text-text-primary no-underline hover:text-primary hover:underline"
            href="#"
          >
            Upstatement
          </a>
          . Outside of my day-to-day work, I also created an{' '}
          <a
            className="font-bold text-text-primary no-underline hover:text-primary hover:underline"
            href="#"
          >
            online video course
          </a>{' '}
          a few years ago which walks through building a real-world,
          API-driven application from scratch. These experiences have shaped
          how I think about building products that are both well-crafted and
          widely usable.
        </p>
        <p className="max-w-[600px] mb-0 text-lg leading-[1.5] text-text-secondary">
          In my spare time, you can usually find me climbing, playing
          tennis, hanging out with my wife and two cats, or running around
          Hyrule searching for{' '}
          <a
            className="font-bold text-text-primary no-underline hover:text-primary hover:underline"
            href="#"
          >
            Korok seeds
          </a>
          .
        </p>
      </main>
    </div>
  )
}

export default App

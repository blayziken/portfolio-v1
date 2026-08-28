
import { About } from "./components/About";
import { CursorGlow } from "./components/CursorGlow";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { useActiveSection } from "./hooks/useActiveSection";
import { navItems } from "./features/home/nav_items";
import { socialLinks } from "./features/home/social_link";

const sectionIds = navItems.map((item) => item.id);

function App() {
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="flex min-h-screen flex-col bg-slate-900 lg:flex-row">
      <CursorGlow />
      <aside className="box-border flex flex-col self-start px-6 pt-12 pb-8 sm:px-10 lg:sticky lg:top-0 lg:min-h-screen lg:flex-[0_0_clamp(340px,49vw,707px)] lg:pt-[102px] lg:pr-16 lg:pb-[92px] lg:pl-[132px]">
        <div>
          <h1 className="m-0 text-[60px] font-extrabold leading-[1.05] tracking-[-1.5px] text-text-primary">
            Tolu Oluyipe
          </h1>
          <h2 className="mt-4 text-2xl font-semibold leading-[1.3] text-text-primary">
            Software Developer
          </h2>
          <p className="mt-6 max-w-[280px] text-lg leading-[1.4] text-text-secondary">
            I build accessible, pixel-perfect experiences for web and mobile devices.
          </p>
        </div>

        <nav
          className="mt-10 flex flex-col gap-6 lg:mt-22"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = item.id === activeId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`group flex items-center gap-4 py-1 text-[13px] font-bold tracking-[2px] transition-colors duration-200 ${
                  isActive
                    ? "text-text-primary opacity-100"
                    : "text-text-secondary opacity-60 hover:text-text-primary hover:opacity-100"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-px bg-current transition-[width] duration-200 group-hover:w-12 group-hover:h-0.5 ${
                    isActive ? "w-20 h-0.5" : "w-8"
                  }`}
                />
                {item.label.toUpperCase()}
              </a>
            );
          })}
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
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default App;

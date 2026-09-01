import type { ReactNode } from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { HoverCard } from "./HoverCard";
import { TagList } from "./TagList";
import { useHoverIndex } from "../hooks/useHoverIndex";
import glamirisImage from "../assets/glamiris.png";
import mspImage from "../assets/msp.png";
import inspireImage from "../assets/inspire.png";
import cbsImage from "../assets/cbs.png";

type Project = {
  title: string;
  url: string;
  description: string;
  meta?: { icon: "star" | "download"; label: string };
  tags?: string[];
  thumbnail: ReactNode;
};

function GlamirisThumbnail() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-teal-500 via-sky-600 to-indigo-700">
      <img src={glamirisImage} alt="Glamiris" className="h-full w-full" />
    </div>
  );
}

function MSPThumbnail() {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 bg-slate-950">
      <img
        src={mspImage}
        alt="MySkool Portal"
        className="h-full w-cover"
      />{" "}
    </div>
  );
}

function InspireThumbnail() {
  return (
    <div className="flex h-full w-full">
      <img src={inspireImage} alt="Inspire" className="h-full w-cover" />{" "}
    </div>
  );
}

function CBSThumbnail() {
  return (
    <div className="flex flex-col justify-center">
      <img src={cbsImage} alt="CBS" className="h-full w-cover" />{" "}
    </div>
  );
}

const projects: Project[] = [
  {
    title: "Glamiris",
    url: "https://apps.apple.com/ng/app/glamiris/id1572687679?platform=iphone",
    description:
      "A salon management software made with a passion for customer happiness and business growth.",
    thumbnail: <GlamirisThumbnail />,
  },
  {
    title: "MySkool Portal",
    url: "https://play.google.com/store/apps/details?id=com.krystaldigital.MySkool_Portal",
    description:
      "Ultimate app for managing school activities efficiently, Teachers can easily manage their students while parents have access to track their child's performance and records. Experience intuitive user interface and optimized performance, making school management simpler and more efficient.",
    meta: { icon: "download", label: "5k+ Installs" },
    thumbnail: <MSPThumbnail />,
  },
  {
    title: "Inspire Learning",
    url: "https://www.inspire.krystalng.com/",
    description:
      "A comprehensive digital education platform developed in partnership with educational initiatives to bring the classroom closer to students",
    meta: { icon: "download", label: "10k+ Installs" },
    tags: ["React", "Laravel", "Flutter", "MySQL"],
    thumbnail: <InspireThumbnail />,
  },
  {
    title: "Central Billing System",
    url: "https://apps.apple.com/ca/app/central-billing-system/id1661103467",
    description:
      "A central billing platform for all Federal Unity Colleges in Nigeria",
    meta: { icon: "star", label: "1.4k" },
    tags: ["HTML/CSS", "Laravel", "Flutter"],
    thumbnail: <CBSThumbnail />,
  },
];

export function Projects() {
  const { isHovered, isDimmed, onHoverStart, onHoverEnd } = useHoverIndex();

  return (
    <section id="projects" className="scroll-mt-24 pt-16 lg:pt-24">
      <ul className="flex list-none flex-col gap-2 p-0">
        {projects.map((project, index) => {
          const hovered = isHovered(index);

          return (
            <li key={project.title}>
              <HoverCard
                isHovered={hovered}
                isDimmed={isDimmed(index)}
                onHoverStart={onHoverStart(index)}
                onHoverEnd={onHoverEnd}
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
                          hovered ? "text-accent-light" : "text-text-primary"
                        }`}
                      >
                        {project.title}{" "}
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
                        {project.meta.icon === "star" ? (
                          <FaStar aria-hidden="true" className="h-3.5 w-3.5" />
                        ) : (
                          <FiDownload aria-hidden="true" className="h-4 w-4" />
                        )}
                        {project.meta.label}
                      </div>
                    )}

                    {project.tags && (
                      <TagList
                        tags={project.tags}
                        colorClassName="bg-accent-light/10 text-accent-light"
                      />
                    )}
                  </div>
                </div>
              </HoverCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

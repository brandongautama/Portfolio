import myphoto3 from "../assets/images/myphoto3.jpg";
import { highlights } from "../constants";
import Reveal from "../components/Reveal";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/brandongautama" },
  { label: "GitHub", href: "https://github.com/brandongautama" },
  { label: "Medium", href: "https://medium.com/@brandongautama" },
  { label: "Email", href: "mailto:brandongautama15@gmail.com" },
];

const About = () => {
  return (
    <section id="about" className="pb-12">
      <Reveal>
        <div className="flex items-center gap-5">
          <img
            src={myphoto3}
            alt="Brandon Gautama"
            className="h-20 w-20 sm:h-28 sm:w-28 shrink-0 rounded-2xl object-cover ring-1 ring-hairline"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
              Brandon Gautama
            </h1>
            <p className="mt-1 text-lg text-ink">
              Senior Software Engineer at Roblox
            </p>
            <p className="mt-1 section-label">Backend · Distributed Systems</p>
          </div>
        </div>

        <p className="mt-8 max-w-prose text-base leading-relaxed text-ink-muted">
          Based in the San Francisco Bay Area, I spent six years at Amazon before joining Roblox. At Alexa, I built the cloud service powering content on Echo Show devices worldwide, and at AWS I built a multi-tenant data streaming platform and workflow engines for enterprise customers across automotive and genomics. I design and build high-throughput distributed systems, including fault-tolerant retry storm protection that absorbed a 50x traffic surge during a major AWS outage.
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-ink-muted transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm"
              >
                {link.label}
                {link.href.startsWith("http") && (
                  <span aria-hidden="true" className="ml-0.5 text-ink-faint">
                    ↗
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Highlights */}
      <Reveal delay={0.1}>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 border-t border-hairline">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.metric}
              className={`py-5 pr-4 ${index % 2 === 1 ? "pl-4 border-l border-hairline" : ""} ${
                index > 0 ? "md:pl-4 md:border-l md:border-hairline" : ""
              } ${index > 1 ? "border-t border-hairline md:border-t-0" : ""}`}
            >
              <p className="text-xl font-semibold tracking-tight tabular-nums text-ink">
                {highlight.metric}
              </p>
              <p className="mt-1 text-sm font-medium text-ink">
                {highlight.title}
              </p>
              <p className="mt-1 text-sm text-ink-muted">
                {highlight.detail}
              </p>
              <p className="mt-2 font-mono text-xs text-ink-faint">
                {highlight.where}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default About;

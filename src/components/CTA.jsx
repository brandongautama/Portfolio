const links = [
  { label: "brandongautama15@gmail.com", href: "mailto:brandongautama15@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/brandongautama" },
  { label: "GitHub", href: "https://github.com/brandongautama" },
  { label: "Medium", href: "https://medium.com/@brandongautama" },
];

const CTA = () => (
  <footer className="border-t border-hairline py-12">
    <h2 className="section-label">Contact</h2>
    <p className="mt-4 text-ink">Feel free to reach out.</p>
    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-link"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
    <p className="mt-10 font-mono text-xs text-ink-faint">
      © {new Date().getFullYear()} Brandon Gautama
    </p>
  </footer>
);

export default CTA;

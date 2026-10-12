import { writing } from "../constants";
import Section from "../components/Section";

const Writing = () => {
  // Posts without a link yet stay hidden until they're published
  const posts = writing.posts.filter((post) => post.link);

  return (
    <Section id="writing" label="Writing">
      <ul className="divide-y divide-hairline border-y border-hairline">
        {posts.map((post) => (
          <li key={post.title}>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium text-ink transition group-hover:text-accent">
                  {post.title}
                  <span
                    aria-hidden="true"
                    className="ml-1 inline-block text-ink-faint transition group-hover:translate-x-0.5 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </h3>
                <p className="shrink-0 font-mono text-xs text-ink-faint">
                  {post.date}
                </p>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                {post.summary}
              </p>
            </a>
          </li>
        ))}
      </ul>
      <a
        href={writing.profile}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-link"
      >
        All posts on Medium ↗
      </a>
    </Section>
  );
};

export default Writing;

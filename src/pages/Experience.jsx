import Section from "../components/Section";

// Result numbers in a bullet ("75 minutes to 8 minutes", "9x faster", "40%")
const RESULT =
  /(\d[\d,.]*(?:K|ms|\+)?(?:-\d+)?\s?(?:minutes|days|TPS)?\s(?:→|to)\s(?:under\s)?\d[\d,.]*(?:K|ms|\+)?(?:\s(?:TPS|minutes|days|concurrent tasks))?|\d[\d.]*x(?: faster)?|\d+%|\d[\d,]+\+? (?:TPS|customer-hours))/;

const withResults = (text) =>
  text.split(RESULT).map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="font-medium text-ink">
        {part}
      </span>
    ) : (
      part
    )
  );

// One list for both Work Experience and Education
const Experience = ({ id, label, timeline, highlightResults = false, stacked = false }) => (
  <Section id={id} label={label}>
    <ol className="space-y-10">
      {timeline.experiences.map((item) => (
        <li key={`${item.title}${item.company_name}`}>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-hairline bg-white">
              <img src={item.icon} alt="" className="h-5 w-5 object-contain" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-medium text-ink">
                {item.title}
                {!stacked && (
                  <span className="text-ink-muted"> · {item.company_name}</span>
                )}
              </h3>
              <p className="shrink-0 font-mono text-xs text-ink-faint">
                {item.date}
              </p>
            </div>
          </div>
          {stacked && (
            <p className="mt-1 pl-11 text-sm text-ink-muted">{item.company_name}</p>
          )}
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-muted marker:text-ink-faint">
            {item.points.map((point, index) => (
              <li key={`point-${index}`}>
                {highlightResults ? withResults(point) : point}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;

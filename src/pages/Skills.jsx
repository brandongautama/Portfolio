import { skillGroups } from "../constants";
import Section from "../components/Section";

const Skills = () => (
  <Section id="skills" label="Skills">
    <dl className="space-y-3">
      {skillGroups.map((group) => (
        <div key={group.label} className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
          <dt className="text-sm font-medium text-ink">{group.label}</dt>
          <dd className="text-sm text-ink-muted">{group.items.join(" · ")}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Skills;

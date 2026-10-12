const Section = ({ id, label, children }) => (
  <section id={id} className="border-t border-hairline py-12">
    <h2 className="section-label">{label}</h2>
    <div className="mt-6">{children}</div>
  </section>
);

export default Section;

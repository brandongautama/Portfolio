import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="mx-auto max-w-[720px] py-24">
    <p className="section-label">404</p>
    <h1 className="mt-3 text-2xl font-semibold tracking-tight">This page doesn't exist.</h1>
    <Link to="/" className="mt-6 inline-block text-sm text-link">
      Back to home →
    </Link>
  </section>
);

export default NotFound;

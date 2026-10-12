import { writing } from "../constants";
import { arrow } from "../assets/icons";

const Writing = () => {
  // Posts without a link yet stay hidden until they're published
  const posts = writing.posts.filter((post) => post.link);

  return (
    <section id="#writing">
      <div className="py-10">
        <h3 className="subhead-text">Writing</h3>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200/80 bg-white">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-6 p-5 transition first:rounded-t-2xl last:rounded-b-2xl hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div>
                <h4 className="font-poppins font-medium text-slate-800 transition group-hover:text-blue-600">
                  {post.title}
                </h4>
                <p className="mt-1 text-sm text-slate-500">{post.summary}</p>
                <p className="mt-2 text-xs text-slate-400">
                  Medium · {post.date}
                </p>
              </div>
              <img
                src={arrow}
                alt=""
                className="mt-1 w-4 h-4 shrink-0 opacity-50 transition group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
        <a
          href={writing.profile}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 font-poppins text-sm font-medium text-blue-600 hover:underline"
        >
          All posts on Medium
          <img src={arrow} alt="" className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};

export default Writing;

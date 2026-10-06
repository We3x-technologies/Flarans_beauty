import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconArrowLeft, IconArrowUpRight } from "@tabler/icons-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BlogArticleLayout({
  category,
  title,
  description,
  children,
}) {
  return (
    <main className="overflow-hidden bg-white text-neutral-950">
      <section className="border-b border-rose-100 bg-rose-50 pt-28 sm:pt-32 lg:pt-36">
        <div className="mx-auto max-w-5xl px-5 pb-14 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 transition hover:text-pink-700"
            >
              <IconArrowLeft size={15} />
              Back to Blog
            </Link>

            <div className="mt-8 text-[11px] font-black uppercase tracking-[0.2em] text-pink-700">
              {category}
            </div>

            <h1 className="merriweather mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-[62px] lg:leading-[1.05]">
              {title}
            </h1>

            {description && (
              <p className="mt-6 max-w-3xl text-[16px] leading-8 text-neutral-600">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10"
        >
          {children}
        </motion.article>
      </section>
    </main>
  );
}

export function ArticleSection({ id, title, children, level = 2 }) {
  const Heading = level === 3 ? "h3" : "h2";

  return (
    <section id={id} className="scroll-mt-28 pt-10 first:pt-0">
      <Heading
        className={
          level === 3
            ? "merriweather text-2xl font-black tracking-[-0.025em] text-neutral-950 sm:text-[28px]"
            : "merriweather text-3xl font-black tracking-[-0.035em] text-neutral-950 sm:text-[34px]"
        }
      >
        {title}
      </Heading>

      <div className="mt-5">{children}</div>
    </section>
  );
}

export function ArticleParagraph({ children, className = "" }) {
  return (
    <p className={`mt-4 text-[16px] leading-8 text-neutral-600 first:mt-0 ${className}`}>
      {children}
    </p>
  );
}

export function BulletList({ items }) {
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl border border-rose-100 bg-white px-4 py-3 text-sm font-semibold text-neutral-700 shadow-sm"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function QuestionAnswer({ question, answer }) {
  return (
    <div className="mt-5 rounded-[18px] border border-rose-100 bg-white shadow-sm p-5">
      <p className="font-black text-neutral-950">{question}</p>
      <p className="mt-2 text-[15px] leading-7 text-neutral-600">{answer}</p>
    </div>
  );
}

export function SeoLink({ to, children }) {
  return (
    <Link
      to={to}
      className="font-bold text-neutral-950 underline decoration-pink-300 underline-offset-4 transition hover:text-pink-700 hover:decoration-pink-700"
    >
      {children}
    </Link>
  );
}

export function ProcessLine({ children }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-[18px] border border-pink-200 bg-pink-50/60 px-5 py-4 text-sm font-black text-neutral-900">
      <div className="min-w-max">{children}</div>
    </div>
  );
}

export function ArticleCta({ to, label }) {
  return (
    <Link
      to={to}
      className="group mt-10 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-pink-700 shadow-md hover:shadow-lg"
    >
      {label}
      <IconArrowUpRight
        size={16}
        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}
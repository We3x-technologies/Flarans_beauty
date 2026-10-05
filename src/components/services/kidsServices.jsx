import { useMemo, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { kidsCategories, kidsServices } from "../../data/kidsServices";
import LampContainer from "../ui/lamp";

export default function KidsServices() {
  const [active, setActive] = useState("All");
  const visibleServices = useMemo(
    () =>
      active === "All"
        ? kidsServices
        : kidsServices.filter((service) => service.category === active),
    [active]
  );

  return (
    <section className="w-full overflow-hidden bg-[#FFF9FF] pb-20 sm:pb-24">
      <LampContainer>
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="font-display text-2xl italic text-[#791B70]"
          >
            Kids&apos; Services
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
            className="mt-1 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-[#B53FBB]/50" />
            <h2 className="font-display text-4xl text-[#351132] sm:text-5xl">
              Gentle Care for Little Ones
            </h2>
            <span className="h-px w-10 bg-[#B53FBB]/50" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            className="mt-4 text-sm leading-6 text-[#6F536D]"
          >
            Explore our kids&apos; grooming service, designed for children below
            10.
          </motion.p>
        </div>
      </LampContainer>

      <div className="mx-auto -mt-10 w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div
          className="relative z-10 flex flex-wrap justify-center gap-3"
          role="tablist"
          aria-label="Kids' service categories"
        >
          {["All", ...kidsCategories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              role="tab"
              aria-selected={active === category}
              className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === category
                  ? "border-[#791B70] bg-[#791B70] text-white shadow-md shadow-[#791B70]/20"
                  : "border-[#E7BDE6] bg-white text-[#791B70] hover:border-[#B53FBB] hover:bg-[#FFF9FF]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative z-10 mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleServices.map((item) => {
            const Icon = item.icon || Sparkles;

            return (
              <article
                key={`${item.category}-${item.name}`}
                className="group overflow-hidden rounded-2xl border border-[#E7BDE6]/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF9FF] via-[#E7BDE6]/60 to-[#B53FBB]/30">
                  <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/60 blur-2xl" />
                  <div className="relative grid h-16 w-16 place-items-center rounded-full border border-white/80 bg-white/80 text-[#791B70] shadow-md">
                    <Icon size={28} />
                  </div>
                  <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#791B70]">
                    {item.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-[24px] leading-tight text-[#351132]">
                    {item.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#6F536D]">
                    {item.description ||
                      `${item.name} from our kids' ${item.category} collection.`}
                  </p>
                  <Link
                    to={`/contact?gender=kids&category=${encodeURIComponent(item.category)}&service=${encodeURIComponent(item.name)}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#791B70] transition-all duration-300 group-hover:gap-2.5"
                  >
                    Book / Enquire
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
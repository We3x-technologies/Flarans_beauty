import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { categories, services } from '../data/services';
import LampContainer from './ui/lamp';

export default function Services() {
  const [searchParams] = useSearchParams();
  const requestedCategory = searchParams.get('category');
  const initialCategory = categories.includes(requestedCategory)
    ? requestedCategory
    : 'All';
  const [active, setActive] = useState(initialCategory);

  useEffect(() => {
    setActive(initialCategory);
  }, [initialCategory]);

  const visibleServices = useMemo(
    () =>
      active === 'All'
        ? services
        : services.filter((item) => item.category === active),
    [active]
  );

  // Helper to scroll the clicked mobile category into the center of the screen
  const handleMobileCategoryClick = (category, event) => {
    setActive(category);
    event.currentTarget.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  return (
    <section className="w-full bg-[#FFF9FF] overflow-hidden pb-20 sm:pb-24">
      {/* Section Header with Lamp Effect */}
      <LampContainer>
        <div className="mx-auto max-w-2xl text-center mt-8">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
            className="font-display text-2xl italic text-[#791B70]"
          >
            Our Services
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
            className="mt-1 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-[#B53FBB]/50" />
            <h2 className="font-display text-4xl text-[#351132] sm:text-5xl">
              What We Offer
            </h2>
            <span className="h-px w-10 bg-[#B53FBB]/50" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
            className="mt-4 text-sm leading-6 text-[#6F536D]"
          >
            Explore the beauty services offered by DIVA Natural, carefully
            organized so you can quickly find the right treatment.
          </motion.p>
        </div>
      </LampContainer>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 -mt-10">
        
        {/* DESKTOP Service Categories (Hidden on Mobile) */}
        <div
          className="hidden sm:flex flex-wrap justify-center gap-3 relative z-10"
          role="tablist"
          aria-label="Service categories"
        >
          {categories.map((category) => (
            <button
              key={`desktop-${category}`}
              type="button"
              onClick={() => setActive(category)}
              role="tab"
              aria-selected={active === category}
              className={`
                whitespace-nowrap rounded-full border
                px-5 py-2.5
                text-sm font-medium
                transition-all duration-300
                ${
                  active === category
                    ? 'border-[#791B70] bg-[#791B70] text-white shadow-md shadow-[#791B70]/20'
                    : 'border-[#E7BDE6] bg-white text-[#791B70] hover:border-[#B53FBB] hover:bg-[#FFF9FF]'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* MOBILE Service Categories (Horizontal "Circular" Scroll) */}
        <div className="sm:hidden relative z-10 -mx-5 px-5">
          {/* Fading edges to make the scroll look cleaner */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-8 bg-gradient-to-r from-[#FFF9FF] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-8 bg-gradient-to-l from-[#FFF9FF] to-transparent" />
          
          <div
            className="flex overflow-x-auto snap-x snap-mandatory gap-3 py-4 px-[10vw] [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            role="tablist"
            aria-label="Mobile service categories"
          >
            {categories.map((category) => (
              <button
                key={`mobile-${category}`}
                type="button"
                onClick={(e) => handleMobileCategoryClick(category, e)}
                role="tab"
                aria-selected={active === category}
                className={`
                  snap-center shrink-0 whitespace-nowrap rounded-full border
                  px-6 py-3 text-sm font-medium
                  transition-all duration-500 ease-out
                  ${
                    active === category
                      ? 'scale-110 border-[#791B70] bg-[#791B70] text-white shadow-lg shadow-[#791B70]/30 z-10'
                      : 'scale-95 border-[#E7BDE6] bg-white text-[#791B70] opacity-60 hover:opacity-100'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10">
          {visibleServices
            .slice(0, active === 'All' ? 12 : visibleServices.length)
            .map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={`${item.category}-${item.name}`}
                  className="group overflow-hidden rounded-2xl border border-[#E7BDE6]/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.name} beauty service`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#351132]/50 to-transparent opacity-70" />

                    {/* Icon */}
                    <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-white/90 text-[#791B70] backdrop-blur">
                      <Icon size={18} />
                    </div>

                    {/* Category */}
                    <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#791B70]">
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display text-[24px] leading-tight text-[#351132]">
                      {item.name}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#6F536D]">
                      {item.description}
                    </p>

                    <Link
                      to={`/contact?category=${encodeURIComponent(item.category)}&service=${encodeURIComponent(item.name)}`}
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

        {/* Bottom Message */}
        {active === 'All' && services.length > 12 && (
          <div className="mt-9 text-center relative z-10">
            <p className="text-xs text-[#6F536D]/70">
              <Sparkles
                className="mr-1 inline-block text-[#B53FBB]"
                size={13}
              />
              Select a category above to explore the full service list.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
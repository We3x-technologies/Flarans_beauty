import { useEffect, useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { menCategories, menServices } from '../data/menServices';
import { womenCategories, womenServices } from '../data/womenServices';
import { kidsCategories, kidsServices } from '../data/kidsServices';
import LampContainer from './ui/lamp';

export default function Services() {
  const pageSize = 12;
  const [searchParams] = useSearchParams();
  const requestedGender = searchParams.get('gender');
  const requestedCategory = searchParams.get('category');
  const initialGender = ['men', 'kids'].includes(requestedGender) ? requestedGender : 'women';
  const categories =
    initialGender === 'men'
      ? menCategories
      : initialGender === 'kids'
        ? kidsCategories
        : womenCategories;
  const initialCategory = categories.includes(requestedCategory)
    ? requestedCategory
    : 'All';
  const [gender, setGender] = useState(initialGender);
  const [active, setActive] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const services =
    gender === 'men' ? menServices : gender === 'kids' ? kidsServices : womenServices;
  const serviceCategories =
    gender === 'men' ? menCategories : gender === 'kids' ? kidsCategories : womenCategories;

  useEffect(() => {
    setGender(initialGender);
    setActive(initialCategory);
  }, [initialGender, initialCategory]);

  const visibleServices = useMemo(
    () =>
      active === 'All'
        ? services
        : services.filter((item) => item.category === active),
    [active, services]
  );
  const pageCount = Math.ceil(visibleServices.length / pageSize);
  const paginatedServices = visibleServices.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [gender, active]);

  // Helper to scroll the clicked mobile category into the center of the screen
  const handleMobileCategoryClick = (category, event) => {
    setActive(category);
    event.currentTarget.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  const handleGenderChange = (nextGender) => {
    setGender(nextGender);
    setActive('All');
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
            Explore our services and choose the collection that is right for you.
          </motion.p>
        </div>
      </LampContainer>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 -mt-10">
        <div className="relative z-10 mb-7 flex justify-center gap-3" aria-label="Filter services by gender">
          {[
            { value: 'women', label: "Women's Services" },
            { value: 'men', label: "Men's Services" },
            { value: 'kids', label: "Kids' Services" },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleGenderChange(option.value)}
              aria-pressed={gender === option.value}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                gender === option.value
                  ? 'border-[#791B70] bg-[#791B70] text-white shadow-md'
                  : 'border-[#E7BDE6] bg-white text-[#791B70] hover:border-[#B53FBB]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        
        {/* DESKTOP Service Categories (Hidden on Mobile) */}
        <div
          className="hidden sm:flex flex-wrap justify-center gap-3 relative z-10"
          role="tablist"
          aria-label="Service categories"
        >
          {['All', ...serviceCategories].map((category) => (
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
            {['All', ...serviceCategories].map((category) => (
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
          {paginatedServices.map((item) => {
              const Icon = item.icon;

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

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display text-[24px] leading-tight text-[#351132]">
                      {item.name}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#6F536D]">
                      {item.description || `${item.name} from our ${item.category} collection.`}
                    </p>

                    <Link
                      to={`/contact?gender=${gender}&category=${encodeURIComponent(item.category)}&service=${encodeURIComponent(item.name)}`}
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

        {pageCount > 1 && (
          <nav
            className="relative z-10 mt-9 flex flex-col items-center justify-between gap-4 sm:flex-row"
            aria-label="Services pagination"
          >
            <p className="text-xs text-[#6F536D]">
              Showing {(currentPage - 1) * pageSize + 1}–
              {Math.min(currentPage * pageSize, visibleServices.length)} of {visibleServices.length} services
            </p>
            <div className="flex w-full items-center justify-center gap-2 sm:w-auto">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="min-h-10 rounded-full border border-[#E7BDE6] bg-white px-3 py-2 text-sm font-medium text-[#791B70] transition hover:border-[#791B70] disabled:cursor-not-allowed disabled:opacity-40 sm:px-4"
              >
                <span className="sm:hidden">Prev</span>
                <span className="hidden sm:inline">Previous</span>
              </button>
              <span
                className="whitespace-nowrap px-1 text-sm tabular-nums text-[#6F536D] sm:hidden"
                aria-live="polite"
              >
                Page {currentPage} of {pageCount}
              </span>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                  className={`hidden h-9 w-9 place-items-center rounded-full border text-sm font-medium transition sm:grid ${
                    currentPage === page
                      ? 'border-[#791B70] bg-[#791B70] text-white'
                      : 'border-[#E7BDE6] bg-white text-[#791B70] hover:border-[#791B70]'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(pageCount, page + 1))}
                disabled={currentPage === pageCount}
                className="min-h-10 rounded-full border border-[#E7BDE6] bg-white px-3 py-2 text-sm font-medium text-[#791B70] transition hover:border-[#791B70] disabled:cursor-not-allowed disabled:opacity-40 sm:px-4"
              >
                <span className="sm:hidden">Next</span>
                <span className="hidden sm:inline">Next</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </section>
  );
}
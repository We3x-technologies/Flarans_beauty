import { AnimatedTestimonials } from './ui/animated-testimonials';

export default function Testimonials() {
  const testimonialsData = [
    {
      name: "Placeholder Customer",
      designation: "Verified Client",
      quote: "The salon experience was warm, polished and comfortable. Replace this review with a real customer testimonial.",
      src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=3539&auto=format&fit=crop", // Beauty/spa placeholder
    },
    {
      name: "Placeholder Customer",
      designation: "Bridal Client",
      quote: "A placeholder review for the website launch. Add verified client feedback here later.",
      src: "https://images.unsplash.com/photo-1516975080661-460d3fc3c03a?q=80&w=3540&auto=format&fit=crop", 
    },
    {
      name: "Placeholder Customer",
      designation: "Regular Client",
      quote: "A sample testimonial block to demonstrate the final visual layout of customer reviews.",
      src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=3538&auto=format&fit=crop",
    },
    {
      name: "Placeholder Customer",
      designation: "Hair Styling Client",
      quote: "Use this area for a short, authentic customer experience once reviews are collected.",
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=3538&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-2xl italic text-rose-500">
            Client Love
          </p>
          <h2 className="mt-1 font-display text-4xl sm:text-5xl text-ink">
            Kind words, beautifully kept.
          </h2>
          <p className="mt-4 text-xs leading-6 text-ink/50">
            Placeholder testimonials — replace these with verified customer reviews before launch.
          </p>
        </div>

        {/* Animated Testimonials Component */}
        <div className="mt-8">
          <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
        </div>
        
      </div>
    </section>
  );
}
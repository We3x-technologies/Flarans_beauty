import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { CometCard } from "./ui/Coment-card";
import { motion } from "motion/react";

export default function ServicesPreview() {
  const creativeServices = [
    {
      title: "Bridal Artistry",
      serviceName: "Bridal Makeup",
      desc: "Flawless transformations for your unforgettable day.",
      category: "Makeup",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80",
      link: "/services?category=Bridal",
    },
    {
      title: "Hair Design",
      serviceName: "Hair Spa (Small / Medium / Long)",
      desc: "Precision cuts, vibrant colors, and expert styling.",
      category: "Hair Care",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
      link: "/services?category=Hair%20Care",
    },
    {
      title: "Skin Radiance",
      serviceName: "Skin Brightening",
      desc: "Advanced facials tailored for glowing, healthy skin.",
      category: "Facials",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80",
      link: "/services?category=Facials",
    },
    {
      title: "Nail Spa",
      serviceName: "Pedicure Spa",
      desc: "Luxurious manicures and lasting, elegant nail art.",
      category: "Pedicure & Manicure",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&w=600&q=80",
      link: "/services?category=Pedicure%20%26%20Manicure",
    },
  ];

  return (
    <section className="bg-[#FFF9FF] py-24 sm:py-32 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Creative Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-full border border-[#E7BDE6] bg-white px-4 py-1.5 shadow-sm"
          >
            <Sparkles size={14} className="text-[#D4AF37]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#791B70]">
              The Flarans Experience
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-display text-4xl leading-tight text-[#351132] sm:text-5xl lg:text-6xl"
          >
            Artistry in Every Detail
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm leading-relaxed text-[#6F536D] sm:text-base max-w-xl"
          >
            Hover over our signature services to explore a world where precision meets elegance.
          </motion.p>
        </div>

        {/* Comet Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 justify-items-center">
          {creativeServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-[16rem]"
            >
              <CometCard className="w-full">
                {/* 
                  Notice this is a <div>, NOT an <a> tag. 
                  The container itself is not clickable.
                */}
                <div className="flex flex-col rounded-[16px] border border-white/10 bg-[#351132] p-3">
                  
                  {/* Image Section */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#351132]/80 via-transparent to-transparent opacity-80" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="mt-4 flex flex-col items-center text-center px-2">
                    <h3 className="font-display text-xl text-rose-50">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-rose-200/70">
                      {service.desc}
                    </p>
                  </div>

                  {/* Explicit Button Link placed below the content */}
                  <div className="mt-6 mb-2 flex justify-center">
                    <Link
                      to={`/contact?category=${encodeURIComponent(service.category)}&service=${encodeURIComponent(service.serviceName)}`}
                      className="group flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-transparent px-5 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#D4AF37] transition-all hover:bg-[#D4AF37] hover:text-[#351132]"
                      aria-label={`Explore ${service.title}`}
                    >
                      Explore
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                  
                </div>
              </CometCard>
            </motion.div>
          ))}
        </div>

        {/* View Complete Menu Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <Link
            to="/services"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#791B70] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all hover:bg-[#351132] hover:shadow-[#791B70]/30 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Complete Menu
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-gradient-to-t from-white/20 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
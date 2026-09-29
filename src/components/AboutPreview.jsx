import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function AboutPreview() {
  const features = [
    'Expert Beauty Artisans',
    'Premium Product Lines',
    'Bespoke Treatments',
    'Tranquil Atmosphere',
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Subtle Background Accent */}
      <div className="pointer-events-none absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFF9FF] p-[30vw] blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-10">
        
        {/* Left Side - Image Composition */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          {/* Main Large Image */}
          <div className="relative w-[85%] overflow-hidden rounded-t-[4rem] rounded-br-[4rem] rounded-bl-2xl shadow-xl">
            <div className="absolute inset-0 bg-[#351132]/10 mix-blend-multiply" />
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=90" 
              alt="Elegant beauty salon interior" 
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105" 
              loading="lazy" 
            />
          </div>

          {/* Overlapping Secondary Image */}
          <div className="absolute bottom-12 right-0 w-[45%] overflow-hidden rounded-2xl border-[6px] border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=90" 
              alt="Premium salon products" 
              className="aspect-square w-full object-cover" 
              loading="lazy" 
            />
          </div>

          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -left-6 bottom-20 flex flex-col items-center justify-center rounded-full border border-[#E7BDE6]/50 bg-white/90 p-5 shadow-lg backdrop-blur-sm sm:-left-10"
          >
            <span className="great-vibes-regular text-4xl text-[#791B70]">10+</span>
            <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#351132]">Years of</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#351132]">Excellence</span>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <Sparkles size={16} className="text-[#D4AF37]" />
            <p className="font-display text-xl italic text-[#D4AF37]">
              Our Story
            </p>
          </div>
          
          <h2 className="mt-4 font-display text-4xl leading-[1.15] text-[#351132] sm:text-5xl lg:text-6xl">
            Reveal Your True <br/>
            <span className="text-[#791B70]">Confidence & Radiance.</span>
          </h2>
          
          <p className="mt-6 text-sm leading-relaxed text-[#6F536D] sm:text-base sm:leading-loose">
            Step into a sanctuary of elegance where expert artistry meets profound relaxation. At Flarans Beauty Parlour, we don't just offer treatments; we curate transformative experiences tailored to enhance your natural grace and elevate your everyday confidence.
          </p>

          <div className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {features.map((item, idx) => (
              <motion.div 
                key={item} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (idx * 0.1), duration: 0.5 }}
                className="flex items-center gap-3 text-xs font-semibold tracking-wide text-[#351132]"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#FFF9FF] text-[#791B70] shadow-sm ring-1 ring-[#E7BDE6]/50">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                {item}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <Link 
              to="/about" 
              className="group inline-flex items-center gap-2 rounded-full bg-[#791B70] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all hover:bg-[#351132] hover:shadow-lg hover:shadow-[#791B70]/20"
            >
              Discover More
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <div className="hidden flex-col sm:flex">
              <span className="great-vibes-regular text-2xl text-[#351132]">Flarans</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#6F536D]">Beauty Parlour</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
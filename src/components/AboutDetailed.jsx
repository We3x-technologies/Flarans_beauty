import { Award, GraduationCap, Sparkles, ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import sophiaImage from '../Asserts/sophia.png'; // Assuming you have a local image for Sobhia
import academyImage1 from '../Asserts/about-image.avif'; // Assuming you have local images for the academy
import academyImage2 from '../Asserts/about-image2.avif'; // Assuming you have local images for the academy
export default function AboutDetailed() {
  const qualityPillars = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Hygiene",
      description: "We maintain clinical-grade sanitization standards for all tools and stations, ensuring your complete safety and peace of mind.",
    },
    {
      icon: Leaf,
      title: "Premium Products",
      description: "Our treatments exclusively feature industry-leading, skin-safe brands tailored to nourish, protect, and enhance your natural beauty.",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Care",
      description: "Every client is unique. We take the time to understand your specific needs, crafting bespoke treatments that deliver perfect results.",
    },
  ];

  return (
    <div className="w-full bg-[#FFF9FF] overflow-hidden">
      
      {/* 1. Founder Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <Award size={16} className="text-[#D4AF37]" />
              <p className="font-display text-xl italic text-[#D4AF37]">
                The Visionary
              </p>
            </div>
            
            <h2 className="mt-4 font-display text-4xl leading-[1.15] text-[#351132] sm:text-5xl">
              Meet Sobhia, <br />
              <span className="text-[#791B70]">Founder & Lead Artist.</span>
            </h2>
            
            <p className="mt-6 text-sm leading-relaxed text-[#6F536D] sm:text-base sm:leading-loose">
              With over <strong>20 years of profound experience</strong> in the beauty and wellness industry, Sobhia has dedicated her life to the art of transformation. What began as a passionate pursuit of aesthetics has blossomed into Flarans Beauty Parlour—a sanctuary of elegance and excellence.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#6F536D] sm:text-base sm:leading-loose">
              Sobhia’s philosophy is simple: beauty is not just about changing how you look, but elevating how you feel. Her decades of hands-on expertise mean that every technique, from intricate bridal styling to advanced skin therapies, is executed with absolute mastery and a deep understanding of individual client needs.
            </p>

            <div className="mt-10 flex gap-10 border-t border-[#E7BDE6] pt-8">
              <div>
                <p className="font-display text-4xl font-bold text-[#791B70]">15+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#351132]">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-[#791B70]">1k+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#351132]">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative w-3/4 overflow-hidden rounded-3xl border-transparent">
              <img 
                src={sophiaImage}
                alt="Portrait of beautician" 
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10" /> */}
            </div>
            {/* Signature Accent */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-xl">
              <p className="great-vibes-regular text-4xl text-[#351132]">Sobhia</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6F536D]">Founder, Flarans</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Academy Section */}
      <section className="bg-[#351132] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={academyImage1}
                  alt="Students learning makeup" 
                  className="aspect-[4/5] w-full rounded-2xl object-cover"
                />
                <img 
                  src={academyImage2} 
                  alt="Beauty training session" 
                  className="aspect-[4/5] w-full translate-y-8 rounded-2xl object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-300/30 bg-rose-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-rose-200">
                <GraduationCap size={16} />
                Institution & Training
              </div>
              
              <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
                Flarans Beauty Academy
              </h2>
              
              <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base sm:leading-loose">
                Empowering the next generation of beauty artists. Under the direct guidance of Sobhia, the Flarans Beauty Academy offers comprehensive, hands-on training programs for aspiring beauticians.
              </p>
              
              <ul className="mt-8 space-y-4">
                {[
                  'Masterclasses in Advanced Makeup & Bridal Styling',
                  'Professional Skin Therapy & Chemical Peels',
                  'Hair Dressing, Coloring, and Chemical Treatments',
                  'Salon Management & Client Etiquette',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                    <Sparkles size={18} className="shrink-0 text-rose-300 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-sm italic text-rose-200">
                  "Our goal is not just to teach techniques, but to instill the passion, discipline, and artistry required to succeed in the modern beauty industry." — Sobhia
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Quality & Commitment Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl text-[#351132] sm:text-5xl">
              The Flarans Standard
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#6F536D]">
              Quality is the cornerstone of everything we do. From the moment you walk through our doors, you are treated to a premium experience built on trust, luxury, and professional integrity.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {qualityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="rounded-3xl border border-[#E7BDE6]/50 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF9FF] text-[#791B70] ring-1 ring-[#E7BDE6]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-[#351132]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6F536D]">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
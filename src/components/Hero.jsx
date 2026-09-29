import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../Asserts/images.jpg';
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[690px] max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-16">
        <div className="relative z-10 max-w-xl lg:pr-5">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-600">
            <Sparkles size={13} /> Premium Women’s Beauty Care
          </div>
          <p className="mb-3 font-display text-xl italic text-gold">Enhance Your</p>
          <h1 className="great-vibes-regular text-7xl leading-[0.95] text-ink sm:text-8xl lg:text-[108px]">
            Beauty,<br />
            <span className="italic text-rose-600">Reveal Your</span><br />
            <span>Confidence</span>
          </h1>
          <p className="mt-7 max-w-md text-sm leading-7 text-ink/65 sm:text-base">
            A refined beauty experience for makeup, hair, skin care, bridal styling and everyday self-care — delivered with attention to every detail.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-rose-500/20 transition hover:-translate-y-0.5 hover:bg-rose-600">
              Book Appointment <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-rose-300 hover:bg-white">
              Explore Services
            </Link>
          </div>
          <a href="https://wa.me/0000000000" className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-rose-600 hover:text-rose-700">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-rose-100"><MessageCircle size={15} /></span>
            WhatsApp appointment support
          </a>
        </div>

        <div className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-[610px]">
          <div className="absolute inset-y-5 right-0 w-[90%] overflow-hidden rounded-[190px_28px_28px_28px] border-8 border-white bg-rose-100 shadow-soft sm:w-[86%]">
            <img
              src={heroImage}
              alt="Bridal beauty makeup and styling"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-white/10" />
          </div>
          <div className="absolute bottom-5 left-0 z-10 max-w-[260px] rounded-2xl border border-white/80 bg-white/90 p-4 shadow-soft backdrop-blur sm:left-5">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-rose-100 text-rose-600"><Sparkles size={18} /></div>
              <div>
                <p className="font-display text-xl text-ink">Beauty, your way.</p>
                <p className="text-[11px] text-ink/55">Personalized salon experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

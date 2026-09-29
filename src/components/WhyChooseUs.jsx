import { BadgeCheck, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  [BadgeCheck, 'Professional Beauty Care', 'A detail-focused approach across makeup, hair, skin and beauty services.'],
  [Sparkles, 'Quality Products', 'A premium, polished salon experience with beauty treatments presented with care.'],
  [ShieldCheck, 'Hygienic Environment', 'A clean and comfortable setting designed around client confidence and comfort.'],
  [HeartHandshake, 'Personalized Experience', 'Services can be chosen around your occasion, style and preferred beauty routine.']
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 ">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="font-display text-2xl italic text-rose-500">The Flarans Experience</p>
            <h2 className="mt-1 font-display text-5xl leading-none text-ink sm:text-6xl">Beauty with care in every detail.</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-ink/60">Inspired by the reference brand direction, this section keeps the promise simple: professional service, thoughtful beauty care, and a refined client experience.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(([Icon, title, description]) => (
              <div key={title} className="rounded-2xl border border-rose-100 bg-white p-6 shadow-card">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-cream text-rose-600"><Icon size={21} /></div>
                <h3 className="mt-4 font-display text-2xl text-ink">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-ink/55">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

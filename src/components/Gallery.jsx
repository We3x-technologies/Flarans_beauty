const gallery = [
  ['Bridal makeup', 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=85'],
  ['Hair styling', 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85'],
  ['Makeup artistry', 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85'],
  ['Skin care', 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85'],
  ['Nail care', 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85'],
  ['Salon interior', 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85']
];

export default function Gallery() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-2xl italic text-rose-500">Our Beautiful Work</p>
            <h2 className="mt-1 font-display text-5xl text-ink">A glimpse of the Flarans experience.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-ink/50">A visual preview using beauty and salon imagery. Replace these image URLs with the parlor’s own portfolio as the gallery grows.</p>
        </div>
        <div className="mt-9 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4">
          {gallery.map(([label, image], index) => (
            <figure key={label} className={`group relative overflow-hidden rounded-2xl ${index === 0 ? 'col-span-2 row-span-2' : index === 3 ? 'col-span-2' : ''}`}>
              <img src={image} alt={`${label} at a beauty salon`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/60 to-transparent p-4 pt-12">
                <figcaption className="text-xs font-semibold uppercase tracking-[0.12em] text-white">{label}</figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

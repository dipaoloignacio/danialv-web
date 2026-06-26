const events = [
  { date: '2025.08.12', status: 'PRÓXIMO', title: 'CLUB MENDOZA', location: 'Mendoza, AR' },
  { date: '2025.09.05', status: 'ENTRADAS ABIERTAS', title: 'FESTIVAL VENDIMIA', location: 'Mendoza, AR' },
  { date: '2025.10.18', status: 'AGOTADO', title: 'TECHNO NIGHT ARG', location: 'Buenos Aires, AR' },
  { date: '2025.11.02', status: 'PRÓXIMO', title: 'UNDERGROUND SESSION', location: 'Córdoba, AR' },
]

export default function Eventos() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16" id="eventos">
      <div className="max-w-7xl mx-auto">

        {/* Mobile/Tablet: stacked layout */}
        <div className="md:hidden mb-10">
          <h2 className="font-display font-extrabold"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            LIVE_TRANS<br />MISSIONS
          </h2>
        </div>

        {/* Desktop: sidebar layout */}
        <div className="hidden md:grid md:grid-cols-12 gap-16">
          <div className="col-span-4">
            <h2 className="font-display font-extrabold sticky top-32"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
              LIVE_TRANS<br />MISSIONS
            </h2>
          </div>
          <div className="col-span-8">
            <EventList />
          </div>
        </div>

        {/* Mobile event list */}
        <div className="md:hidden">
          <EventList />
        </div>

        {/* YouTube Videos */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 sm:w-12 h-px bg-outline" />
            <span className="font-mono text-[10px] tracking-widest text-outline uppercase">Sets recientes</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {['IqZNWU7sVGg', 'JcmcEEBCNuA', 'uWzC5BRumRE'].map((id) => (
              <div key={id} className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Dani Alv DJ Set"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border border-outline"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function EventList() {
  return (
    <div>
      {events.map((event, i) => (
        <div
          key={i}
          className={`border-t border-outline flex items-center justify-between py-8 sm:py-12 group hover:bg-surface-container-low px-3 sm:px-4 transition-colors ${i === events.length - 1 ? 'border-b' : ''}`}
        >
          <div className="flex items-start sm:items-center gap-6 sm:gap-12 flex-1 min-w-0">
            <div className="text-left flex-shrink-0">
              <span className="block font-mono text-[10px] sm:text-xs font-bold text-primary mb-1">{event.date.slice(5)}</span>
              <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-outline uppercase">{event.status}</span>
            </div>
            <div className="min-w-0">
              <h4 className="font-display font-bold text-base sm:text-xl md:text-2xl truncate">{event.title}</h4>
              <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-outline uppercase mt-1">{event.location}</p>
            </div>
          </div>
          <span className="text-outline group-hover:text-primary-container group-hover:translate-x-2 transition-all ml-4 flex-shrink-0 text-xl">→</span>
        </div>
      ))}
    </div>
  )
}

const services = [
  {
    number: '01',
    icon: '🎛',
    title: 'EVENTOS PRIVADOS',
    description: 'Sets en vivo para eventos corporativos, fiestas privadas y celebraciones. Energía y precisión técnica garantizada.',
    items: ['+ Cumpleaños & Bodas', '+ Eventos Corporativos', '+ Fiestas Privadas'],
  },
  {
    number: '02',
    icon: '🎚',
    title: 'SETS EN VIVO',
    description: 'Presentaciones en clubes, festivales y eventos abiertos. Repertorio adaptado a cada espacio y audiencia.',
    items: ['+ Clubes Nocturnos', '+ Festivales', '+ After Hours'],
  },
  {
    number: '03',
    icon: '🎙',
    title: 'CLASES DE DJ',
    description: 'Clases personalizadas para todos los niveles, online y presenciales. Aprendé técnica, mezcla y manejo de equipos con un profesional.',
    items: ['+ Clases Presenciales', '+ Clases Online', '+ Todos los Niveles'],
  },
]

export default function Servicios() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16" id="servicios">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="font-display font-extrabold"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            SERVICIOS_
          </h2>
          <p className="font-mono text-[10px] tracking-[0.2em] font-bold text-primary mt-2">
            SOLUCIONES PROFESIONALES PARA CADA NECESIDAD
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border-t border-l border-outline">
          {services.map((service) => (
            <div
              key={service.number}
              className="border-r border-b border-outline p-6 sm:p-8 md:p-12 hover:bg-surface-container-low transition-colors group"
            >
              <div className="mb-6 md:mb-8 flex justify-between items-start">
                <span className="font-mono text-xs font-bold text-primary">{service.number}</span>
                <span className="text-3xl md:text-4xl grayscale group-hover:grayscale-0 transition-all">{service.icon}</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
              <p className="text-on-surface-variant font-body text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="font-mono text-[10px] tracking-[0.1em] text-outline space-y-2">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

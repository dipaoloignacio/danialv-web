import Image from 'next/image'

const stats = [
  { label: 'EXPERIENCIA', value: '+10 AÑOS' },
  { label: 'EVENTOS', value: '+500' },
  { label: 'ALUMNOS', value: '+200' },
]

export default function SobreMi() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 border-b border-outline" id="sobre-mi">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">

        {/* Text - shows second on mobile, first on desktop */}
        <div className="order-2 md:order-1">
          <div className="inline-block border border-outline px-3 py-1 mb-6 md:mb-8">
            <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-primary uppercase">Bio_v2.0</span>
          </div>

          <h2 className="font-display font-extrabold leading-tight mb-6 md:mb-8"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            EL PRODUCTOR<br />
            <span className="text-primary-container">IDENTIDAD</span>
          </h2>

          <div className="space-y-4 text-on-surface-variant font-body text-base sm:text-lg leading-relaxed">
            <p>
              Dani Alv opera en la intersección entre la brutalidad cruda y la precisión quirúrgica. Con más de una década de inmersión en el circuito underground, el proyecto evolucionó hacia una exploración clínica del ritmo y la textura.
            </p>
            <p>
              Cada frecuencia es intencional. Cada silencio es arquitectónico. Formando a la próxima generación de DJs con la misma filosofía.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 md:mt-12 grid grid-cols-3 gap-4 border-t border-outline pt-6 md:pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="block font-mono text-[10px] tracking-[0.15em] font-bold text-outline mb-1">{stat.label}</span>
                <span className="font-mono text-xs sm:text-sm font-bold text-primary">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image - shows first on mobile */}
        <div className="order-1 md:order-2 relative group">
          <div className="absolute inset-0 border border-primary-container -translate-x-3 translate-y-3 md:-translate-x-4 md:translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
          <div className="relative">
            <Image
              src="/sobre-mi.png"
              alt="Dani Alv en cabina de DJ"
              width={600}
              height={700}
              className="relative z-10 w-full border border-outline grayscale contrast-125 object-cover"
              style={{ maxHeight: '500px', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="absolute bottom-4 right-4 z-20 bg-background border border-outline p-3 font-mono text-[10px]">
            <span className="text-primary-container">LOC:</span> MENDOZA_STUDIO
          </div>
        </div>

      </div>
    </section>
  )
}

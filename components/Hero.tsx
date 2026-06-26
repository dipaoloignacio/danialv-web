'use client'

const WA_NUMBER = '5492617204957'

export default function Hero() {
  return (
    <header className="relative w-full min-h-screen h-screen flex items-end justify-start overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" >
        <picture>
          <source media="(min-width: 1024px)" srcSet="/hero.png" />
          <img
            src="/dani-hero.PNG"
            alt="Dani Alv DJ performing"
            className="grayscale opacity-70 w-auto h-full sm:object-contain object-cover mx-auto block"
            style={{
              minHeight: '500px',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            }}
          />
        </picture>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8 md:px-16 pb-16 sm:pb-20 md:pb-24 max-w-5xl w-full">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 sm:w-12 h-px bg-primary-container" />
          <span className="font-mono text-[10px] tracking-widest text-primary-container uppercase">
            DJ Profesional & Instructor
          </span>
        </div>

        <h1
          className="font-display font-black leading-none text-primary-container mb-6 md:mb-8 animate-flicker"
          style={{ fontSize: 'clamp(56px, 10vw, 80px)', letterSpacing: '-0.04em' }}
        >
          DANI ALV
        </h1>

        <p className="font-body text-base sm:text-lg max-w-xs sm:max-w-sm md:max-w-xl text-on-surface-variant mb-8 md:mb-12 border-l-2 border-outline pl-4 sm:pl-6 leading-relaxed">
          Más de una década redefiniendo el paisaje sonoro. Precisión técnica, energía sin filtros y formación de la próxima generación de DJs.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#servicios"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-primary-container text-on-primary px-8 py-4 font-mono text-[10px] tracking-[0.2em] font-bold hover:bg-primary transition-colors active:scale-95 text-center"
          >
            VER SERVICIOS
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-outline text-on-background px-8 py-4 font-mono text-[10px] tracking-[0.2em] font-bold hover:bg-white hover:text-black hover:border-white transition-colors active:scale-95 text-center"
          >
            WHATSAPP
          </a>
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-primary-container py-1.5 border-t border-black">
        <div className="whitespace-nowrap animate-marquee font-mono text-[10px] tracking-[0.1em] text-on-primary font-bold inline-block">
          {Array(4).fill('TECHNO // MINIMAL // HOUSE // CLASES DE DJ // EVENTOS PRIVADOS // PRODUCCIÓN // MASTERING // ').join('')}
        </div>
      </div>
    </header>
  )
}
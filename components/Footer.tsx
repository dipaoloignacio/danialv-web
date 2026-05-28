const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Soundcloud', href: '#' },
  { label: 'Mixcloud', href: '#' },
  { label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-outline">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-16 py-10 md:py-12 w-full gap-6 md:gap-8">
        <div className="font-display text-xl md:text-2xl font-black text-primary leading-none">DANI ALV</div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[10px] tracking-[0.2em] font-bold text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="font-mono text-[10px] tracking-[0.15em] font-bold text-outline text-center md:text-right">
          © 2025 DANI ALV. ALL RIGHTS RESERVED.
        </div>
      </div>

      {/* Technical strip — desktop only */}
      <div className="border-t border-outline py-4 px-16 hidden md:flex justify-between items-center">
        <div className="flex gap-4 font-mono text-[10px] text-outline">
          <span>VER: 4.1.0_PROD</span>
          <span>ENC: 64-BIT_FLOAT</span>
          <span>SYS: ARCH_MIN</span>
        </div>
        <div className="flex gap-4 font-mono text-[10px] text-outline">
          <span>LAT: 32.8908° S</span>
          <span>LNG: 68.8272° W</span>
        </div>
      </div>
    </footer>
  )
}

const WA_NUMBER = '5492614000000'

const courses = [
  {
    level: '01',
    name: 'Básico',
    duration: '12 Semanas',
    focus: 'Fundamentos de DJ & Mezcla',
  },
  {
    level: '02',
    name: 'Intermedio',
    duration: '16 Semanas',
    focus: 'Mixing Avanzado & Técnica',
  },
  {
    level: '03',
    name: 'Avanzado',
    duration: '24 Semanas',
    focus: 'Masterclass & Branding Personal',
  },
]

export default function Clases() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 bg-surface-container-lowest" id="clases">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-20 gap-4">
          <div>
            <h2 className="font-display font-extrabold"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
              ACADEMIA_
            </h2>
            <p className="font-mono text-[10px] tracking-[0.2em] font-bold text-primary mt-2">
              APRENDÉ LA ARQUITECTURA DEL SONIDO
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="font-mono text-[10px] tracking-[0.15em] text-outline mb-1">ESTADO DE INSCRIPCIÓN</p>
            <p className="font-mono text-[10px] tracking-[0.15em] font-bold text-primary-container">[ ACTIVO ]</p>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-primary-container">
                <th className="text-left py-6 px-4 font-mono text-[10px] tracking-[0.2em] font-bold text-outline">LVL</th>
                <th className="text-left py-6 px-4 font-mono text-[10px] tracking-[0.2em] font-bold text-outline">PROGRAMA</th>
                <th className="text-left py-6 px-4 font-mono text-[10px] tracking-[0.2em] font-bold text-outline">DURACIÓN</th>
                <th className="text-left py-6 px-4 font-mono text-[10px] tracking-[0.2em] font-bold text-outline">ENFOQUE</th>
                <th className="text-right py-6 px-4 font-mono text-[10px] tracking-[0.2em] font-bold text-outline">ACCIÓN</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.level} className="border-b border-outline hover:bg-primary-container/5 transition-colors">
                  <td className="py-10 px-4 font-mono text-xs font-bold text-primary">{course.level}</td>
                  <td className="py-10 px-4 font-display text-xl font-bold">{course.name}</td>
                  <td className="py-10 px-4 text-on-surface-variant font-body text-sm">{course.duration}</td>
                  <td className="py-10 px-4 text-on-surface-variant font-body text-sm">{course.focus}</td>
                  <td className="py-10 px-4 text-right">
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=Hola! Me interesa el curso ${course.name} de DJ`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-outline px-6 py-2 font-mono text-[10px] tracking-[0.2em] font-bold hover:bg-primary-container hover:text-on-primary hover:border-primary-container transition-colors inline-block"
                    >
                      INSCRIBIRSE
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {courses.map((course) => (
            <div key={course.level} className="border border-outline p-6 hover:bg-surface-container-low transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs font-bold text-primary">{course.level}</span>
                <span className="font-mono text-[10px] text-outline">{course.duration}</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">{course.name}</h3>
              <p className="text-on-surface-variant font-body text-sm mb-6">{course.focus}</p>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hola! Me interesa el curso ${course.name} de DJ`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-outline px-6 py-3 font-mono text-[10px] tracking-[0.2em] font-bold hover:bg-primary-container hover:text-on-primary hover:border-primary-container transition-colors block text-center"
              >
                INSCRIBIRSE VÍA WHATSAPP
              </a>
            </div>
          ))}
        </div>

        <p className="font-mono text-[10px] tracking-[0.15em] text-outline mt-6 md:mt-8 text-center">
          ★ CLASES ONLINE Y PRESENCIALES DISPONIBLES
        </p>
      </div>
    </section>
  )
}

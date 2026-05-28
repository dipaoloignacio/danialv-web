import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SobreMi from '@/components/SobreMi'
import Servicios from '@/components/Servicios'
import Clases from '@/components/Clases'
import Eventos from '@/components/Eventos'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="void-bg">
        <SobreMi />
        <Servicios />
        <Clases />
        <Eventos />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

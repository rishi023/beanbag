import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Benefits } from './components/sections/Benefits'
import { Contact } from './components/sections/Contact'
import { FAQ } from './components/sections/FAQ'
import { Features } from './components/sections/Features'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'
import { Products } from './components/sections/Products'
import { Testimonials } from './components/sections/Testimonials'
import { TrustStrip } from './components/sections/TrustStrip'
import { UseCases } from './components/sections/UseCases'
import { ValueProposition } from './components/sections/ValueProposition'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <ValueProposition />
        <Features />
        <HowItWorks />
        <UseCases />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

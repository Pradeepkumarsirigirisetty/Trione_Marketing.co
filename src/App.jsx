import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyTryOnce from './components/WhyTryOnce'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyTryOnce />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

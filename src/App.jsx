import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <Hero />
      <Container className="py-5">
        <HowItWorks />
      </Container>
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
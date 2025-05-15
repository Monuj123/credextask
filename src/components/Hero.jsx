import { Button, Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="hero-section text-white py-5">
      <Container className="text-center py-5">
        <h1 className="display-4 fw-bold mb-4">Sell Your Unused Software Licenses</h1>
        <p className="lead mb-4 mx-auto" style={{ maxWidth: '700px' }}>
          SoftSell helps businesses recover value from unused software licenses quickly and securely. Get paid for what you're not using.
        </p>
        <Button href="#contact" variant="secondary" size="lg" className="px-4 py-2">
          Sell My Licenses
        </Button>
      </Container>
    </section>
  )
}

export default Hero
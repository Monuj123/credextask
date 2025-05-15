import { Container, Row, Col } from 'react-bootstrap'

const Testimonials = () => {
  const testimonials = [
    {
      content: "SoftSell helped us recover over $45,000 in unused Microsoft licenses. The process was seamless and their team was extremely professional.",
      author: "Sarah Johnson",
      role: "IT Director, TechForward Inc."
    },
    {
      content: "As a small business, every dollar counts. SoftSell provided fair valuations and quick payment for our unused Adobe licenses. Highly recommended!",
      author: "Michael Chen",
      role: "CEO, DesignWave Studios"
    }
  ]

  return (
    <section className="testimonials-section py-5">
      <Container>
        <h2 className="text-center mb-5">What Our Customers Say</h2>
        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={6}>
              <div className="bg-light p-4 rounded position-relative">
                <blockquote className="mb-4 position-relative">
                  <p className="mb-0">"{testimonial.content}"</p>
                </blockquote>
                <div className="fw-bold">{testimonial.author}</div>
                <div className="text-muted small">{testimonial.role}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
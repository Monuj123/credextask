import { Container, Row, Col } from 'react-bootstrap'
import { FaShieldAlt, FaPercentage, FaClock, FaHeadset } from 'react-icons/fa'

const Features = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Secure Transactions",
      description: "Bank-level encryption and secure escrow services protect every transaction."
    },
    {
      icon: <FaPercentage />,
      title: "Competitive Rates",
      description: "We offer the highest payouts in the industry, typically 60-80% of retail value."
    },
    {
      icon: <FaClock />,
      title: "Fast Payments",
      description: "Most sellers receive payment within 3 business days of accepting our offer."
    },
    {
      icon: <FaHeadset />,
      title: "Dedicated Support",
      description: "Our expert team is available to guide you through every step of the process."
    }
  ]

  return (
    <section className="features-section py-5">
      <Container>
        <h2 className="text-center mb-5">Why Choose SoftSell</h2>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} md={6} lg={3}>
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <div className="feature-icon mb-3">{feature.icon}</div>
                <h3 className="h5">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Features
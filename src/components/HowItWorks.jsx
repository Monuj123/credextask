import { Row, Col } from 'react-bootstrap'
import { FaUpload, FaSearchDollar, FaHandHoldingUsd } from 'react-icons/fa'

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUpload />,
      title: "Upload License",
      description: "Submit your license details through our secure portal. We'll verify authenticity."
    },
    {
      icon: <FaSearchDollar />,
      title: "Get Valuation",
      description: "Our algorithm provides a fair market valuation within 24 hours."
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Get Paid",
      description: "Accept our offer and receive payment via your preferred method within 3 business days."
    }
  ]

  return (
    <>
      <h2 className="text-center mb-5">How It Works</h2>
      <Row className="g-4">
        {steps.map((step, index) => (
          <Col key={index} md={4}>
            <div className="bg-white p-4 rounded shadow-sm h-100 text-center">
              <div className="step-icon mb-3">{step.icon}</div>
              <h3 className="h4">{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HowItWorks
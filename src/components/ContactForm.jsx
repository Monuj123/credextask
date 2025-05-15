import { useState } from 'react'
import { Container, Form,Row,Col, Button, Alert } from 'react-bootstrap'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.licenseType) newErrors.licenseType = 'Please select a license type'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      })
    }
  }

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <h2 className="text-center mb-5">Ready to Sell Your Licenses?</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {submitted && (
              <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                Thank you for your submission! We will contact you shortly with your valuation.
              </Alert>
            )}
            <Form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm"  style={{ width: '80%', margin: '0 auto' }}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  isInvalid={!!errors.company}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.company}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>License Type</Form.Label>
                <Form.Select
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  isInvalid={!!errors.licenseType}
                >
                  <option value="">Select License Type</option>
                  <option value="microsoft">Microsoft</option>
                  <option value="adobe">Adobe</option>
                  <option value="autodesk">Autodesk</option>
                  <option value="oracle">Oracle</option>
                  <option value="other">Other</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.licenseType}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Message (Optional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 py-2">
                Get My Valuation
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactForm
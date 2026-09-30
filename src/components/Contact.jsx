import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await response.json()

    if (response.ok) {
      alert(data.message)

      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } else {
      alert(data.message)
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Unable to connect to the server.')
  }
}

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
            CONTACT US
          </span>

          <h2 className="display-6 fw-bold mt-3">
            Let's Work Together
          </h2>

          <p className="text-secondary mx-auto feature-intro">
            Have a project in mind? Send us a message and let's discuss it.
          </p>
        </div>

        <div className="row g-5">

          <div className="col-lg-5">

            <h3 className="fw-bold">
              Get In Touch
            </h3>

            <p className="text-secondary mt-3">
              We would love to hear about your project, ideas or business
              requirements. Contact us and let's create something meaningful.
            </p>

            <div className="contact-info mt-4">

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-envelope"></i>
                </div>

                <div>
                  <small className="text-secondary">
                    Email
                  </small>

                  <p className="mb-0 fw-semibold">
                    hello@ayrostyle.com
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-telephone"></i>
                </div>

                <div>
                  <small className="text-secondary">
                    Phone
                  </small>

                  <p className="mb-0 fw-semibold">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>

                <div>
                  <small className="text-secondary">
                    Location
                  </small>

                  <p className="mb-0 fw-semibold">
                    Chennai, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-7">

            <form
              className="contact-form p-4 p-md-5 rounded-4 shadow-sm"
              onSubmit={handleSubmit}
            >

              <div className="row g-4">

                <div className="col-md-6">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2"
                  >
                    Send Message
                    <i className="bi bi-send ms-2"></i>
                  </button>
                </div>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
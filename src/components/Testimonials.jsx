function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Owner',
      icon: 'bi-person-circle',
      text: 'The team understood our requirements and created a clean and professional digital experience for our business.',
    },
    {
      name: 'Michael Thomas',
      role: 'Startup Founder',
      icon: 'bi-person-circle',
      text: 'The development process was smooth and the final solution was responsive, modern and easy to use.',
    },
    {
      name: 'Emily Wilson',
      role: 'Marketing Manager',
      icon: 'bi-person-circle',
      text: 'We loved the design and attention to detail. The website gave our brand a much stronger online presence.',
    },
  ]

  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container py-5">

        <div className="text-center mb-5">
          <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
            TESTIMONIALS
          </span>

          <h2 className="display-6 fw-bold mt-3">
            What Our Clients Say
          </h2>

          <p className="text-secondary mx-auto feature-intro">
            Feedback from people who experienced our digital solutions.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-4" key={index}>
              <div className="testimonial-card bg-white h-100 p-4 rounded-4 shadow-sm">

                <div className="d-flex gap-1 text-warning mb-4">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>

                <p className="text-secondary">
                  "{testimonial.text}"
                </p>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <i className={`bi ${testimonial.icon} testimonial-avatar`}></i>

                  <div>
                    <h6 className="fw-bold mb-1">
                      {testimonial.name}
                    </h6>

                    <small className="text-secondary">
                      {testimonial.role}
                    </small>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
function Services() {
  const services = [
    {
      icon: 'bi-laptop',
      title: 'Web Development',
      text: 'Modern and responsive websites built with clean and scalable code.',
    },
    {
      icon: 'bi-phone',
      title: 'Mobile Solutions',
      text: 'Responsive digital experiences that work smoothly on every device.',
    },
    {
      icon: 'bi-brush',
      title: 'UI/UX Design',
      text: 'Simple and attractive interfaces designed around user experience.',
    },
    {
      icon: 'bi-bar-chart',
      title: 'Digital Growth',
      text: 'Technology solutions that help businesses improve and grow online.',
    },
    {
      icon: 'bi-cloud',
      title: 'Cloud Solutions',
      text: 'Reliable solutions designed for flexible and scalable applications.',
    },
    {
      icon: 'bi-headset',
      title: 'Support',
      text: 'Continuous technical support to keep your digital products running.',
    },
  ]

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container py-5">

        <div className="text-center mb-5">
          <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
            OUR SERVICES
          </span>

          <h2 className="display-6 fw-bold mt-3">
            What We Do
          </h2>

          <p className="text-secondary mx-auto feature-intro">
            Complete digital solutions designed to help your business move
            forward.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="service-card bg-white h-100 p-4 rounded-4 shadow-sm">

                <div className="service-icon mb-4">
                  <i className={`bi ${service.icon}`}></i>
                </div>

                <h4 className="fw-bold">
                  {service.title}
                </h4>

                <p className="text-secondary mt-3 mb-0">
                  {service.text}
                </p>

                <a href="#contact" className="service-link">
                  Learn More
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
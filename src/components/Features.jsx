function Features() {
  const features = [
    {
      icon: 'bi-lightning-charge',
      title: 'Fast Performance',
      text: 'We build fast and responsive digital experiences that work smoothly across devices.',
    },
    {
      icon: 'bi-palette',
      title: 'Modern Design',
      text: 'Clean, attractive and user-friendly designs created for modern businesses.',
    },
    {
      icon: 'bi-shield-check',
      title: 'Reliable Solutions',
      text: 'Scalable and reliable solutions designed to support your business growth.',
    },
  ]

  return (
    <section id="features" className="py-5 bg-light">
      <div className="container py-5">

        <div className="text-center mb-5">
          <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
            OUR FEATURES
          </span>

          <h2 className="display-6 fw-bold mt-3">
            Everything You Need
          </h2>

          <p className="text-secondary mx-auto feature-intro">
            Powerful features that help you create better digital experiences.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-4" key={index}>
              <div className="feature-card bg-white h-100 p-4 text-center rounded-4 shadow-sm">

                <div className="feature-icon mx-auto mb-4">
                  <i className={`bi ${feature.icon}`}></i>
                </div>

                <h4 className="fw-bold">
                  {feature.title}
                </h4>

                <p className="text-secondary mt-3 mb-0">
                  {feature.text}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features
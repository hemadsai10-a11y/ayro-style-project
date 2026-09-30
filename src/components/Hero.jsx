function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          <div className="col-lg-6">
            <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-3">
              DIGITAL SOLUTIONS
            </span>

            <h1 className="display-3 fw-bold lh-sm">
              Build Your
              <span className="text-primary"> Digital Future</span>
            </h1>

            <p className="lead text-secondary mt-4">
              We create modern websites and digital experiences that help
              businesses grow, connect with customers, and achieve their goals.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#services" className="btn btn-primary btn-lg px-4">
                Get Started
              </a>

              <a
                href="#about"
                className="btn btn-outline-primary btn-lg px-4"
              >
                Learn More
              </a>
            </div>

            <div className="d-flex gap-4 mt-5">
              <div>
                <h4 className="fw-bold mb-0">100+</h4>
                <small className="text-secondary">Projects</small>
              </div>

              <div>
                <h4 className="fw-bold mb-0">50+</h4>
                <small className="text-secondary">Clients</small>
              </div>

              <div>
                <h4 className="fw-bold mb-0">5+</h4>
                <small className="text-secondary">Years</small>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="hero-card position-relative mx-auto">
              <div className="hero-circle"></div>

              <div className="hero-content shadow-lg">
                <i className="bi bi-laptop text-primary display-1"></i>

                <h3 className="fw-bold mt-4">
                  Creative Digital Solutions
                </h3>

                <p className="text-secondary mb-0">
                  Design. Develop. Grow.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
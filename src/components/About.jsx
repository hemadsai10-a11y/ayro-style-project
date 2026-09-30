function About() {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <div className="row align-items-center g-5">

          <div className="col-lg-6">
            <div className="about-image">
              <div className="about-main-card shadow">
                <i className="bi bi-code-slash"></i>

                <h3 className="fw-bold mt-4">
                  Creative & Digital
                </h3>

                <p className="text-secondary mb-0">
                  Turning ideas into meaningful digital experiences.
                </p>
              </div>

              <div className="about-small-card shadow-sm">
                <i className="bi bi-check-circle-fill text-primary"></i>
                <span>Quality Solutions</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
              ABOUT US
            </span>

            <h2 className="display-6 fw-bold mt-3">
              We Create Digital Experiences That Matter
            </h2>

            <p className="text-secondary mt-4">
              We help businesses build modern digital experiences through
              thoughtful design, reliable development and innovative
              technology.
            </p>

            <p className="text-secondary">
              Our approach combines creativity and technology to create
              solutions that are simple, effective and easy to use.
            </p>

            <div className="row mt-4 g-3">
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span>Modern Technology</span>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span>Responsive Design</span>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span>Clean Code</span>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span>Customer Support</span>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary mt-4 px-4">
              Learn More
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
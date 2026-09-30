function Portfolio() {
  const projects = [
    {
      number: '01',
      title: 'Business Website',
      category: 'Web Development',
      icon: 'bi-building',
    },
    {
      number: '02',
      title: 'Creative Dashboard',
      category: 'UI/UX Design',
      icon: 'bi-grid-1x2',
    },
    {
      number: '03',
      title: 'E-Commerce Platform',
      category: 'Web Application',
      icon: 'bi-cart3',
    },
    {
      number: '04',
      title: 'Mobile Application',
      category: 'Mobile Solutions',
      icon: 'bi-phone',
    },
    {
      number: '05',
      title: 'Analytics System',
      category: 'Digital Solutions',
      icon: 'bi-bar-chart-line',
    },
    {
      number: '06',
      title: 'Cloud Application',
      category: 'Cloud Solutions',
      icon: 'bi-cloud-check',
    },
  ]

  return (
    <section id="portfolio" className="py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
            OUR WORK
          </span>

          <h2 className="display-6 fw-bold mt-3">
            Recent Projects
          </h2>

          <p className="text-secondary mx-auto feature-intro">
            A selection of digital solutions created using modern
            technologies and thoughtful design.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.number}>
              <div className="portfolio-card">

                <div className="portfolio-image">
                  <div className="portfolio-icon">
                    <i className={`bi ${project.icon}`}></i>
                  </div>

                  <span className="portfolio-number">
                    {project.number}
                  </span>
                </div>

                <div className="p-4">
                  <span className="text-primary small fw-semibold">
                    {project.category}
                  </span>

                  <h4 className="fw-bold mt-2 mb-0">
                    {project.title}
                  </h4>

                  <a href="#contact" className="portfolio-link">
                    View Project
                    <i className="bi bi-arrow-up-right ms-2"></i>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Portfolio
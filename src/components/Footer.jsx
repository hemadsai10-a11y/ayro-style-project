function Footer() {
  return (
    <footer className="footer">
      <div className="container py-5">

        <div className="row g-4">

          <div className="col-lg-5">
            <h3 className="fw-bold footer-logo">
              Ayro<span>Style</span>
            </h3>

            <p className="text-light opacity-75 mt-3 footer-text">
              We create modern digital experiences using creative design
              and reliable technology.
            </p>

            <div className="social-links mt-4">
              <a href="#home" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#home" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#home" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#home" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="fw-bold text-white">
              Company
            </h6>

            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="fw-bold text-white">
              Services
            </h6>

            <ul className="footer-links">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Mobile Solutions</a></li>
              <li><a href="#services">Cloud Solutions</a></li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h6 className="fw-bold text-white">
              Get In Touch
            </h6>

            <p className="footer-contact">
              <i className="bi bi-envelope me-2"></i>
              hello@ayrostyle.com
            </p>

            <p className="footer-contact">
              <i className="bi bi-telephone me-2"></i>
              +91 98765 43210
            </p>

            <p className="footer-contact">
              <i className="bi bi-geo-alt me-2"></i>
              Chennai, India
            </p>
          </div>

        </div>

        <hr className="footer-line my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
          <p className="mb-0 text-light opacity-75">
            © 2026 AyroStyle. All Rights Reserved.
          </p>

          <p className="mb-0 text-light opacity-75">
            Built with React + Bootstrap + Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
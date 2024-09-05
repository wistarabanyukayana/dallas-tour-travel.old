const Footer = () => {
  return (
    <section id="footer" className="ftr-heading-o ftr-heading-mgn-1">
      <div
        id="footer-top"
        className="banner-padding ftr-top-grey ftr-text-white"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 footer-widget ftr-about">
              <h3 className="footer-heading">Dallas Tour &amp; Travel</h3>
              <p>
                PT. Dallas Laras Wisata (Dallas) berupaya untuk selalu
                meningkatkan kualitas pelayanan dengan menghadirkan berbagai
                fasilitas dan program yang sesuai dengan kebutuhan jamaah. Kami
                berharap dapat terus menjadi bagian dari perjalanan spiritual
                Anda dan bersama-sama meraih ridha Allah SWT.
              </p>
              <ul className="social-links list-inline list-unstyled">
                <li className="list-inline-item">
                  <a href="https://web.facebook.com/DALLASTOURTRAVEL">
                    <span>
                      <i className="fa fa-facebook" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item" style={{ display: "none" }}>
                  <a href="#">
                    <span>
                      <i className="fa fa-twitter" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item" style={{ display: "none" }}>
                  <a href="#">
                    <span>
                      <i className="fa fa-google-plus" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item" style={{ display: "none" }}>
                  <a href="#">
                    <span>
                      <i className="fa fa-pinterest-p" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/officialdallastourtravel">
                    <span>
                      <i className="fa fa-instagram" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/pt-delta-laras-wisata-b1a369313">
                    <span>
                      <i className="fa fa-linkedin" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item" style={{ display: "none" }}>
                  <a href="#">
                    <span>
                      <i className="fa fa-youtube-play" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/* end columns */}
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 footer-widget ftr-contact">
              <h3 className="footer-heading">Hubungi Kami</h3>
              <ul className="list-unstyled">
                <li>
                  <span>
                    <i className="fa fa-map-marker" />
                  </span>
                  Jl. Raya Kalibata, Jakarta
                </li>
                <li>
                  <span>
                    <i className="fa fa-phone" />
                  </span>
                  (021) 80878321
                </li>
                <li>
                  <span>
                    <i className="fa fa-envelope" />
                  </span>
                  admin@dallastourtravel.com
                </li>
              </ul>
            </div>
            {/* end columns */}
            <div className="col-12 col-md-6 col-lg-2 col-xl-2 footer-widget ftr-links">
              <h3 className="footer-heading">Perusahaan</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Beranda</a>
                </li>
                <li>
                  <a href="#">Produk &amp; Layanan</a>
                </li>
                <li>
                  <a href="#">Berita</a>
                </li>
                <li>
                  <a href="#">Galeri</a>
                </li>
                <li>
                  <a href="#">Tentang Dallas</a>
                </li>
              </ul>
            </div>
            {/* end columns */}
            {/* end columns */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* end footer-top */}
      <div id="footer-bottom" className="ftr-bot-black">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6" id="copyright">
              <p>
                © 2024 <a href="#">PT. Delta Lara Wisata</a>. Hak Cipta
                Dilindungi.
              </p>
            </div>
            {/* end columns */}
            <div className="col-12 col-md-6 col-lg-6 col-xl-6" id="terms">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#">Syarat &amp; Ketentuan</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Kebijakan Privasi</a>
                </li>
              </ul>
            </div>
            {/* end columns */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* end footer-bottom */}
    </section>
  );
};

export default Footer;

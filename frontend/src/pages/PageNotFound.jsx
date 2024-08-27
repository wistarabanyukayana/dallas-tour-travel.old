//import "./css/pageNotFound.css";

import $ from "jquery";

import { useEffect } from "react";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";

import logo from "../assets/img/logo.png";

const PageNotFound = () => {
  useEffect(() => {
    $(".loader").fadeOut("slow");
  }, []);

  return (
    <div className="page-not-found">
      <Loader />
      {/*===== INNERPAGE-WRAPPER ====*/}
      <section className="innerpage-wrapper h-100">
        <div id="error-text" className="section-padding back-size h-100">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12">
                <h3 className="company-name">
                  <Link to="#">
                    <img id="logo" alt="logo" src={logo} />
                  </Link>
                </h3>
                <h2>404</h2>
                <p>Halaman yang anda cari tidak dapat ditemukan.</p>
                <Link to="/" className="btn btn-w-border">
                  Kembali ke Beranda
                </Link>
              </div>
              {/* end columns */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end error-text */}
      </section>
      {/* end innerpage-wrapper */}

      {/*======================= BEST FEATURES =====================*/}
      <section id="best-features" className="banner-padding black-features">
        <div className="container">
          <div className="page-heading mb-5">
            <h2>Kenapa Harus Pilih Dallas?</h2>
            <hr className="heading-line" />
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="b-feature-block">
                <span>
                  <i className="fa fa-bars" />
                </span>
                <h3>Visa Langsung</h3>
                <p>
                  DALLAS adalah Provider Visa yang bekerjasama langsung dengan
                  Kedutaan Arab Saudi.
                </p>
              </div>
              {/* end b-feature-block */}
            </div>
            {/* end columns */}
            <div className="col-md-6 col-lg-3">
              <div className="b-feature-block">
                <span>
                  <i className="fa fa-lock" />
                </span>
                <h3>Resmi dan Aman</h3>
                <p>
                  DALLAS adalah Penyelenggara Umroh berizin RESMI yang
                  berkomitmen terhadap 5 Pasti Umroh.
                </p>
              </div>
              {/* end b-feature-block */}
            </div>
            {/* end columns */}
            <div className="col-md-6 col-lg-3">
              <div className="b-feature-block">
                <span>
                  <i className="fa fa-thumbs-up" />
                </span>
                <h3>Terjamin Syari'ah</h3>
                <p>
                  DALLAS adalah Penyelenggara Umroh yang dijamin oleh lembaga
                  penjaminan Syari'ah Milik Pemerintah (Askrindo Syariah).
                </p>
              </div>
              {/* end b-feature-block */}
            </div>
            {/* end columns */}
            <div className="col-md-6 col-lg-3">
              <div className="b-feature-block">
                <span>
                  <i className="fa fa-dollar" />
                </span>
                <h3>Bergaransi Penuh</h3>
                <p>Dallas memberikan garansi 100% uang kembali.</p>
              </div>
              {/* end b-feature-block */}
            </div>
            {/* end columns */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end best-features */}
      {/*========================= ARTICLELETTER ==========================*/}
      <section
        id="newsletter-1"
        className="section-padding back-size newsletter"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 col-xl-12 text-center">
              <h2>Berlangganan kepada Artikel Kami</h2>
              <p>Berlangganan untuk menerima artikel menarik dan informatif</p>
              <form>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control input-lg"
                      placeholder="Masukan Alamat E-Mail Anda"
                      required=""
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-lg">
                        <i className="fa fa-envelope" />
                      </button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            {/* end columns */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end newsletter-1 */}
      {/*======================= FOOTER =======================*/}
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
                  fasilitas dan program yang sesuai dengan kebutuhan jamaah.
                  Kami berharap dapat terus menjadi bagian dari perjalanan
                  spiritual Anda dan bersama-sama meraih ridha Allah SWT.
                </p>
                <ul className="social-links list-inline list-unstyled">
                  <li className="list-inline-item">
                    <Link to="https://web.facebook.com/DALLASTOURTRAVEL">
                      <span>
                        <i className="fa fa-facebook" />
                      </span>
                    </Link>
                  </li>
                  <li className="list-inline-item" style={{ display: "none" }}>
                    <Link to="#">
                      <span>
                        <i className="fa fa-twitter" />
                      </span>
                    </Link>
                  </li>
                  <li className="list-inline-item" style={{ display: "none" }}>
                    <Link to="#">
                      <span>
                        <i className="fa fa-google-plus" />
                      </span>
                    </Link>
                  </li>
                  <li className="list-inline-item" style={{ display: "none" }}>
                    <Link to="#">
                      <span>
                        <i className="fa fa-pinterest-p" />
                      </span>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="https://www.instagram.com/officialdallastourtravel">
                      <span>
                        <i className="fa fa-instagram" />
                      </span>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="https://www.linkedin.com/in/pt-delta-laras-wisata-b1a369313">
                      <span>
                        <i className="fa fa-linkedin" />
                      </span>
                    </Link>
                  </li>
                  <li className="list-inline-item" style={{ display: "none" }}>
                    <Link to="#">
                      <span>
                        <i className="fa fa-youtube-play" />
                      </span>
                    </Link>
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
                    <Link to="#">Beranda</Link>
                  </li>
                  <li>
                    <Link to="#">Produk &amp; Layanan</Link>
                  </li>
                  <li>
                    <Link to="#">Berita</Link>
                  </li>
                  <li>
                    <Link to="#">Galeri</Link>
                  </li>
                  <li>
                    <Link to="#">Tentang Dallas</Link>
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
                  © 2024 <Link to="#">PT. Delta Lara Wisata</Link>. Hak Cipta
                  Dilindungi.
                </p>
              </div>
              {/* end columns */}
              <div className="col-12 col-md-6 col-lg-6 col-xl-6" id="terms">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <Link to="#">Syarat &amp; Ketentuan</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">Kebijakan Privasi</Link>
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
      {/* end footer */}
    </div>
  );
};

export default PageNotFound;

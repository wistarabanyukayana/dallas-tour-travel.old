import $ from "jquery";

import { useEffect } from "react";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";

import logo from "../assets/img/logo.png";
import fadeLoaderOut from "./tools/fadeLoaderOut";

const NotFoundPage = () => {
  useEffect(fadeLoaderOut, []);

  return (
    <div className="page-not-found">
      {/*====== LOADER =====*/}
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
                <Link to="/" relative="path" className="btn btn-w-border">
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
    </div>
  );
};

export default NotFoundPage;

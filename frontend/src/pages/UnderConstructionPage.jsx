import $ from "jquery";

import { useEffect } from "react";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";

import logo from "../assets/img/logo.png";

const UnderConstructionPage = () => {
  useEffect(() => {
    $(".loader").fadeOut("slow");
  }, []);

  return (
    <div className="page-under-construction">
      {/*====== LOADER =====*/}
      <Loader />

      {/*===== INNERPAGE-WRAPPER ====*/}
      <section className="innerpage-wrapper h-100">
        <div id="coming-soon-text" className="section-padding back-size h-100">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-md-12">
                <h3 className="company-name">
                  <Link to="#">
                    <img id="logo" src={logo} alt="logo" />
                  </Link>
                </h3>
                <h2>Segera Tiba</h2>
                <p>Halaman ini dalam proses pembaharuan.</p>
                <Link to="/" className="btn btn-w-border" replace>
                  Kembali ke Beranda
                </Link>
              </div>
              {/* end columns */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end coming-soon-text */}
      </section>
      {/* end innerpage-wrapper */}
    </div>
  );
};

export default UnderConstructionPage;

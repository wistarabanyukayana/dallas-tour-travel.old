//import "./css/home.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";

import homepage from "../assets/img/homepage.jpg";
import about from "../assets/img/about.png";
import icon from "../assets/img/icon.png";

import { fetchPackages, fetchArticles } from "./tools/API/fetch";

import fadeLoaderOut from "./tools/fadeLoaderOut";
import flexSetup from "./tools/flexSetup";
import owlCarouselSetup from "./tools/owlCarouselSetup";

const Home = () => {
  const [packages, setPackages] = useState(null);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    flexSetup();

    async function fetchData() {
      //await setPackages(await fetchPackages("all"));
      setArticles(await fetchArticles("all/3"));
    }

    fetchData();

    owlCarouselSetup();

    fadeLoaderOut();
  }, []);

  return (
    <div className="home">
      {/*====== LOADER =====*/}
      <Loader />

      {/*========================= FLEX SLIDER =====================*/}
      <section
        className="flexslider-container w-100"
        id="flexslider-container-1"
      >
        <div className="flexslider slider" id="slider-1">
          <ul className="slides">
            <li
              className="item-1"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${homepage}) 50% 0%`,
                backgroundSize: "cover",
                height: "100%",
              }}
            >
              <div className="meta">
                <div className="container">
                  <h1>Dallas</h1>
                  <h2>Tour &amp; Travel</h2>
                  <p>Menghadirkan layanan yang handal dan terpecaya</p>
                </div>
                {/* end container */}
              </div>
              {/* end meta */}
            </li>
            {/* end item-1 */}
            <li
              className="item-2"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${homepage}) 50% 0%`,
                backgroundSize: "cover",
                height: "100%",
              }}
            >
              <div className="meta">
                <div className="container">
                  <h1>Dallas</h1>
                  <h2>Tour &amp; Travel</h2>
                  <p>Menghadirkan layanan yang handal dan terpecaya</p>
                </div>
                {/* end container */}
              </div>
              {/* end meta */}
            </li>
            {/* end item-2 */}
          </ul>
        </div>
        {/* end slider */}
      </section>
      {/* end flexslider-container */}

      {/*========================= WELCOME SECTION =====================*/}
      <section id="about-content-2" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-5 col-xl-4">
              <div id="abt-cnt-2-img">
                <img src={about} className="img-fluid" alt="about-img" />
              </div>
              {/* end abt-cnt-2-img */}
            </div>
            {/* end columns */}
            <div className="col-12 col-sm-12 col-lg-7 col-xl-8">
              <div id="abt-cnt-2-text">
                <h2>
                  Ahlan wa Sahlan fi
                  <span className="outer-title">
                    <img className="icon" src={icon} alt="title icon" />
                    <span className="inner-title">
                      Delta <span className="text-title">Laras Wisata</span>
                    </span>
                  </span>
                </h2>
                <p>
                  <strong>
                    Assalammualaikum Warahmatullahi Wabarakatu.....
                  </strong>
                  <br />
                  <br />
                  PT. Delata Laras Wisata (Dallas) merupakan perusahaan yang
                  berdedikasi dalam menyediakan layanan perjalanan ibadah Umroh
                  dan Haji. Dilandasi oleh semangat untuk memberikan pelayanan
                  terbaik, kami berkomitmen untuk mengantarkan setiap jamaah
                  dengan aman, nyaman, dan khusyuk dalam melaksanakan ibadah di
                  Tanah Suci. Kami juga senantiasa berkomitmen pada prinsip
                  transparansi, integritas, dan pelayanan prima. Kami berharap
                  dapat terus menjadi bagian dari perjalanan spiritual Anda dan
                  bersama-sama meraih ridha Allah SWT.
                  <br />
                  <br />
                  <strong>Wassalamu'alaikum Warahmatullahi Wabarakatuh,</strong>
                  <br />
                  <span>Komisaris Utama Ujang Ridwan Abdullah</span>
                </p>
                {/* end row */}
              </div>
              {/* end abt-cnt-2-text */}
            </div>
            {/* end columns */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>

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

      {/*=============== PACKAGE OFFERS ===============*/}
      <section id="package-offers" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-heading">
                <h2>Paket Perjalanan</h2>
                <hr className="heading-line" />
              </div>
              {/* end page-heading */}
              <div
                className="owl-carousel owl-theme owl-custom-arrow"
                id="owl-package-offers"
              >
                <div className="item rounded">
                  <div className="main-block package-block">
                    <div className="main-img">
                      <a href="#">
                        <img
                          src="assets/img/package-7.png"
                          className="img-fluid"
                          style={{ width: 360, height: 240 }}
                          alt="package-img"
                        />
                      </a>
                      <div className="main-mask">
                        <ul className="list-unstyled list-inline offer-price-1">
                          <li className="list-inline-item price">
                            Rp29.900.000<span className="divider">|</span>
                            <span className="pkg">QUAD</span>
                          </li>
                        </ul>
                      </div>
                      {/* end main-mask */}
                    </div>
                    {/* end offer-img */}
                    <div className="main-info package-info">
                      {/* end arrow */}
                      <table className="mt-1 mb-0 details table table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-calendar" />
                            </td>
                            <td>Jadwal</td>
                            <td>Oktober 2024</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-clock-o" />
                            </td>
                            <td>Durasi</td>
                            <td>9 Hari</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Makkah</td>
                            <td className="rating">
                              Meredien
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Madinah</td>
                            <td className="rating">
                              Hayah
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-map-marker" />
                            </td>
                            <td>Bandara</td>
                            <td>JAKARTA</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-plane" />
                            </td>
                            <td>Maskapai</td>
                            <td>
                              <img
                                src="assets/img/logo-garuda.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Garuda /
                              <img
                                src="assets/img/logo-saudia.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Saudia
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a
                        href="https://wa.link/w8nmwv"
                        className="btn_1 mt-2 btn-block font-weight-bold rounded"
                      >
                        Tanya Detail
                      </a>
                    </div>
                    {/* end package-info */}
                  </div>
                  {/* end package-block */}
                </div>
                {/* end item */}
                <div className="item rounded">
                  <div className="main-block package-block">
                    <div className="main-img">
                      <a href="#">
                        <img
                          src="assets/img/package-8.png"
                          className="img-fluid"
                          style={{ width: 360, height: 240 }}
                          alt="package-img"
                        />
                      </a>
                      <div className="main-mask">
                        <ul className="list-unstyled list-inline offer-price-1">
                          <li className="list-inline-item price">
                            Rp31.950.000<span className="divider">|</span>
                            <span className="pkg">QUAD</span>
                          </li>
                        </ul>
                      </div>
                      {/* end main-mask */}
                    </div>
                    {/* end offer-img */}
                    <div className="main-info package-info">
                      {/* end arrow */}
                      <table className="mt-1 mb-0 details table table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-calendar" />
                            </td>
                            <td>Jadwal</td>
                            <td>Januari 2025</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-clock-o" />
                            </td>
                            <td>Durasi</td>
                            <td>9 Hari</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Makkah</td>
                            <td className="rating">
                              Anjum
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Madinah</td>
                            <td className="rating">
                              Al-Naem
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-map-marker" />
                            </td>
                            <td>Bandara</td>
                            <td>JAKARTA</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-plane" />
                            </td>
                            <td>Maskapai</td>
                            <td>
                              <img
                                src="assets/img/logo-garuda.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Garuda /
                              <img
                                src="assets/img/logo-saudia.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Saudia
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a
                        href="https://wa.link/v28qmi"
                        className="btn_1 mt-2 btn-block font-weight-bold rounded"
                      >
                        Tanya Detail
                      </a>
                    </div>
                    {/* end package-info */}
                  </div>
                  {/* end package-block */}
                </div>
                {/* end item */}
                <div className="item rounded">
                  <div className="main-block package-block">
                    <div className="main-img">
                      <a href="#">
                        <img
                          src="assets/img/package-9.png"
                          className="img-fluid"
                          style={{ width: 360, height: 240 }}
                          alt="package-img"
                        />
                      </a>
                      <div className="main-mask">
                        <ul className="list-unstyled list-inline offer-price-1">
                          <li className="list-inline-item price">
                            Rp31.380.000<span className="divider">|</span>
                            <span className="pkg">QUAD</span>
                          </li>
                        </ul>
                      </div>
                      {/* end main-mask */}
                    </div>
                    {/* end offer-img */}
                    <div className="main-info package-info">
                      {/* end arrow */}
                      <table className="mt-1 mb-0 details table table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-calendar" />
                            </td>
                            <td>Jadwal</td>
                            <td>12 November 2024</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-clock-o" />
                            </td>
                            <td>Durasi</td>
                            <td>9 Hari</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Makkah</td>
                            <td className="rating">
                              Anjum
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Madinah</td>
                            <td className="rating">
                              Nozol
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-map-marker" />
                            </td>
                            <td>Bandara</td>
                            <td>JAKARTA</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-plane" />
                            </td>
                            <td>Maskapai</td>
                            <td>
                              <img
                                src="assets/img/logo-garuda.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Garuda /
                              <img
                                src="assets/img/logo-saudia.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Saudia
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a
                        href="https://wa.link/0tcv8u"
                        className="btn_1 mt-2 btn-block font-weight-bold rounded"
                      >
                        Tanya Detail
                      </a>
                    </div>
                    {/* end package-info */}
                  </div>
                  {/* end package-block */}
                </div>
                {/* end item */}
                <div className="item rounded">
                  <div className="main-block package-block">
                    <div className="main-img">
                      <a href="#">
                        <img
                          src="assets/img/package-9.png"
                          className="img-fluid"
                          style={{ width: 360, height: 240 }}
                          alt="package-img"
                        />
                      </a>
                      <div className="main-mask">
                        <ul className="list-unstyled list-inline offer-price-1">
                          <li className="list-inline-item price">
                            Rp33.380.000<span className="divider">|</span>
                            <span className="pkg">QUAD</span>
                          </li>
                        </ul>
                      </div>
                      {/* end main-mask */}
                    </div>
                    {/* end offer-img */}
                    <div className="main-info package-info">
                      {/* end arrow */}
                      <table className="mt-1 mb-0 details table table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-calendar" />
                            </td>
                            <td>Jadwal</td>
                            <td>12 November 2024</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-clock-o" />
                            </td>
                            <td>Durasi</td>
                            <td>12 Hari</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Makkah</td>
                            <td className="rating">
                              Anjum
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Madinah</td>
                            <td className="rating">
                              Nozol
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-map-marker" />
                            </td>
                            <td>Bandara</td>
                            <td>JAKARTA</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-plane" />
                            </td>
                            <td>Maskapai</td>
                            <td>
                              <img
                                src="assets/img/logo-garuda.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Garuda /
                              <img
                                src="assets/img/logo-saudia.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Saudia
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a
                        href="https://wa.link/b9rk24"
                        className="btn_1 mt-2 btn-block font-weight-bold rounded"
                      >
                        Tanya Detail
                      </a>
                    </div>
                    {/* end package-info */}
                  </div>
                  {/* end package-block */}
                </div>
                {/* end item */}
                <div className="item rounded">
                  <div className="main-block package-block">
                    <div className="main-img">
                      <a href="#">
                        <img
                          src="assets/img/package-10.png"
                          className="img-fluid"
                          style={{ width: 360, height: 240 }}
                          alt="package-img"
                        />
                      </a>
                      <div className="main-mask">
                        <ul className="list-unstyled list-inline offer-price-1">
                          <li className="list-inline-item price">
                            Rp35.950.000<span className="divider">|</span>
                            <span className="pkg">QUAD</span>
                          </li>
                        </ul>
                      </div>
                      {/* end main-mask */}
                    </div>
                    {/* end offer-img */}
                    <div className="main-info package-info">
                      {/* end arrow */}
                      <table className="mt-1 mb-0 details table table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-calendar" />
                            </td>
                            <td>Jadwal</td>
                            <td>Desember 2024-2025</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-clock-o" />
                            </td>
                            <td>Durasi</td>
                            <td>9 Hari</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Makkah</td>
                            <td className="rating">
                              Almassa
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Madinah</td>
                            <td className="rating">
                              Emaar
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-map-marker" />
                            </td>
                            <td>Bandara</td>
                            <td>JAKARTA</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-plane" />
                            </td>
                            <td>Maskapai</td>
                            <td>
                              <img
                                src="assets/img/logo-garuda.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Garuda /
                              <img
                                src="assets/img/logo-saudia.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Saudia
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a
                        href="https://wa.link/yfb9ak"
                        className="btn_1 mt-2 btn-block font-weight-bold rounded"
                      >
                        Tanya Detail
                      </a>
                    </div>
                    {/* end package-info */}
                  </div>
                  {/* end package-block */}
                </div>
                {/* end item */}
                <div className="item rounded">
                  <div className="main-block package-block">
                    <div className="main-img">
                      <a href="#">
                        <img
                          src="assets/img/package-11.png"
                          className="img-fluid"
                          style={{ width: 360, height: 240 }}
                          alt="package-img"
                        />
                      </a>
                      <div className="main-mask">
                        <ul className="list-unstyled list-inline offer-price-1">
                          <li className="list-inline-item price">
                            Rp45.800.000<span className="divider">|</span>
                            <span className="pkg">QUAD</span>
                          </li>
                        </ul>
                      </div>
                      {/* end main-mask */}
                    </div>
                    {/* end offer-img */}
                    <div className="main-info package-info">
                      {/* end arrow */}
                      <table className="mt-1 mb-0 details table table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-calendar" />
                            </td>
                            <td>Jadwal</td>
                            <td>Desember 2024</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-clock-o" />
                            </td>
                            <td>Durasi</td>
                            <td>12 Hari</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Makkah</td>
                            <td className="rating">
                              Majestic
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Madinah</td>
                            <td className="rating">
                              Al-Anshar
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Turki</td>
                            <td className="rating">
                              Centro
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-map-marker" />
                            </td>
                            <td>Bandara</td>
                            <td>JAKARTA</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-plane" />
                            </td>
                            <td>Maskapai</td>
                            <td>
                              <img
                                src="assets/img/logo-garuda.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Garuda /
                              <img
                                src="assets/img/logo-saudia.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Saudia
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a
                        href="https://wa.link/g1lomr"
                        className="btn_1 mt-2 btn-block font-weight-bold rounded"
                      >
                        Tanya Detail
                      </a>
                    </div>
                    {/* end package-info */}
                  </div>
                  {/* end package-block */}
                </div>
                {/* end item */}
                <div className="item rounded">
                  <div className="main-block package-block">
                    <div className="main-img">
                      <a href="#">
                        <img
                          src="assets/img/package-4.png"
                          className="img-fluid"
                          style={{ width: 360, height: 240 }}
                          alt="package-img"
                        />
                      </a>
                      <div className="main-mask">
                        <ul className="list-unstyled list-inline offer-price-1">
                          <li className="list-inline-item price">
                            Rp30.100.000<span className="divider">|</span>
                            <span className="pkg">QUAD</span>
                          </li>
                        </ul>
                      </div>
                      {/* end main-mask */}
                    </div>
                    {/* end offer-img */}
                    <div className="main-info package-info">
                      {/* end arrow */}
                      <table className="mt-1 mb-0 details table table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-calendar" />
                            </td>
                            <td>Jadwal</td>
                            <td>12 Okt/Des, 20 Okt 2024</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-clock-o" />
                            </td>
                            <td>Durasi</td>
                            <td>9 Hari</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Makkah</td>
                            <td className="rating">
                              Anjum
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Madinah</td>
                            <td className="rating">
                              Odst
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-map-marker" />
                            </td>
                            <td>Bandara</td>
                            <td>JAKARTA</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-plane" />
                            </td>
                            <td>Maskapai</td>
                            <td>
                              <img
                                src="assets/img/logo-garuda.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Garuda /
                              <img
                                src="assets/img/logo-saudia.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Saudia
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a
                        href="https://wa.link/7ijsm7"
                        className="btn_1 mt-2 btn-block font-weight-bold rounded"
                      >
                        Tanya Detail
                      </a>
                    </div>
                    {/* end package-info */}
                  </div>
                  {/* end package-block */}
                </div>
                {/* end item */}
                <div className="item rounded">
                  <div className="main-block package-block">
                    <div className="main-img">
                      <a href="#">
                        <img
                          src="assets/img/package-5.png"
                          className="img-fluid"
                          style={{ width: 360, height: 240 }}
                          alt="package-img"
                        />
                      </a>
                      <div className="main-mask">
                        <ul className="list-unstyled list-inline offer-price-1">
                          <li className="list-inline-item price">
                            Rp32.300.000<span className="divider">|</span>
                            <span className="pkg">QUAD</span>
                          </li>
                        </ul>
                      </div>
                      {/* end main-mask */}
                    </div>
                    {/* end offer-img */}
                    <div className="main-info package-info">
                      {/* end arrow */}
                      <table className="mt-1 mb-0 details table table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-calendar" />
                            </td>
                            <td>Jadwal</td>
                            <td>12 Okt/Des, 20 Okt 2024</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-clock-o" />
                            </td>
                            <td>Durasi</td>
                            <td>9 Hari</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Makkah</td>
                            <td className="rating">
                              Anjum
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Madinah</td>
                            <td className="rating">
                              Nozol
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-map-marker" />
                            </td>
                            <td>Bandara</td>
                            <td>JAKARTA</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-plane" />
                            </td>
                            <td>Maskapai</td>
                            <td>
                              <img
                                src="assets/img/logo-garuda.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Garuda /
                              <img
                                src="assets/img/logo-saudia.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Saudia
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a
                        href="https://wa.link/j51znx"
                        className="btn_1 mt-2 btn-block font-weight-bold rounded"
                      >
                        Tanya Detail
                      </a>
                    </div>
                    {/* end package-info */}
                  </div>
                  {/* end package-block */}
                </div>
                {/* end item */}
                <div className="item rounded">
                  <div className="main-block package-block">
                    <div className="main-img">
                      <a href="#">
                        <img
                          src="assets/img/package-6.png"
                          className="img-fluid"
                          style={{ width: 360, height: 240 }}
                          alt="package-img"
                        />
                      </a>
                      <div className="main-mask">
                        <ul className="list-unstyled list-inline offer-price-1">
                          <li className="list-inline-item price">
                            Rp36.900.000<span className="divider">|</span>
                            <span className="pkg">QUAD</span>
                          </li>
                        </ul>
                      </div>
                      {/* end main-mask */}
                    </div>
                    {/* end offer-img */}
                    <div className="main-info package-info">
                      {/* end arrow */}
                      <table className="mt-1 mb-0 details table table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-calendar" />
                            </td>
                            <td>Jadwal</td>
                            <td>12 Okt/Des, 20 Okt 2024</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-clock-o" />
                            </td>
                            <td>Durasi</td>
                            <td>9 Hari</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Makkah</td>
                            <td className="rating">
                              Pullman
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Madinah</td>
                            <td className="rating">
                              Nozol
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-map-marker" />
                            </td>
                            <td>Bandara</td>
                            <td>JAKARTA</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-plane" />
                            </td>
                            <td>Maskapai</td>
                            <td>
                              <img
                                src="assets/img/logo-garuda.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Garuda /
                              <img
                                src="assets/img/logo-saudia.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Saudia
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a
                        href="https://wa.link/hkahel"
                        className="btn_1 mt-2 btn-block font-weight-bold rounded"
                      >
                        Tanya Detail
                      </a>
                    </div>
                    {/* end package-info */}
                  </div>
                  {/* end package-block */}
                </div>
                {/* end item */}
                <div className="item rounded">
                  <div className="main-block package-block">
                    <div className="main-img sold-out">
                      <a href="#">
                        <img
                          src="assets/img/package-1.png"
                          className="img-fluid"
                          style={{ width: 360, height: 240 }}
                          alt="package-img"
                        />
                      </a>
                      <div className="main-mask">
                        <ul className="list-unstyled list-inline offer-price-1">
                          <li className="list-inline-item price">
                            Rp29.950.000<span className="divider">|</span>
                            <span className="pkg">QUAD</span>
                          </li>
                        </ul>
                      </div>
                      {/* end main-mask */}
                    </div>
                    {/* end offer-img */}
                    <div className="main-info package-info">
                      {/* end arrow */}
                      <table className="mt-1 mb-0 details table table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-calendar" />
                            </td>
                            <td>Jadwal</td>
                            <td>16 &amp; 20 Agu 2024</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-clock-o" />
                            </td>
                            <td>Durasi</td>
                            <td>9 Hari</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Makkah</td>
                            <td className="rating">
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Madinah</td>
                            <td className="rating">
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-map-marker" />
                            </td>
                            <td>Bandara</td>
                            <td>JAKARTA</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-plane" />
                            </td>
                            <td>Maskapai</td>
                            <td>
                              <img
                                src="assets/img/logo-garuda.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Garuda /
                              <img
                                src="assets/img/logo-saudia.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Saudia
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a
                        href="paket-clasic.html"
                        className="btn_1 mt-2 btn-block font-weight-bold rounded sold-out"
                      >
                        Terjual Habis
                      </a>
                    </div>
                    {/* end package-info */}
                  </div>
                  {/* end package-block */}
                </div>
                {/* end item */}
                <div className="item rounded">
                  <div className="main-block package-block">
                    <div className="main-img sold-out">
                      <a href="#">
                        <img
                          src="assets/img/package-2.png"
                          className="img-fluid"
                          style={{ width: 360, height: 240 }}
                          alt="package-img"
                        />
                      </a>
                      <div className="main-mask">
                        <ul className="list-unstyled list-inline offer-price-1">
                          <li className="list-inline-item price">
                            Rp33.750.000<span className="divider">|</span>
                            <span className="pkg">QUAD</span>
                          </li>
                        </ul>
                      </div>
                      {/* end main-mask */}
                    </div>
                    {/* end offer-img */}
                    <div className="main-info package-info">
                      {/* end arrow */}
                      <table className="mt-1 mb-0 details table table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-calendar" />
                            </td>
                            <td>Jadwal</td>
                            <td>16 &amp; 20 Agu 2024</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-clock-o" />
                            </td>
                            <td>Durasi</td>
                            <td>9 Hari</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Makkah</td>
                            <td className="rating">
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Madinah</td>
                            <td className="rating">
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-map-marker" />
                            </td>
                            <td>Bandara</td>
                            <td>JAKARTA</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-plane" />
                            </td>
                            <td>Maskapai</td>
                            <td>
                              <img
                                src="assets/img/logo-garuda.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Garuda /
                              <img
                                src="assets/img/logo-saudia.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Saudia
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a
                        href="paket-signature.html"
                        className="btn_1 mt-2 btn-block font-weight-bold rounded sold-out"
                      >
                        Terjual Habis
                      </a>
                    </div>
                    {/* end package-info */}
                  </div>
                  {/* end package-block */}
                </div>
                {/* end item */}
                <div className="item rounded">
                  <div className="main-block package-block">
                    <div className="main-img sold-out">
                      <a href="#">
                        <img
                          src="assets/img/package-3.png"
                          className="img-fluid"
                          style={{ width: 360, height: 240 }}
                          alt="package-img"
                        />
                      </a>
                      <div className="main-mask">
                        <ul className="list-unstyled list-inline offer-price-1">
                          <li className="list-inline-item price">
                            Rp32.350.000<span className="divider">|</span>
                            <span className="pkg">QUAD</span>
                          </li>
                        </ul>
                      </div>
                      {/* end main-mask */}
                    </div>
                    {/* end offer-img */}
                    <div className="main-info package-info">
                      {/* end arrow */}
                      <table className="mt-1 mb-0 details table table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-calendar" />
                            </td>
                            <td>Jadwal</td>
                            <td>12 &amp; 20 Sep 2024</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-clock-o" />
                            </td>
                            <td>Durasi</td>
                            <td>9 Hari</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Makkah</td>
                            <td className="rating">
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-building-o" />
                            </td>
                            <td>Hotel Madinah</td>
                            <td className="rating">
                              <span>
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star orange" />
                                <i className="fa fa-star lightgrey" />
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-map-marker" />
                            </td>
                            <td>Bandara</td>
                            <td>JAKARTA</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-plane" />
                            </td>
                            <td>Maskapai</td>
                            <td>
                              <img
                                src="assets/img/logo-garuda.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Garuda /
                              <img
                                src="assets/img/logo-saudia.png"
                                style={{
                                  display: "inline",
                                  width: 20,
                                  marginRight: 3,
                                }}
                              />
                              Saudia
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a
                        href="paket-umroh-maulid.html"
                        className="btn_1 mt-2 btn-block font-weight-bold rounded sold-out"
                      >
                        Terjual Habis
                      </a>
                    </div>
                    {/* end package-info */}
                  </div>
                  {/* end package-block */}
                </div>
                {/* end item */}
              </div>
              {/* end owl-package-offers */}
            </div>
            {/* end columns */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end package-offers */}

      {/*================ LATEST ARTICLE ==============*/}
      <section id="latest-blog" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-heading">
                <h2>Artikel Terbaru</h2>
                <hr className="heading-line" />
              </div>
              <div className="row">
                {articles &&
                  articles.map((article) => (
                    <div key={article.id} className="col-md-6 col-lg-4">
                      <div className="main-block latest-block">
                        <div className="main-img latest-img">
                          <Link to="#">
                            <img
                              src={article.imageURL}
                              className="img-fluid blog-img"
                              alt="blog-img"
                            />
                          </Link>
                        </div>
                        {/* end latest-img */}
                        <div className="latest-info">
                          <ul className="list-unstyled">
                            <li>
                              <span>
                                <i className="fa fa-calendar-minus-o" />
                              </span>
                              {new Date(article.createdAt).toLocaleDateString(
                                "id-ID",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                              <span className="author">
                                Oleh{" "}
                                <Link to="#">
                                  {article.author.charAt(0).toUpperCase() +
                                    article.author.slice(1)}
                                </Link>
                              </span>
                            </li>
                          </ul>
                        </div>
                        {/* end latest-info */}
                        <div className="main-info latest-desc">
                          <div className="row">
                            <div className="col-10 col-md-10 main-title">
                              <Link to="#">{article.title}</Link>
                              <p>{article.content}</p>
                            </div>
                            {/* end columns */}
                          </div>
                          {/* end row */}
                          <span className="arrow">
                            <Link to="#">
                              <i className="fa fa-angle-right" />
                            </Link>
                          </span>
                        </div>
                        {/* end latest-desc */}
                      </div>
                      {/* end latest-block */}
                    </div>
                  ))}
              </div>
              {/* end row */}
              <div className="view-all text-center">
                <Link to="/artikel" className="btn btn-orange">
                  Lihat Semua
                </Link>
              </div>
              {/* end view-all */}
            </div>
            {/* end columns */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end latest-blog */}
    </div>
  );
};

export default Home;

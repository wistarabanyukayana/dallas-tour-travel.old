//import "./css/navbar.css";

import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import navSetUp from "./tools/navSetUp";

import logo from "../assets/img/ftr-logo.png";

const Navbar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    navSetUp();
  }, []);

  return (
    <nav
      className="navbar navbar-expand-xl sticky-top navbar-custom main-navbar p-1"
      id="mynavbar-1"
    >
      <div className="container">
        <Link to="#" className="navbar-brand py-1 m-0">
          <img id="logo" alt="logo" src={logo} />
        </Link>
        <div className="header-search d-xl-none my-auto ms-auto py-1">
          <Link to="#" className="search-button" onClick="openSearch()">
            <span>
              <i className="fa fa-search"></i>
            </span>
          </Link>
        </div>
        <button
          className="navbar-toggler ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="sidebarCollapse"
        >
          <i className="fa fa-navicon py-1"></i>
        </button>

        <div className="collapse navbar-collapse" id="myNavbar1">
          <ul className="navbar-nav ms-auto navbar-search-link">
            <li
              className={
                pathname === "/"
                  ? "nav-item dropdown active"
                  : "nav-item dropdown"
              }
            >
              <Link
                to="/"
                className="nav-link"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Beranda
              </Link>
            </li>
            <li
              className={
                pathname.includes("/produk-layanan")
                  ? "nav-item dropdown active"
                  : "nav-item dropdown"
              }
            >
              <Link
                to="/produk-layanan"
                className="nav-link"
                style={{ textWrap: "nowrap" }}
              >
                Produk & Layanan
                <span>
                  <i className="fa fa-angle-down"></i>
                </span>
              </Link>
              <ul className="dropdown-menu">
                <li
                  className={
                    pathname === "/produk-layanan/haji" ? "active" : ""
                  }
                >
                  <Link className="dropdown-item" to="/produk-layanan/haji">
                    Haji
                  </Link>
                </li>
                <li
                  className={
                    pathname === "/produk-layanan/umroh" ? "active" : ""
                  }
                >
                  <Link className="dropdown-item" to="/produk-layanan/umroh">
                    Umroh
                  </Link>
                </li>
                <li
                  className={
                    pathname === "/produk-layanan/wisata-halal" ? "active" : ""
                  }
                >
                  <Link
                    className="dropdown-item"
                    to="/produk-layanan/wisata-halal"
                  >
                    Wisata Halal
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={
                pathname === "/artikel"
                  ? "nav-item dropdown active"
                  : "nav-item dropdown"
              }
            >
              <Link to="/artikel" className="nav-link">
                Artikel
              </Link>
            </li>
            <li
              className={
                pathname === "/galeri"
                  ? "nav-item dropdown active"
                  : "nav-item dropdown"
              }
            >
              <Link to="/galeri" className="nav-link">
                Galeri
              </Link>
            </li>
            <li
              className={
                pathname === "/tentang-dallas"
                  ? "nav-item dropdown active"
                  : "nav-item dropdown"
              }
            >
              <Link to="/tentang-dallas" className="nav-link">
                Tentang Dallas
              </Link>
            </li>
            <li className="dropdown-item search-btn">
              <Link to="#" className="search-button" onClick="openSearch()">
                <span>
                  <i className="fa fa-search"></i>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        {/* end navbar collapse */}
      </div>
      {/* End container */}
    </nav>
  );
};

export default Navbar;

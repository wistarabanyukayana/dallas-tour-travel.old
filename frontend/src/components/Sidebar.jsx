//import "./css/sidebar.css";

import { Link, useLocation } from "react-router-dom";

import logo from "../assets/img/logo.png";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="sidenav-content">
      {/* Sidebar  */}
      <nav id="sidebar" className="sidenav">
        <h2 id="web-name">
          <span>
            <div id="logo-container">
              <Link to="#" className="navbar-brand py-1 my-auto pl-md-2 m-0">
                <img id="logo" alt="Logo" src={logo} />
              </Link>
            </div>
          </span>
        </h2>
        <div id="main-menu">
          <div id="dismiss">
            <button className="btn" id="closebtn">
              ×
            </button>
          </div>
          <div className="list-group panel">
            <Link
              to="/"
              className={pathname === "/" ? "items-list active" : "items-list"}
              aria-expanded="false"
            >
              <span>
                <i className="fa fa-home link-icon" />
              </span>
              Beranda
            </Link>
            <Link
              to="/produk-layanan"
              className={
                pathname === "/produk-layanan"
                  ? "items-list active collapsed"
                  : "items-list"
              }
            >
              <span>
                <i className="fa fa-th-large link-icon" />
              </span>
              Produk &amp; Layanan
            </Link>

            {/* end sub-menu */}
            <Link
              className={
                pathname === "/artikel" ? "items-list active" : "items-list"
              }
              to="/artikel"
            >
              <span>
                <i className="fa fa-newspaper-o link-icon" />
              </span>
              Artikel
            </Link>
            <Link
              className={
                pathname === "/galeri" ? "items-list active" : "items-list"
              }
              to="/galeri"
            >
              <span>
                <i className="fa fa-picture-o link-icon" />
              </span>
              Galeri
            </Link>
            <Link
              className={
                pathname === "/tentang-dallas"
                  ? "items-list active"
                  : "items-list"
              }
              to="/tentang-dallas"
            >
              <span>
                <i className="fa fa-building link-icon" />
              </span>
              Tentang Dallas
            </Link>
          </div>
          {/* End list-group panel */}
        </div>
        {/* End main-menu */}
      </nav>
    </div>
  );
};

export default Sidebar;

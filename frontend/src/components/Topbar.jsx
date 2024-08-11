import "./css/topbar.css";

import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div id="top-bar" className="tb-text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div id="info">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <span>
                    <i className="fa fa-map-marker" />
                  </span>
                  Jl. Raya Kalibata, Jakarta
                </li>
                <li className="list-inline-item">
                  <span>
                    <i className="fa fa-phone" />
                  </span>
                  (021) 80878321
                </li>
              </ul>
            </div>
            {/* end info */}
          </div>
          {/* end columns */}
          <div className="col-12 col-md-6">
            <div id="links">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link to="/masuk">
                    <span>
                      <i className="fa fa-lock" />
                    </span>
                    Masuk
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/daftar">
                    <span>
                      <i className="fa fa-plus" />
                    </span>
                    Daftar
                  </Link>
                </li>
                <li className="list-inline-item">
                  <form>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <div className="form-group currency">
                          <span>
                            <i className="fa fa-angle-down" />
                          </span>
                          <select className="form-control">
                            <option value="">Rp</option>
                            <option value="">$</option>
                            <option value="">£</option>
                          </select>
                        </div>
                        {/* end form-group */}
                      </li>
                      <li className="list-inline-item">
                        <div className="form-group language">
                          <span>
                            <i className="fa fa-angle-down" />
                          </span>
                          <select className="form-control">
                            <option value="">ID</option>
                            <option value="">EN</option>
                            <option value="">UR</option>
                            <option value="">FR</option>
                            <option value="">IT</option>
                          </select>
                        </div>
                        {/* end form-group */}
                      </li>
                    </ul>
                  </form>
                </li>
              </ul>
            </div>
            {/* end links */}
          </div>
          {/* end columns */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
  );
};

export default Topbar;

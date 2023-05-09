import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
const dashboard = () => {
  return (
    <>
      <div className="navbars">
        <img
          src="https://www.letusmaintain.com/img/logo.png"
          alt="Logo"
          className="logo"
        />
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle hidden-arrow"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell" />
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      Some news
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another news
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <button type="button" class="btn btn-dark me-3">
          Logout
        </button>
        </nav>
        
      </div>
      <div className="d-flex ">
        <nav id="sidebar">
          <div className="p-4 pt-5">
            <div
              className="img logo rounded-circle mb-3"
              style={{
                backgroundImage:
                  "url(http://frontendfreecode.com/img/user.jpg)",
              }}
            />
            <ul className="list-unstyled components mb-5">
            <h3 style={{textAlign:"center"}}>User Name</h3>
              <li className="active">
               
                <Link
                  to="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  Home
                </Link>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <Link to="#!">Home 1</Link>
                  </li>
                  <li>
                    <Link to="#!">Home 2</Link>
                  </li>
                  <li>
                    <Link to="#!">Home 3</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#!">About</Link>
              </li>
              <li>
                <Link
                  to="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  Pages
                </Link>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                  <li>
                    <Link to="#!">Page 1</Link>
                  </li>
                  <li>
                    <Link to="#!">Page 2</Link>
                  </li>
                  <li>
                    <Link to="#!">Page 3</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#!">Portfolio</Link>
              </li>
              <li>
                <Link to="#!">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default dashboard;

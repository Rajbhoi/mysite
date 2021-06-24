import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { navbar } = props;
  console.log(navbar);
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                {navbar.logo && <img src={navbar.logo.imgUrl} alt={""} />}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mb-2 mb-lg-0">
                    {navbar &&
                      navbar.menus &&
                      navbar.menus.map &&
                      navbar.menus.map((menu) => {
                        const { title, url, isButton } = menu;

                        if (isButton) {
                          return (
                            <a href={url} rel="noreferrer" target="_blank">
                              <button class="btn btn-primary btn-lg">
                                {title}
                              </button>
                            </a>
                          );
                        }
                        // console.log(menu)
                        return (
                          <NavLink
                            className="nav-link active"
                            aria-current="page"
                            to={url}
                          >
                            <li className="nav-item">
                              {/* {
																isButton ?
																	<>
																		Button
																</>
																	:
																	<>Non Button</>
															} */}
                              {title}
                            </li>
                          </NavLink>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

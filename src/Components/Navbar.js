import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { debounce } from "debounce";

export default function Nabar() {
   
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
   
  
    const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;
  
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
  
      setPrevScrollPos(currentScrollPos);
    }, 100);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible, handleScroll]);
  
    return (
      <>
       <div style={{ top: visible ? "0" : "-60px" }}>
        <nav className=" navbar  navbar-expand-lg navbar-light  ">
          <div className="container-fluid">
            <NavLink
              className="navbar-brand text-white link-wrapper nav-logo"
              to="/"
            >
              <img src="" alt="" />
            </NavLink>
            <button
              className="navbar-toggler navbar-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation "
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/about">
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/events">
                    Events
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/contact">
                    Contact
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/registration">
                    Login{" "}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      </>
    );
}
import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { MdGetApp } from 'react-icons/md';
import logo from '../../images/My-logo.png'

const Navbar2 = () => {
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <Link
        to={to}
        className={`m-1 ${isActive ? "button is-danger is-outlined" : "button is-info is-outlined"}`}
        {...props}
      >
        {children}
      </Link>
    );
  }
  const [isNavActive, setisNavActive] = useState(false);
  return (
    <div>
      <nav className="s">
        <div className="containerd">
          <div className="">
            <div className="">
              <div
                onClick={() => {
                  setisNavActive(!isNavActive);
                }}
                role="button"
                data-target="navMenu"
                className={`navbar-burger has-text-centered ${
                  isNavActive ? "is-active center" : ""
                }`}
                aria-label="menu"
                aria-expanded="false"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu has-text-centered ${ isNavActive ? "is-active" : ""}`}>
          <div className="navbar-start">
          <CustomLink to={'/'} className="logo-path"><img src={logo} alt="my logo" className='logo'></img> </CustomLink>
            <div className="navbar-item">
              <div className="nav">
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/portfolio">Portfolio</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <CustomLink to="/resume">Resume</CustomLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
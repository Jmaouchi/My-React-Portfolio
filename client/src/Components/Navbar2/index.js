import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import { MdGetApp } from 'react-icons/md';
// import logo from '../../images/My-logo.png'
import './style.css'

const Header = () => {
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
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
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
        <div
          id="navMenu"
          className={`navbar-menu has-text-centered ${
            isNavActive ? "is-active" : ""
          }`}
        >
          <svg width="1500" height="100" viewBox="0 0 607 270" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg">
            <path d="M1 153C43.4 90.6 42.6667 139 37 171L142 14H150L109 86L103 153L109 176L142 161L175 81L187 51L175 9L155 14L187 23L247 1L279 36L261 70L207 100L235 176H255L279 23L299 14L317 92.5M335 171L320.554 108M317 92.5L286 108H320.554M317 92.5L320.554 108M346 153V51L335 23L398 70L443 9L439.8 45M427 189L439.8 45M439.8 45L451 36H459L475 29.5M475 29.5L491 23L500 34M475 29.5L459 45L463 149L479 153L500 133L509 45L500 34M500 34L535 23V142L531 73L591 70V63M591 23V63M591 63H605L591 81L584 189L137 258L122 269M122 269L155 196V183L137 189L122 209L109 196L83 203L78 209L116 264L122 269Z" stroke="white"/>
          </svg>
          <div className="navbar-start">
            <div className="navbar-item">
              <CustomLink to="/">About</CustomLink>
              <CustomLink to="/Work">Work</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
              <CustomLink to="/Reviews">Reviews</CustomLink>
            </div>
          </div>
        </div>
      </nav>

      {/* <section className="hero is-black is-medium-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <a
              href="https://drive.google.com/file/d/10KNc_-kTcN9SMV1Tsu54TkSJqzFbcjU5/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="button is-danger is-outlined"
            >
            <span className="icon"><MdGetApp /></span>
            <span>Download CV</span>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Header;

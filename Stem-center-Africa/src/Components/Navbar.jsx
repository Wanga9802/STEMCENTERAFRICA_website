import '../Styles/Navbar.css'
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logopicc from '../assets/stem_africa.jpg';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg sticky-top${scrolled ? ' scrolled' : ''}`}>
        <div className="container">

          {/* Brand Logo & Name */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <div className="brand-logo-wrapper">
              <img src={Logopicc} alt="STEMCENTER-LOGO" />
            </div>
            <span className="brand-name ms-2">STEM Center Africa</span>
          </Link>

          {/* Toggler — triggers offcanvas */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop nav links — hidden on mobile */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
              <li className="nav-item">
                <NavLink end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/programs">Programs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/impact">Our Impact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/partners">Partners</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item ms-lg-2">
                <Link className="btn btn-donate" to="/donate">
                  Donate Now
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ms-1">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      {/* ── Offcanvas Mobile Menu ── */}
      <div
        className="offcanvas offcanvas-end offcanvas-menu"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        {/* Offcanvas Header */}
        <div className="offcanvas-header">
          <div className="d-flex align-items-center gap-2">
            <div className="brand-logo-wrapper">
              <img src={Logopicc} alt="STEMCENTER-LOGO" />
            </div>
            <span className="brand-name">STEM Africa</span>
          </div>
          <button
            type="button"
            className="offcanvas-close-btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Offcanvas Body */}
        <div className="offcanvas-body">
          <ul className="navbar-nav d-flex flex-column gap-1">
            <li className="nav-item">
              <NavLink end className={({ isActive }) => `nav-link offcanvas-link${isActive ? ' active' : ''}`} to="/" data-bs-dismiss="offcanvas">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link offcanvas-link${isActive ? ' active' : ''}`} to="/about" data-bs-dismiss="offcanvas">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link offcanvas-link${isActive ? ' active' : ''}`} to="/programs" data-bs-dismiss="offcanvas">Programs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link offcanvas-link${isActive ? ' active' : ''}`} to="/impact" data-bs-dismiss="offcanvas">Our Impact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link offcanvas-link${isActive ? ' active' : ''}`} to="/partners" data-bs-dismiss="offcanvas">Partners</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link offcanvas-link${isActive ? ' active' : ''}`} to="/contact" data-bs-dismiss="offcanvas">Contact</NavLink>
            </li>
            <li className="nav-item mt-3">
              <Link className="btn btn-donate w-100 justify-content-center" to="/donate" data-bs-dismiss="offcanvas">
                Donate Now
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ms-1">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
}

export default Navbar;

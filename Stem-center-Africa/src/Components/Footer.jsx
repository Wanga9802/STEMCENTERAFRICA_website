import { useState } from 'react'
import '../Styles/Footer.css'
import Logopic from '../assets/stem_africa.jpg';


function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);



const socialLinks = [
  {
    label: "LinkedIn",
    abbr: "in",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    abbr: "𝕏",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    abbr: "fb",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    abbr: "yt",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    abbr: "wa",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    ),
  },
];

const quickLinks = [
  "Home", "About Us", "Programs", "Our Impact", "Partners", "Blog & News", "Contact",
];

const programs = [
  "Coding Bootcamp", "Science Labs", "Girls in STEM",
  "Mentorship Program", "Innovation Hub", "Scholarships",
];


return (

<>

 <footer className="sca-footer">
        <div className="container">

          {/* ── Main grid ── */}
          <div className="footer-main">
            <div className="row g-5">

              {/* Brand column —*/}
              <div className="col-12 col-md-4 ">
                {/* Logo */}
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img src={Logopic} alt="STEM Center Africa Logo" className="logo-box" />
                  <p className="brand-name">STEM Center Africa</p>
                </div>

                {/* Tagline badge */}
                <div className="tagline-badge">
                  <span className="tagline-dot" />
                  Promoting STEM Education in Africa &amp; Beyond
                </div>

                 {/* Description */}
                <p className="brand-desc mb-4">
                   Join us in shaping a brighter future for Africa and the world In partnesip with our partners & team.
                </p>
                

                {/* Socials */}
                <div className="d-flex flex-wrap gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="social-btn"
                      onMouseEnter={() => setHoveredSocial(s.label)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links — half on xs (stacked), auto on md */}
              <div className="col-5 col-md-2">
                <h4 className="col-heading">Quick Links</h4>
                <ul className="list-unstyled mb-0">
                  {quickLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer-link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programs — half on xs, auto on md */}
              <div className="col-6 col-md-3">
                <h4 className="col-heading">Our Programs</h4>
                <ul className="list-unstyled mb-0">
                  {programs.map((prog) => (
                    <li key={prog}>
                      <a href="#" className="footer-link">
                        <span className="prog-dot" />
                        {prog}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              

              {/* Contact — full on xs & md, auto on lg */}
              <div className="col-12 col-md-3">
                <h4 className="col-heading">Contact Us</h4>

                <div className="contact-row ">
                  <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <span className="contact-text">Oyugis, Kenya &mdash; East Africa</span>
                </div>

                <div className="contact-row">
                  <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="contact-text">info@stemcenter-africa.com</span>
                </div>

                <div className="contact-row">
                  <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span className="contact-text">+254790753694/+17325068913</span>
                </div>

                

              </div>
            </div>

          </div>

          <div className="footer-bottom">
            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2">
              <p className="copy-text">
                © 2026 STEM Center Africa. All rights reserved.
              </p>
            </div>
          </div>

        </div>
      </footer>

</>

)

}

export default Footer;



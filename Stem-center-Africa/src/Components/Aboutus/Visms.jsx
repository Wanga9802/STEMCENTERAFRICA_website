import React from 'react';
import '../../Styles/Vismis.css';

// SVG icons inline — no external dependency needed
// Navy #0D2B6E — Collaboration
const CollaborationIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="value-icon-svg">
    <circle cx="50" cy="38" r="10" fill="#0D2B6E"/>
    <circle cx="28" cy="55" r="8" fill="#0D2B6E" opacity="0.75"/>
    <circle cx="72" cy="55" r="8" fill="#0D2B6E" opacity="0.75"/>
    <path d="M34 72 Q50 62 66 72" stroke="#0D2B6E" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    <path d="M15 80 Q28 68 41 76" stroke="#0D2B6E" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.75"/>
    <path d="M59 76 Q72 68 85 80" stroke="#0D2B6E" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.75"/>
    <circle cx="50" cy="18" r="7" fill="none" stroke="#0D2B6E" strokeWidth="2.5"/>
    <line x1="50" y1="11" x2="50" y2="7" stroke="#0D2B6E" strokeWidth="2" strokeLinecap="round"/>
    <line x1="43" y1="13" x2="40" y2="10" stroke="#0D2B6E" strokeWidth="2" strokeLinecap="round"/>
    <line x1="57" y1="13" x2="60" y2="10" stroke="#0D2B6E" strokeWidth="2" strokeLinecap="round"/>
    <line x1="41" y1="18" x2="37" y2="18" stroke="#0D2B6E" strokeWidth="2" strokeLinecap="round"/>
    <line x1="59" y1="18" x2="63" y2="18" stroke="#0D2B6E" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Sky blue #29ABE2 — Accountability
const AccountabilityIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="value-icon-svg">
    <rect x="25" y="15" width="50" height="60" rx="6" fill="none" stroke="#29ABE2" strokeWidth="3"/>
    <line x1="35" y1="32" x2="65" y2="32" stroke="#29ABE2" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="35" y1="42" x2="65" y2="42" stroke="#29ABE2" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="35" y1="52" x2="55" y2="52" stroke="#29ABE2" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="68" cy="72" r="14" fill="#29ABE2"/>
    <path d="M62 72 l4 4 l8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// Orange #E8470A — Excellence
const ExcellenceIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="value-icon-svg">
    <polygon points="50,10 61,37 90,37 67,56 76,83 50,65 24,83 33,56 10,37 39,37" fill="none" stroke="#E8470A" strokeWidth="3" strokeLinejoin="round"/>
    <polygon points="50,22 58,40 78,40 63,52 69,70 50,58 31,70 37,52 22,40 42,40" fill="#E8470A" opacity="0.18"/>
  </svg>
);

// Olive green #5B6E2E — Integrity
const IntegrityIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="value-icon-svg">
    <path d="M50 12 L80 26 L80 50 C80 68 65 82 50 88 C35 82 20 68 20 50 L20 26 Z" fill="none" stroke="#5B6E2E" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M38 50 l8 8 l16-16" stroke="#5B6E2E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const icons = [CollaborationIcon, AccountabilityIcon, ExcellenceIcon, IntegrityIcon];

function Us() {
  const info = [
    {
      title: "Our Vision",
      subtitle: "A world in which anyone can create their future",
      description: "Our vision is to empower Africans with the skills and opportunities to shape the future they envision for themselves."
    },
    {
      title: "Our Mission",
      subtitle: "To develop the tech talent the world needs",
      description: "We are dedicated to building talent and creating opportunities through tech. As a learning accelerator, we equip high-potential job seekers with in-demand skills, bridging the gap in Africa's job market. Our commitment goes beyond education."
    }
  ];

  const values = [
    { description: "Collaboration" },
    { description: "Accountability" },
    { description: "Excellence" },
    { description: "Integrity" }
  ];

  return (
    <section className="visms-section">
      <div className="container visms-container">

        {/* ── Vision & Mission row ── */}
        <div className="row visms-top-row">
          {info.map((item, index) => (
            <div key={index} className="col-12 col-md-6 visms-info-col">
              <h3 className="visms-title mb-3">{item.title}</h3>
              <p className="visms-subtitle mb-3">{item.subtitle}</p>
              <p className="visms-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* ── Core Values row ── */}
        <div className="row visms-values-header-row">
          <div className="col-12 text-center">
            <h3 className="visms-values-heading">Our Core Values</h3>
          </div>
        </div>

        <div className="row visms-cards-row">
          {values.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="col-6 col-lg-3 visms-card-col">
                <div className="visms-card">
                  <div className="visms-card-icon">
                    <Icon />
                  </div>
                  <p className="visms-card-label">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Us;

import React, { useState } from 'react';
import '../../Styles/Journey.css';

const milestones = [
  {
    day: '03',
    month: 'Feb',
    year: '2020',
    title: 'Filled Our Biggest Class Yet – 225 Students',
    description:
      'More than 225 students enrolled for the February Software Development class in 2020. We were so excited to begin this journey with them.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    imageAlt: 'Large classroom full of students',
  },
  {
    day: '04',
    month: 'Sep',
    year: '2019',
    title: 'Launched Our Data Science Course',
    description:
      'We launched our very first masterclass on Supervised Learning, then shortly followed that up with a full Data Science Course launch at Metta Nairobi. Both were a huge success.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imageAlt: 'Data Science course launch',
  },
  {
    day: '12',
    month: 'Mar',
    year: '2018',
    title: 'Opened Our Doors to the First Cohort',
    description:
      'We welcomed our very first cohort of students — four passionate learners ready to reshape their futures through technology. A humble but historic beginning.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    imageAlt: 'First cohort of students',
  },
  {
    day: '20',
    month: 'Jun',
    year: '2021',
    title: 'Launched Cybersecurity & DevOps Programs',
    description:
      'Responding to market demand, we expanded our curriculum with Cybersecurity and DevOps Engineering tracks, empowering even more students to find their niche in tech.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
    imageAlt: 'Cybersecurity program launch',
  },
];

export default function Journey() {
  const [current, setCurrent] = useState(0);
  const total = milestones.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const slide = milestones[current];

  return (
    <section className="journey-section">
      <div className="container journey-container">

        {/* ── Heading ── */}
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="journey-heading">Our Journey + Milestones</h2>
          </div>
        </div>

        {/* ── Slider ── */}
        <div className="row justify-content-center align-items-center">

          {/* Prev button — hidden on mobile */}
          <div className="col-auto d-none d-md-flex">
            <button className="journey-nav-btn" onClick={prev} aria-label="Previous">
              ‹
            </button>
          </div>

          {/* Card */}
          <div className="col-12 col-md-11 col-lg-10">
            <div className="journey-card shadow-lg">

              {/* Left: text */}
              <div className="journey-card-text">
                <h3 className="journey-card-title">{slide.title}</h3>
                <p className="journey-card-desc">{slide.description}</p>
              </div>

              {/* Right: image with date badge */}
              <div className="journey-card-media">
                <div className="journey-date-badge">
                  <span className="journey-date-day-month">{slide.day} {slide.month}</span>
                  <span className="journey-date-year">{slide.year}</span>
                </div>
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="journey-card-img"
                />
              </div>

            </div>
          </div>

          {/* Next button — hidden on mobile */}
          <div className="col-auto d-none d-md-flex">
            <button className="journey-nav-btn" onClick={next} aria-label="Next">
              ›
            </button>
          </div>
        </div>

        {/* ── Pagination dots (mobile) / counter (desktop) ── */}
        <div className="row justify-content-center mt-4">
          <div className="col-auto">
            {/* Dots — mobile only */}
            <div className="journey-dots d-flex d-md-none">
              {milestones.map((_, i) => (
                <button
                  key={i}
                  className={`journey-dot${i === current ? ' active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

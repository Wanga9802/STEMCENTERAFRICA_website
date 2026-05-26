import React, { useState } from 'react';
import '../Styles/Faqsection.css';
import faqBannerImg from '../assets/faqs.jpg';

const defaultFaqs = [
  {
    question: 'Q: What is STEM Center Africa?',
    answer:
      'STEM Center Africa is a nonprofit organization based at Edenview Academy in Oyugis, Kenya. We offer mathematics, science, technology, and engineering programs to inspire the next generation of innovators.',
  },
  {
    question: 'Q: Who can join your programs?',
    answer:
      'Our programs are open to learners of all ages — from primary school students to young adults. We believe every curious mind deserves access to quality STEM education.',
  },
  {
    question: 'Q: Do you offer remote learning?',
    answer:
      'Yes! We offer both in-person and remote learning options to ensure our programs are accessible to students regardless of their location.',
  },
  {
    question: 'Q: How can I support STEM Center Africa?',
    answer:
      'You can support us by donating, partnering with us as an organization, or volunteering your time and expertise. Visit our Donate page to learn more.',
  },
  {
    question: 'Q: Will students receive a certificate upon completion?',
    answer:
      'Yes. Students who complete our programs receive a certificate of participation recognizing their achievement and the skills they have gained.',
  },
  {
    question: 'Q: How do I enroll my child?',
    answer:
      'You can reach out to us directly through our Contact page or visit Edenview Academy in Oyugis, Kenya. Our team will guide you through the enrollment process.',
  },
];

export default function FaqSection({ faqs, bannerImage, bannerTitle }) {
  const items      = faqs        || defaultFaqs;
  const imgSrc     = bannerImage || faqBannerImg;
  const heroTitle  = bannerTitle || 'FAQs';

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ── Hero Banner ── */}
      <div className="faq-hero" aria-label="FAQs page banner">
        <img
          className="faq-hero__img"
          src={imgSrc}
          alt="Students collaborating at STEM Center Africa"
        />
        <div className="faq-hero__overlay" aria-hidden="true" />
        <div className="faq-hero__content">
          <h1 className="faq-hero__title">{heroTitle}</h1>
        </div>
      </div>

      {/* ── FAQ Accordion ── */}
      <section className="faq-section" aria-label="Frequently asked questions">
        <div className="faq-list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`faq-item${openIndex === index ? ' open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-toggle" aria-hidden="true">+</span>
              </button>

              <div className="faq-answer" aria-hidden={openIndex !== index}>
                <div className="faq-answer-inner">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

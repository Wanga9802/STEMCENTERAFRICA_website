import { useState, useEffect } from "react";
import '../../Styles/Difference.css';
import iosAppImage from '../../assets/iOS app development.jpg';
import roboticsImage from '../../assets/Robotics.jpg';
import arduinoImage from '../../assets/ARDUINO.jpg';
import computerImage from '../../assets/computers.jpg';
import pythonImage from '../../assets/python.jpg';
import scratchImage from '../../assets/scratch.jpg';

const programs = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description:
      "Master web development with our comprehensive bootcamp and get career-ready. Learn HTML, CSS, JavaScript, and modern frameworks.",
    image: iosAppImage,
    icon: "☁️",
    accent: "#ff2d78",
  },
  {
    id: 2,
    title: "Robotics & Embedded Systems",
    description:
      "Build intelligent robots and embedded systems with hands-on projects using microcontrollers, sensors, and motor control.",
    image: roboticsImage,
    icon: "💻",
    accent: "#1B2A6B",
  },
  {
    id: 3,
    title: "Arduino & IoT Development",
    description:
      "Learn to build interactive electronic projects with Arduino and explore the world of Internet of Things (IoT).",
    image: arduinoImage,
    icon: "�",
    accent: "#0F1A45",
  },
  {
    id: 4,
    title: "Introduction to Basic Computer Skills",
    description:
      "Build confidence with everyday software: master Word, Excel, PowerPoint, email, and basic digital navigation for school, office, and career success",
    image: computerImage,
    icon: "📊",
    accent: "#7B8FC0",
  },
  {
    id: 5,
    title: "Python Programming Bootcamp",
    description:
      "A practical Python bootcamp for beginners: write clean code, automate workflows, and build real-world projects using Python’s most popular tools and frameworks.",
    image: pythonImage,
    icon: "🔐",
    accent: "#ea580c",
  },
  {
    id: 6,
    title: "Scratch Programming for Kids",
    description:
      "Introduce young learners to programming concepts through fun, interactive projects. Develop problem-solving skills and creativity while building their own games and animations.",
    image: scratchImage,
    icon: "🎨",
    accent: "#4a5568",
  },
];
 

 
const DEFAULT_CARDS_PER_PAGE = 3;
 
 export default function Difference() {
   const [page, setPage] = useState(0);
   const [cardsPerPage, setCardsPerPage] = useState(DEFAULT_CARDS_PER_PAGE);
 
   useEffect(() => {
     const updateCardsPerPage = () => {
       setCardsPerPage(window.innerWidth <= 640 ? 1 : DEFAULT_CARDS_PER_PAGE);
     };
 
     updateCardsPerPage();
     window.addEventListener('resize', updateCardsPerPage);
     return () => window.removeEventListener('resize', updateCardsPerPage);
   }, []);
 
   const totalPages = Math.max(1, Math.ceil(programs.length / cardsPerPage));
   const visible = programs.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage);
 
   useEffect(() => {
     if (page >= totalPages) {
       setPage(totalPages - 1);
     }
   }, [page, totalPages]);
 
  return (
    <>
      <section className="ep-section">
        <div className="ep-container">
          {/* Header */}
          <div className="ep-header">
            <h2 className="epi-title">
              What makes Us Different
            </h2>
           
          </div>
 
          {/* Carousel with side arrows */}
          <div className="ep-carousel-outer">
            <button
              className="ep-nav-btn left"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous"
            >
              ‹
            </button>
 
            <div className="epi-grid">
              {visible.map((program, idx) => {
                const palette = ['#ff2d78', '#1B2A6B', '#0F1A45', '#7B8FC0', '#ea580c', '#4a5568'];
                const color = program.accent || palette[(program.id - 1) % palette.length];
                return (
                <div
                  className="epi-card shadow-lg"
                  key={program.id}
                  style={{ borderLeft: `6px solid ${color}` }}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="ep-card-img"
                  />
                  <div className="ep-card-body">
                    <h3 className="epi-card-title">{program.title}</h3>
                    <p className="ep-card-desc">{program.description}</p>
                  </div>
                
                </div>
                );
              })}
            </div>
 
            <div className="ep-pagination-dots">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`ep-dot${index === page ? ' active' : ''}`}
                  onClick={() => setPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                  type="button"
                />
              ))}
            </div>
 
            <button
              className="ep-nav-btn right"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              aria-label="Next"
            >
              ›
            </button>
          </div>
 
            {/* Ongoing Intakes */}
         
        
        </div>
      </section>
    </>
  );
}
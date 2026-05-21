import { useRef, useState } from "react";
import '../../Styles/Tour.css';

const alumni = [
  {
    id: 1,
   
    thumbnail: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=700&q=80",
    videoUrl: "https://youtu.be/rlW4mzzmoes",

  },

];

function VideoCard({ person, onPlay }) {
  const handlePlayClick = () => {
    if (person.videoUrl && person.videoUrl !== "#") {
      window.open(person.videoUrl, '_blank');
    }
  };

  return (
    <div className="alumnii-video-card">
      <div className="alumnii-card-thumbnail" style={{ backgroundImage: `url(${person.thumbnail})` }}>
        <button
          type="button"
          className="alumnii-play-button"
          onClick={handlePlayClick}
          aria-label="Play video"
        >
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <polygon points="6,3 20,12 6,21" />
          </svg>
        </button>
      </div>
      <div className="alumnii-card-content">
        <h3>{person.name}</h3>
        <p className="alumnii-card-role">{person.role}</p>
        <p className="alumnii-card-quote">"{person.quote}"</p>
      </div>
    </div>
  );
}

export default function Tour() {
  const [playing, setPlaying] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
 
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
 
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
 
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && activeIndex < alumni.length - 1) setActiveIndex((i) => i + 1);
      if (diff < 0 && activeIndex > 0) setActiveIndex((i) => i - 1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
  

     <section className="alumnii-section">
        <div className="alumnii-container">
          {/* Header */}
        
 
          {/* ── Desktop grid ── */}
          <div className="alumnii-desktop-grid">
            {alumni.map((person) => (
              <VideoCard
                key={person.id}
                person={person}
                onPlay={() => setPlaying(person.id)}
              />
            ))}
          </div>
 
          {/* ── Mobile carousel ── */}
          <div
            className="alumnii-carousel-track"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="alumnii-carousel-inner"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {alumni.map((person) => (
                <div className="alumnii-carousel-slide" key={person.id}>
                  <VideoCard
                    person={person}
                    onPlay={() => setPlaying(person.id)}
                  />
                </div>
              ))}
            </div>
          </div>
 
          {/* Pagination dots (mobile only) */}
          <div className="alumnii-dots" role="tablist" aria-label="Alumni slides">
            {alumni.map((_, i) => (
              <button
                key={i}
                className={`alumnii-dot${activeIndex === i ? " active" : ""}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={activeIndex === i}
                role="tab"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

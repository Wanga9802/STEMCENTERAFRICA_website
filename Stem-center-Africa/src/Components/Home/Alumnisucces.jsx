import { useRef, useState } from "react";
import '../../Styles/Alumnisuccess.css';

const alumni = [
  {
    id: 1,
   
    thumbnail: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=700&q=80",
    videoUrl: "https://youtu.be/rlW4mzzmoes",

  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=700&q=80",
    videoUrl: "#",
  },
];

function VideoCard({ person, onPlay }) {
  const handlePlayClick = () => {
    if (person.videoUrl && person.videoUrl !== "#") {
      window.open(person.videoUrl, '_blank');
    }
  };

  return (
    <div className="alumni-video-card">
      <div className="alumni-card-thumbnail" style={{ backgroundImage: `url(${person.thumbnail})` }}>
        <button
          type="button"
          className="alumni-play-button"
          onClick={handlePlayClick}
          aria-label="Play video"
        >
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <polygon points="6,3 20,12 6,21" />
          </svg>
        </button>
      </div>
      <div className="alumni-card-content">
        <h3>{person.name}</h3>
        <p className="alumni-card-role">{person.role}</p>
        <p className="alumni-card-quote">"{person.quote}"</p>
      </div>
    </div>
  );
}

export default function AlumniSuccessStories() {
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
  

     <section className="alumni-section">
        <div className="alumni-container">
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="alumni-title">Alumni Success Stories</h2>
          </div>
 
          {/* ── Desktop grid ── */}
          <div className="alumni-desktop-grid">
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
            className="alumni-carousel-track"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="alumni-carousel-inner"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {alumni.map((person) => (
                <div className="alumni-carousel-slide" key={person.id}>
                  <VideoCard
                    person={person}
                    onPlay={() => setPlaying(person.id)}
                  />
                </div>
              ))}
            </div>
          </div>
 
          {/* Pagination dots (mobile only) */}
          <div className="alumni-dots" role="tablist" aria-label="Alumni slides">
            {alumni.map((_, i) => (
              <button
                key={i}
                className={`alumni-dot${activeIndex === i ? " active" : ""}`}
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
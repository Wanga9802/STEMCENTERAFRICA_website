import { Link } from 'react-router-dom';
import events from '../data/eventsData';
import '../Styles/Events.css';

function formatEventDate(dateString) {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function Events() {
  return (
    <main className="events-page">
      <section className="events-hero">
        <div className="events-hero-content">
          <p className="eyebrow">Events</p>
          <h1>Explore upcoming STEM Center events</h1>
          <p className="events-hero-copy">
            Join our latest workshops, graduations, and community gatherings. Click an event card for full details and registration.
          </p>
        </div>
      </section>

      <section className="container events-grid">
        {events.map((event) => (
          <article key={event.id} className="event-card">
            <div
              className="event-card-image"
              style={{ backgroundImage: `url(${event.imageUrl})` }}
            />
            <div className="event-card-body">
              <span className="event-card-date">{formatEventDate(event.startDate)}</span>
              <h2>{event.title}</h2>
              <p className="event-card-meta">{event.location}</p>
              <p className="event-card-meta">
                {formatEventDate(event.startDate)} · {event.time}
              </p>
              <Link className="event-card-button" to={`/events/${event.id}`}>
                View More
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Events;

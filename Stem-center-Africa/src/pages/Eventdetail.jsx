import { useParams, Link } from 'react-router-dom';
import events from '../data/eventsData';
import '../Styles/Events.css';

function formatEventDate(startDate, endDate) {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const start = new Date(startDate).toLocaleDateString(undefined, options);
  const end = new Date(endDate).toLocaleDateString(undefined, options);
  return start === end ? start : `${start} – ${end}`;
}

function truncateText(text, maxChars) {
  if (text.length <= maxChars) return text;
  return `${text.slice(0, maxChars).trim()}...`;
}

function EventDetail() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === eventId);

  if (!event) {
    return (
      <div className="event-detail-notfound container">
        <h2>Event not found</h2>
        <p>The event you are looking for does not exist or may have been moved.</p>
        <Link to="/events" className="button-secondary">
          Back to Events
        </Link>
      </div>
    );
  }

  const heroExcerpt = truncateText(event.excerpt, 180);

  return (
    <main className="event-detail-page">
      <section className="event-detail-hero">
        <div className="event-detail-hero-overlay" />
        <div className="container event-detail-hero-content">
          <div className="event-detail-hero-date">{formatEventDate(event.startDate, event.endDate)}</div>
          <h1>{event.title}</h1>
          <p>{heroExcerpt}</p>
        </div>
      </section>

      <section className="event-detail-body container">
        <div className="event-detail-grid">
          <div className="event-detail-left">
            <div className="event-detail-box">
              <h2>Event Details</h2>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>
                <strong>Date:</strong> {formatEventDate(event.startDate, event.endDate)}
              </p>
              <p>
                <strong>Time:</strong> {event.time}
              </p>
              {event.requiresRegistration && (
                <a
                  className="button-primary"
                  href={event.registerUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Register Now
                </a>
              )}
              <a
                className="button-secondary"
                href={event.registerUrl}
                target="_blank"
                rel="noreferrer"
              >
                View on Luma
              </a>
            </div>
          </div>

          <div className="event-detail-right">
            <div className="event-detail-description">
              <h2>About the Event</h2>
              <p>{event.description}</p>
            </div>
            <div
              className="event-detail-image"
              style={{ backgroundImage: `url(${event.imageUrl})` }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default EventDetail;

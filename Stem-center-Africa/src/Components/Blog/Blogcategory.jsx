import "../../Styles/Blogcategory.css";

const posts = [
  {
    category: "Python",
   
    title: "10 Python Projects That Will Actually Get You Hired",
    subtitle: "Stop tutorial hell — build real projects with clear outcomes, practical skills, and portfolio-ready results with real application to help students build faster and learn much better with modern equipemnt.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
  },
  {
    category: "Web Development",
    
    title: "CSS Grid vs Flexbox: When to Use Which (With Real Examples)",
    subtitle: "Learn when each layout method shines so you can build responsive pages that look great on every screen.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    category: "Scratch",
    title: "How 12-Year-Old Amara Built Her First Video Game in a Weekend",
    subtitle: "A story of curiosity, blocks, and pure joy that shows how young learners can create games from scratch.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
  },
  {
    category: "Tinkering",

    title: "We Gave 20 Kids Cardboard, Wires & No Instructions — Here's What Happened",
    subtitle: "Open-ended making teaches problem solving, creativity, and confidence through hands-on experimentation.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
  },
  {
    category: "Arduino & IoT",
  
    title: "Build a Smart Plant Watering System for Under $15",
    subtitle: "Mix sensors, code, and low-cost hardware to create a project that helps plants thrive with less effort.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    category: "Basic Computer",
   
    title: "The One File Organisation System You'll Actually Stick To",
    subtitle: "A practical system for learners that keeps files organised, reduces clutter, and saves valuable time.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
  },
  {
    category: "Community Stories",
   
    title: "From Street Vendor to Software Developer: James's Two-Year Journey",
    subtitle: "A powerful story of resilience, ambition, and how access to STEM education changes life trajectories.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  },
  {
    category: "Career Readiness",
    title: "The Portfolio That Landed 3 Offers in One Month — Breakdown Inside",
    subtitle: "Discover the portfolio changes that make you stand out in interviews and impress hiring managers.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
];

export default function BlogCategoryCards() {
  return (
    <section className="blog-section">

 

      {/* Cards grid */}
      <div className="blog-cards-grid">
        {posts.map((post, i) => (
          <article key={i} className="blog-card">

            {/* Image */}
            <div className="blog-card__image-wrap">
              <img
                className="blog-card__img"
                src={post.image}
                alt={post.title}
              />
            </div>

            {/* Body */}
            <div className="blog-card__body">
              <p className="blog-card__category">{post.category}</p>
              <h3 className="blog-card__title">{post.title}</h3>
              <p className="blog-card__subtitle">{post.subtitle}</p>


              {/* Footer */}
              <div className="blog-card__footer">
                <button className="blog-card__read-btn">
                  Read more
                </button>
              </div>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
}

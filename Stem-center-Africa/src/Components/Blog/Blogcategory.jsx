import { Link } from 'react-router-dom';
import '../../Styles/Blogcategory.css';
import { BLOG_POSTS } from '../../data/blogPosts';

const posts = BLOG_POSTS;

export default function BlogCategoryCards() {
  return (
    <section className="blog-section">
      <div className="blog-cards-grid">
        {posts.map((post) => (
          <article key={post.slug} className="blog-card">
            <div className="blog-card__image-wrap">
              <img className="blog-card__img" src={post.image} alt={post.title} />
            </div>

            <div className="blog-card__body">
              <p className="blog-card__category">{post.category}</p>
              <h3 className="blog-card__title">{post.title}</h3>
              <p className="blog-card__subtitle">{post.subtitle}</p>

              <div className="blog-card__footer">
                <Link to={`/blog/${post.slug}`} className="blog-card__read-btn">
                  Read more
                </Link>
                <span className="blog-card__tag">{post.tag}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

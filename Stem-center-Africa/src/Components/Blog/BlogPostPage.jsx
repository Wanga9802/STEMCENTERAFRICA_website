import { Link, useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../../data/blogPosts';
import '../../Styles/BlogPostPage.css';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="post-page post-page--not-found">
        <div className="post-page__not-found">
          <h1>Post not found</h1>
          <p>We could not find the article you were looking for.</p>
          <Link to="/blog" className="post-page__back-link">
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  const recentPosts = BLOG_POSTS.filter((item) => item.slug !== slug).slice(0, 4);

  return (
    <main className="post-page">
      <section className="post-hero">
        <div className="post-hero__inner">
          <p className="post-hero__category">{post.category}</p>
          <h1 className="post-hero__title">{post.title}</h1>
          <p className="post-hero__subtitle">{post.subtitle}</p>
          <div className="post-hero__meta">
            <span className="post-hero__author">{post.author}</span>
            <span className="post-hero__date">{post.date}</span>
          </div>
        </div>
      </section>

      <div className="post-layout">
        <article className="post-main">
          <div className="post-main__image-wrap">
            <img className="post-main__image" src={post.image} alt={post.title} />
          </div>

          <div className="post-main__content">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>

        <aside className="post-sidebar">
          <div className="post-sidebar__card">
            <h2>Recent Posts</h2>
            {recentPosts.map((item) => (
              <Link key={item.slug} to={`/blog/${item.slug}`} className="recent-post">
                <img className="recent-post__image" src={item.image} alt={item.title} />
                <div className="recent-post__text">
                  <span className="recent-post__category">{item.category}</span>
                  <p className="recent-post__title">{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}

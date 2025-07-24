import styles from './blog.module.css';
import Link from 'next/link';

export default function BlogPage() {

  const posts = [
    {
      title: '5 Common Website Mistakes Local Businesses Make',
      excerpt: 'Learn how to avoid the top website pitfalls that can turn customers away...',
      slug: 'website-mistakes',
      date: '2025-07-20',
      image: '/images/hero.webp',
    },
    {
      title: 'The Power of a Fast Website',
      excerpt: 'Speed isn’t just nice — it affects your SEO, sales, and user experience. Here’s how...',
      slug: 'website-speed',
      date: '2025-07-15',
      image: '/images/aboutImage.webp',
    },
    {
      title: 'The Power of a Fast Website',
      excerpt: 'Speed isn’t just nice — it affects your SEO, sales, and user experience. Here’s how...',
      slug: 'website-speed',
      date: '2025-07-15',
      image: '/images/hero.webp',
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Intro Section */}
        <section className={styles.textSplit}>
          <div>
            <h1 className={styles.headline}>
              Our <span className={styles.gradientText}>Insights</span>
            </h1>
          </div>
          <div className={styles.divider} />
          <p className={styles.subtext}>
            Tips, updates, and web development insights to help your business grow online.
          </p>
        </section>

        {/* Blog Grid */}
        <section className={styles.grid}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
              <img src={post.image} alt={post.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <span className={styles.cardDate}>{post.date}</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}

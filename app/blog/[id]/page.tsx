import styles from './post.module.css';

export default function BlogPost() {
  return (
    <main className={styles.main}>
      <article className={styles.post}>
        <header className={styles.header}>
          <h1 className={styles.title}>5 Common Website Mistakes Local Businesses Make</h1>
          <p className={styles.date}>Published on July 20, 2025</p>
          <div className={styles.divider}></div>
          <img
            src="/images/hero.webp"
            alt="Website Mistakes"
            className={styles.featuredImage}
          />
        </header>

        <section className={styles.content}>
          <p>
            A website can either drive growth or hurt your brand. In this post, we explore common mistakes that small businesses make when building their online presence — and how to fix them.
          </p>
          <p>
            1. **Slow load times**: If your website takes more than 3 seconds to load, most users will bounce. Use proper image optimization and caching strategies.
          </p>
          <p>
            2. **No clear call to action (CTA)**: Visitors should know what to do — whether it's calling, booking, or buying.
          </p>
          <p>
            3. **Lack of mobile responsiveness**: With over 70% of users browsing on mobile, responsive design is non-negotiable.
          </p>
          <p>
            ...and more insights to help your business grow.
          </p>
        </section>
      </article>
    </main>
  );
}

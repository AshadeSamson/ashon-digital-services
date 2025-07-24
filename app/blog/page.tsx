import styles from './blog.module.css';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { allPostsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';



type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  mainImage?: { asset: { url: string } };
  author?: { name: string; image?: { asset: { url: string } } };
  categories?: { title: string }[];
};



export default async function BlogPage() {

  const posts: Post[] = await client.fetch(allPostsQuery);

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
            <Link key={post.slug.current} href={`/blog/${post.slug.current}`} className={styles.card}>
              <img src={post.mainImage?.asset.url} alt={post.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <span className={styles.cardDate}>{post.publishedAt.split("T")[0]}</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}

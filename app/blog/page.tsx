import styles from './blog.module.css';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { paginatedPostsQuery, totalPostsQuery } from '@/sanity/lib/queries';
import { intlDateFormat } from '../_lib/dateFormat';

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

type Props = {
  searchParams?:  Promise<{ page?: string }>;
};

const POSTS_PER_PAGE = 12;


export async function generateMetadata() {
  return {
    title: 'Blog | Insights and Articles on Web Design, Web Development, Tech, and More',
    description: 'Discover expert insights on web design, web development & mobile app creation tailored for businesses in Nigeria, Africa, UK & more. Browse guides, tips & case studies',
    keywords: 'blog, web development, insights, tips, updates, web design, mobile app development, technology, business growth, SEO, digital marketing, web design trends, web development trends, mobile app trends, business tips, digital transformation',
  };
}

export default async function BlogPage({ searchParams }: Props) {
  const {page} = await searchParams || {};
  const currentPage = Number(page ?? '1');
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const posts: Post[] = await client.fetch(paginatedPostsQuery,{start, end});
  const totalPosts: number = await client.fetch(totalPostsQuery);
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

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
            Tips, Guides, Updates, and Insights on Web Design & Development to Help Your Business Grow Online.
          </p>
        </section>

        {/* Blog Grid */}
        <section className={styles.grid}>
          {posts.map(post => (
            <Link key={post._id} href={`/blog/${post.slug.current}`} className={styles.card}>
              <img src={post.mainImage?.asset.url} alt={post.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <span className={styles.cardDate}>{intlDateFormat(post.publishedAt.split("T")[0])}</span>
              </div>
            </Link>
          ))}
        </section>

        {/* Pagination Controls */}
        <section className={styles.pagination}>
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNum = i + 1;
            return (
              <Link
                key={pageNum}
                href={`/blog?page=${pageNum}`}
                className={`${styles.pageLink} ${currentPage === pageNum ? styles.activePage : ''}`}
              >
                {pageNum}
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}

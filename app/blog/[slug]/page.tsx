import styles from './post.module.css';
import { client } from '@/sanity/lib/client';
import { singlePostQuery } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/sanity/lib/portableText';
import Link from 'next/link';


type Props = {
  params: Promise<{ slug: string }>;
};


export default async function BlogPost({ params }: Props) {

  const { slug } = await params;


  const post = await client.fetch(singlePostQuery, { slug });


  return (
    <main className={styles.main}>
      <article className={styles.post}>
        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.date}>{`Published on ${post.publishedAt.split("T")[0]}`}</p>
          <div className={styles.divider}></div>
          <img
            src={post.mainImage?.asset.url}
            alt={post.title}
            className={styles.featuredImage}
          />
        </header>

        <section className={styles.content}>
          <PortableText value={post.body} components={portableTextComponents} />
        </section>

        <div className={styles.backLinkWrapper}>
          <Link href="/blog" className={styles.backLink}>
            ← Back to all blogs
          </Link>
        </div>
      </article>


    </main>
  );
}

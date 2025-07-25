export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      asset -> { url }
    },
    author -> {
      name,
      image {
        asset -> { url }
      }
    },
    categories[] -> {
      title
    }
  }
`;


export const paginatedPostsQuery = `
  *[_type == "post"] 
    | order(publishedAt desc) 
    [$start...$end] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        asset -> { url }
      },
      author -> {
        name,
        image {
          asset -> { url }
        }
      },
      categories[] -> {
        title
      }
    }
`;


export const totalPostsQuery = `
  count(*[_type == "post"])
`;



export const singlePostQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset -> { url }
    },
    author -> {
      name,
      image {
        asset -> { url }
      }
    },
    categories[] -> {
      title
    },
    body
  }
`;

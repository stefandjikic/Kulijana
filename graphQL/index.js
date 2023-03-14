import {
  resolveCategories,
  resolveCategoriesForRelatedArticles,
} from "@/utils/helpers";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export const getArticles = async () => {
  const query = gql`
    query AllArticles {
      articlesConnection(first: 2, skip: 0) {
        edges {
          node {
            slug
            title
            excerpt
            createdAt
            articleImage {
              url
            }
            category {
              name
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
        }
      }
    }
  `;
  const { articlesConnection: { edges = [] } = {} } = await request(
    graphqlAPI,
    query
  );
  return edges;
};

export const getHomePageArticles = async () => {
  const query = gql`
    query HomePageQuery {
      heroArticles: articles(
        last: 4
        where: {
          NOT: {
            OR: [{ category: { slug: "da-li-ste-znali" } }, { featured: true }]
          }
        }
      ) {
        id
        slug
        title
        category {
          name
          slug
        }
        excerpt
        featured
        articleImage {
          url
        }
        createdAt
      }
      authorChoice: articles(last: 2, where: { authorChoice: true }) {
        id
        slug
        title
        createdAt
        articleImage {
          url
        }
        category {
          name
          slug
        }
      }
      scienceAndTech: articles(
        last: 2
        where: { category: { slug: "nauka-i-tehnologija" } }
      ) {
        id
        slug
        title
        category {
          name
          slug
        }
        excerpt
        featured
        articleImage {
          url
        }
        createdAt
      }
      it: articles(last: 4, where: { category: { slug: "it" } }) {
        id
        slug
        title
        category {
          name
          slug
        }
        excerpt
        featured
        articleImage {
          url
        }
        createdAt
      }
      biz: articles(last: 2, where: { category: { slug: "biz" } }) {
        id
        slug
        title
        category {
          name
          slug
        }
        excerpt
        featured
        articleImage {
          url
        }
        createdAt
      }
      culture: articles(
        last: 4
        where: {
          category: {
            OR: [
              { slug: "kultura" }
              { slug: "film" }
              { slug: "muzika" }
              { slug: "umetnost" }
            ]
          }
        }
      ) {
        id
        slug
        title
        category {
          name
          slug
        }
        excerpt
        featured
        articleImage {
          url
        }
        createdAt
      }
      funFact: articles(
        last: 1
        where: { category: { slug: "da-li-ste-znali" } }
      ) {
        id
        slug
        title
        category {
          name
          slug
        }
        excerpt
        featured
        articleImage {
          url
        }
        createdAt
      }
      interestingFacts: articles(
        last: 8
        where: {
          OR: [
            { category: { slug: "zanimljivosti" } }
            { category: { slug: "istorija" } }
            { category: { slug: "drustvo" } }
            { category: { slug: "svet-oko-nas" } }
          ]
        }
      ) {
        id
        slug
        title
        category {
          name
          slug
        }
        excerpt
        featured
        articleImage {
          url
        }
        createdAt
      }
      magazine: articles(
        last: 2
        where: {
          category: {
            OR: [
              { slug: "magazin" }
              { slug: "lifestyle" }
              { slug: "trening-kutak" }
            ]
          }
        }
      ) {
        id
        slug
        title
        category {
          name
          slug
        }
        excerpt
        featured
        articleImage {
          url
        }
        createdAt
      }
    }
  `;
  const response = await request(graphqlAPI, query);
  return response;
};

export const getFeaturedArticles = async () => {
  const query = gql`
    query FeaturedArticles {
      articles(last: 5, where: { featured: true }) {
        id
        category {
          name
          slug
        }
        articleImage {
          url
        }
        createdAt
        excerpt
        title
        slug
        featured
      }
    }
  `;
  const { articles = [] } = await request(graphqlAPI, query);
  return articles;
};

export const getAuthorChoiceArticles = async () => {
  const query = gql`
    query AuthorChoice {
      articles(last: 2, where: { authorChoice: true }) {
        id
        slug
        title
        createdAt
        articleImage {
          url
        }
        category {
          name
        }
      }
    }
  `;
  const { articles = [] } = await request(graphqlAPI, query);
  return articles;
};

export const getCategoriesBySlug = async () => {
  const query = gql`
    query GetCategories {
      categories(last: 20) {
        id
        slug
        name
        relatedCategories {
          id
          name
          slug
        }
      }
    }
  `;
  const response = await request(graphqlAPI, query);
  return response;
};

export const getArticlesByCategory = async (categorySlug) => {
  // const resolveCategories = () => {
  //   switch (categorySlug) {
  //     case "zanimljivosti":
  //       return '{OR: [{slug: $categorySlug}, {slug: "istorija"}, {slug: "drustvo"}, {slug: "svet-oko-nas"}]}';
  //     case "kultura":
  //       return '{OR: [{slug: $categorySlug}, {slug: "film"}, {slug: "muzika"}, {slug: "umetnost"}]}';
  //     case "magazin":
  //       return '{OR: [{slug: $categorySlug}, {slug: "lifestyle"}, {slug: "trening-kutak"}]}';
  //     default:
  //       return "{ slug: $categorySlug }";
  //   }
  // };

  const query = gql`
    query ArticlesByCategory($categorySlug: String = "zanimljivosti") {
      articlesConnection(where: { category: ${resolveCategories(
        categorySlug
      )} }, last: 10) {
        edges {
          node {
            id
            slug
            title
            createdAt
            featured
            authorChoice
            excerpt
            author {
              name
            }
            articleImage {
              url
            }
            category {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const { articlesConnection: { edges = [] } = {} } = await request(
    graphqlAPI,
    query,
    { categorySlug }
  );
  return edges;
};

export const getAllSlugs = async () => {
  const query = `
  query AllSlugs {
    articles(last: 1000) {
      slug
      category{
        slug
      }
    }
  }
  `;
  const { articles } = await request(graphqlAPI, query);
  return articles;
};

export const getArticleDetails = async (slug = "") => {
  const query = `
  query ArticleDetails($slug: String!) {
    article(where: {slug: $slug}) {
      id
      articleImage {
        url
      }
      author {
        name
        createdAt
      }
      category {
        name
        slug
      }
      excerpt
      title
      slug
      createdAt
      content {
        html
      }
    }
  }
  `;
  const response = await request(graphqlAPI, query, { slug });
  return response;
};

export const getRelatedArticles = async (slug = "", category = "") => {
  const query = `
  query RelatedArticles($slug: String!, $category: String!) {
    articles(where: {slug_not: $slug, AND: {category: ${resolveCategoriesForRelatedArticles(
      category
    )}}}, last: 4) {
      id
      slug
      title
      articleImage {
        url
      }
      category {
        name
        slug
      }
    }
  }
  `;
  const response = await request(graphqlAPI, query, { slug, category });
  return response;
};

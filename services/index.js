import { request, gql } from 'graphql-request';

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
  `
  const { articlesConnection: { edges = [] } = {} } = await request(graphqlAPI, query);
  return edges;
}

export const getHomePageArticles = async () => {
  const query = gql`
  query HomePageQuery {
    heroArticles: articles(
      last: 4
    ) {
      id
      slug
      title
      category {
        name
      }
      excerpt
      featured
      articleImage {
        url
      }
      createdAt
    }
    featuredArticles: articles(last: 4, where: {featured: true}) {
      id
      slug
      title
      category {
        name
      }
      excerpt
      featured
      articleImage {
        url
      }
      createdAt
    }
    scienceAndTech: articles(
      last: 2
      where: {category: {slug: "nauka-i-tehnologija"}}
    ) {
      id
      slug
      title
      category {
        name
      }
      excerpt
      featured
      articleImage {
        url
      }
      createdAt
    }
    it: articles(last: 4, where: {category: {slug: "it"}}) {
      id
      slug
      title
      category {
        name
      }
      excerpt
      featured
      articleImage {
        url
      }
      createdAt
    }
    biz: articles(last: 2, where: {category: {slug: "biz"}}) {
      id
      slug
      title
      category {
        name
      }
      excerpt
      featured
      articleImage {
        url
      }
      createdAt
    }
    culture: articles(last: 4, where: {category: {slug: "kultura"}}) {
      id
      slug
      title
      category {
        name
      }
      excerpt
      featured
      articleImage {
        url
      }
      createdAt
    }
    funFact: articles(last: 1, where: {category: {slug: "da-li-ste-znali"}}) {
      id
      slug
      title
      category {
        name
      }
      excerpt
      featured
      articleImage {
        url
      }
      createdAt
    }
    interestingFacts: articles(last: 8, where: {category: {slug: "zanimljivosti"}}) {
      id
      slug
      title
      category {
        name
      }
      excerpt
      featured
      articleImage {
        url
      }
      createdAt
    }
    magazine: articles(last: 2, where: {category: {slug: "magazin"}}) {
      id
      slug
      title
      category {
        name
      }
      excerpt
      featured
      articleImage {
        url
      }
      createdAt
    }
  }
  `
  const response = await request(graphqlAPI, query);
  return response;
}
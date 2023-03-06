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
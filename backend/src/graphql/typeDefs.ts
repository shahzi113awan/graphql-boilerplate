import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Listing {
    id: ID!
    title: String!
    image: String!
    price: Int!
  }
  input ListingI {
    id: ID!
    title: String!
    image: String!
    price: Int!
  }

  type Query {
    listings: [Listing!]!
  }

  type Mutation {
    deleteListing(id: ID!): Listing!
    createListing(input:ListingI!):Boolean!
  }
`;

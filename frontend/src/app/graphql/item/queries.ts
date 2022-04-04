import { gql } from "@apollo/client";

export const GET_ITEMS_BY_CATEGORY = gql`
  query getItemsByCategory($input: String!) {
    getItemsByCategory(category: $input) {
      _id
      name
      information
      img
      category
    }
  }
`;
export const GET_ALL_ITEMS = gql`
  query getAllItems {
    getAllItems {
      name
      _id
      img
      information
      category
    }
  }
`;

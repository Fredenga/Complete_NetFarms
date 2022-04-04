import { gql } from "@apollo/client";

export const CREATE_ITEM = gql`
  mutation createItem($input: CreateItem!) {
    createItem(createItem: $input) {
      name
      information
      category
      img
    }
  }
`;

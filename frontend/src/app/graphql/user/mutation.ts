import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(loginInput: $input) {
      access_token
      user {
        email
        _id
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(createUserInput: $input) {
      email
      _id
    }
  }
`;

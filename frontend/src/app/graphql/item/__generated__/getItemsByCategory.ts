/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getItemsByCategory
// ====================================================

export interface getItemsByCategory_getItemsByCategory {
  __typename: "Item";
  _id: string;
  name: string;
  information: string;
  img: string;
  category: string;
}

export interface getItemsByCategory {
  getItemsByCategory: getItemsByCategory_getItemsByCategory[];
}

export interface getItemsByCategoryVariables {
  input: string;
}

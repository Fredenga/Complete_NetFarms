import apolloClient from "../../apollo/apolloClient";
import { CREATE_ITEM } from "../item/mutations";
import { GET_ALL_ITEMS, GET_ITEMS_BY_CATEGORY } from "../item/queries";

export interface CreateItem {
  name: string;
  img: string;
  information: string;
  category: string;
}

class ItemService {
  async getItemsByCategory(category: string) {
    try {
      const response = await apolloClient.query({
        query: GET_ITEMS_BY_CATEGORY,
        variables: { input: category },
      });
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }
  async getAllItems() {
    try {
      const response = await apolloClient.query({
        query: GET_ALL_ITEMS,
      });
      return response?.data;
    } catch (error) {
      console.error(error);
    }
  }
  async createItem(createItem: CreateItem) {
    try {
      const response = await apolloClient.mutate({
        mutation: CREATE_ITEM,
        variables: { input: createItem },
      });
      return response?.data;
    } catch (error) {
      console.error(error);
    }
  }
}
export default new ItemService();

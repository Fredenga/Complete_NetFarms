import {
  CreateUserInput,
  LoginInput,
} from "../../../../__generated__/globalTypes";
import apolloClient from "../../apollo/apolloClient";
import { CREATE_USER, LOGIN } from "../user/mutation";

class UserService {
  async login(loginInput: LoginInput) {
    try {
      const response = await apolloClient.mutate({
        mutation: LOGIN,
        variables: { input: loginInput },
      });
      return response?.data;
    } catch (error) {
      throw error;
    }
  }

  async createUser(createUserInput: CreateUserInput) {
    try {
      const response = await apolloClient.mutate({
        mutation: CREATE_USER,
        variables: { input: createUserInput },
      });
      return response?.data.login.login;
    } catch (error) {
      throw error;
    }
  }
}
export default new UserService();

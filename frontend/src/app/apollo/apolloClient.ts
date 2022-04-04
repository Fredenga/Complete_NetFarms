import { ApolloClient, InMemoryCache } from "@apollo/client";

// const httplink = createHttpLink({
//   uri: process.env.REACT_APP_BACKEND_URL,
//   // credentials: "same-origin",
// });

// const authLink = setContext(async (_, { headers }) => {
//   const token = await localStorage.getItem("token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:9000/graphql",

  // link: authLink
});
export default apolloClient;

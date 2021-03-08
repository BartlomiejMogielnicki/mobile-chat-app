import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { hasSubscription } from "@jumpn/utils-graphql";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { split } from "apollo-link";

import PhoenixSocket from "../socket";
import { URL, WS_URL } from "../urls/index";

const httpLink = createHttpLink({
  uri: URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const authedHttpLink = authLink.concat(httpLink);

export const phoenixSocket = new PhoenixSocket(WS_URL, {
  params: async () => {
    try {
      const value = await AsyncStorage.getItem("@token");
      if (value !== null) {
        return { token: value };
      }
    } catch (e) {
      console.log(e);
    }
  },
});

const absintheSocket = AbsintheSocket.create(phoenixSocket);

const websocketLink = createAbsintheSocketLink(absintheSocket);

const link = split(
  (operation) => hasSubscription(operation.query),
  websocketLink,
  authedHttpLink
);

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache,
});

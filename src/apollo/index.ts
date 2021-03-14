import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { API_URL, API_WS_URL } from "@env";
import { hasSubscription } from "@jumpn/utils-graphql";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { split } from "apollo-link";

import PhoenixSocket from "../socket";

const httpLink = createHttpLink({
  uri: API_URL,
});

export const phoenixSocket = new PhoenixSocket(API_WS_URL, {
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
  httpLink
);

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache,
});

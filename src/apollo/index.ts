import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { hasSubscription } from "@jumpn/utils-graphql";
import { split } from "apollo-link";
import { Socket as PhoenixSocket } from "phoenix";

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

const phoenixSocket = new PhoenixSocket(WS_URL, {
  params: (token: string) => {
    if (token) {
      return { token };
    } else {
      return {};
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

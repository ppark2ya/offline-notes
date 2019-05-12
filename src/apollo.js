import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ApolloLink } from "apollo-link";
import { typeDefs, defaults, resolvers } from "./clinetStats";

const cache = new InMemoryCache();

// Client State에 앱에 필요한 모든 로직을 넣어준다
const stateLink = withClientState({
  cache,
  typeDefs, // 쿼리의 데이터 타입 정의
  defaults,
  resolvers // 실제 쿼리 요청이 들어왔을 때 수행하는 로직
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink])
});

export default client;

import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./Components/App";
import client from "./apollo";
import GlobalStyle from "./globalStyles";

ReactDOM.render(
  <ApolloProvider client={client}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ApolloProvider>,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);

import React from 'react';
import Main from '../../kream/src/pages/Main';

import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

function App() {

  const client = new ApolloClient({
    uri: process.env.REACT_APP_SERVER,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Main/>
    </ApolloProvider>
  );
}

export default App;

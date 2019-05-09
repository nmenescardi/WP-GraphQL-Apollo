import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import './styles/animate.min.css';
import './styles/owl.carousel.css';
import './styles/linearicons.css';
import './fonts/Linearicons-Free.eot';

const client = new ApolloClient({
  uri: 'http://blackbird.estudiogenba.com/graphql'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

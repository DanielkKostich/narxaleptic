import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={ApolloClient}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

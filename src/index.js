import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { ApolloProvider } from 'react-apollo';
import client from './apollo';
import GlobalStyle from './globalStyles';

ReactDOM.render(
    <ApolloProvider client={client}>
        <Fragment>
            <GlobalStyle />
            <App />
        </Fragment>
    </ApolloProvider>, 
    document.getElementById('root')
);
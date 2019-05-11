import React from 'react';
import { Query } from 'react-apollo';
import { GET_NOTES } from './queries';

function App() {
  return (
    <div className="App">
      <Query query={GET_NOTES}>{() => null}</Query>
    </div>
  );
}

export default App;

import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';

class Search extends React.Component {
  render() {
    return (
      <section>
        <div data-testid="page-search">
          Search
        </div>
        <Header />
      </section>
    );
  }
}

export default Search;

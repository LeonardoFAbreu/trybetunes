import React from 'react';
import Header from './Header';

class Search extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <div data-testid="page-search">
          Search
        </div>
      </section>
    );
  }
}

export default Search;

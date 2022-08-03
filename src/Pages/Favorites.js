import React from 'react';
import Header from './Header';

class Favorites extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <div data-testid="page-favorites">
          Favorites
        </div>
      </section>
    );
  }
}

export default Favorites;

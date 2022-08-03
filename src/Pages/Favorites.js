import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';

class Favorites extends React.Component {
  render() {
    return (
      <section>
        <div data-testid="page-favorites">
          Favorites
        </div>
        <Header />
      </section>
    );
  }
}

export default Favorites;

import React from 'react';
import Header from './Header';
// import { Link } from 'react-router-dom';

class Album extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <div data-testid="page-album">
          Album
        </div>
      </section>
    );
  }
}

export default Album;

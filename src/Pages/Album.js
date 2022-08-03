import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';

class Album extends React.Component {
  render() {
    return (
      <section>
        <div data-testid="page-album">
          Album
        </div>
        <Header />
      </section>
    );
  }
}

export default Album;

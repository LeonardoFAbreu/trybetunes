import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';

class Profile extends React.Component {
  render() {
    return (
      <section>
        <div data-testid="page-profile">
          Profile
        </div>
        <Header />
      </section>
    );
  }
}

export default Profile;

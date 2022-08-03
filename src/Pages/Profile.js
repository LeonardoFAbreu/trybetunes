import React from 'react';
import Header from './Header';

class Profile extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <div data-testid="page-profile">
          Profile
        </div>
      </section>
    );
  }
}

export default Profile;

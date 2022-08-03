import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      login: '',
      load: false,
    };
  }

  componentDidMount() {
    this.setState({ load: true });
    getUser().then((response) => {
      this.setState({ login: response.name, load: false });
    });
  }

  render() {
    const { login, load } = this.state;

    return (
      <div>
        <header data-testid="header-component">
          {/* { login } */}
          { load ? <p>Carregando...</p>
            : <span data-testid="header-user-name">{`Olá, ${login}`}</span> }
          <nav>
            <Link to="/search" data-testid="link-to-search">Buscar</Link>
            <Link to="/favorites" data-testid="link-to-favorites">Músicas curtidas</Link>
            <Link to="/profile" data-testid="link-to-profile">Meu perfil</Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;

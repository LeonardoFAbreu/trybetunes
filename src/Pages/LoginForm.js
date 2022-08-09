import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      login: '',
      load: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { login } = this.state;
    const { history } = this.props;

    this.setState({ load: true });

    await createUser({ name: login });

    history.push('/search');
    // PRECISO ENTENDER MELHOR SOBRE O HISTORY
  }

  handleChangeInput = (event) => {
    this.setState({
      login: event.target.value,
    });
  }

  //   this.setState({
  //     [name]: value });
  // }

  render() {
    const { login, load } = this.state;
    const MIN_LOGIN_LENGTH = 3;

    if (load) return <p> Carregando...</p>;

    return (
      <section data-testid="page-login">
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="login">
            <p>Login:</p>
            <input
              data-testid="login-name-input"
              type="text"
              name="login"
              placeholder="Digite seu email"
              value={ login }
              onChange={ this.handleChangeInput }
            />
          </label>
          <div className="container">
            <button
              data-testid="login-submit-button"
              type="submit"
              name="Entrar"
              value="entrar"
              disabled={ login.length < MIN_LOGIN_LENGTH }
            >
              Entrar
            </button>
          </div>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;

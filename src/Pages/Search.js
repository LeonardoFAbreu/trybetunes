import React, { Component } from 'react';
import Header from './Header';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      banda: '',
      pesquisar: false,
    };
  }

  handleSearch = async (event) => {
    event.preventDefault();

    const { banda } = this.state;
    // const { history } = this.props;

    this.setState({ pesquisar: true });
    await createUser({ name: banda });

    // history.push('/search');
    // PRECISO ENTENDER MELHOR SOBRE O HISTORY
  }

  handleChangeInput = (event) => {
    this.setState({
      banda: event.target.value,
    });
  }

  render() {
    const { banda, pesquisar } = this.state;
    const MIN_LOGIN_LENGTH = 2;

    if (pesquisar) return <p> Carregando...</p>;

    return (
      <section>
        {/* <form> */}
        <form onSubmit={ this.handleSubmit }>
          <Header />
          <label htmlFor="Banda>">
            <input
              data-testid="search-artist-input"
              type="text"
              name="banda"
              placeholder="Digite o nome da banda"
              value={ banda }
              onChange={ this.handleChangeInput }
            />
          </label>
          <div>
            <button
              data-testid="search-artist-button"
              type="submit"
              name="pesquisar"
              value="pesquisar"
              disabled={ banda.length < MIN_LOGIN_LENGTH }
            >
              <p>Pesquisar</p>
            </button>
          </div>
          {/* <div data-testid="page-search">
            Search
          </div> */}
        </form>
      </section>
    );
  }
}

export default Search;

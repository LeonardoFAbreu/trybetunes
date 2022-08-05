import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Header from './Header';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      artist: '',
      search: '',
      loading: false,
      album: [],
    };
  }

  handleSearch = async (event) => {
    event.preventDefault();

    const { search } = this.state;

    this.setState({
      search: '',
      artist: search,
      loading: true,
    });

    const album = await searchAlbumsAPI(search);

    this.setState({
      loading: false,
      album,
    });
  }

  handleChangeInput = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    const { artist, search, loading, album } = this.state;
    const MIN_SEARCH_LENGTH = 2;

    if (loading) return <p> Carregando...</p>;

    return (
      <section>
        {/* <form> */}
        <form onSubmit={ this.handleSearch }>
          <Header />
          <label htmlFor="Artista>">
            <input
              data-testid="search-artist-input"
              type="text"
              name="artist"
              placeholder="Digite o nome do artista"
              value={ search }
              onChange={ this.handleChangeInput }
            />
          </label>
          <div>
            <button
              data-testid="search-artist-button"
              type="submit"
              name="search"
              value="search"
              disabled={ search.length < MIN_SEARCH_LENGTH }
            >
              <p>Pesquisar</p>
            </button>
          </div>
          {(album && album.length) === 0 && <p>Nenhum álbum foi encontrado</p>}
          <section>
            <h2>
              Resultado de álbuns de:
              {' '}
              {artist}
            </h2>
            <ul>
              {album.map(({ collectionId, collectionName }) => (
                <Link
                  key={ collectionId }
                  to={ `/album/${collectionId}` }
                  data-testid={ `link-to-album-${collectionId}` }
                >
                  {collectionName}
                </Link>
              ))}
            </ul>
          </section>
        </form>
      </section>
    );
  }
}

export default Search;

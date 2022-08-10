import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../Component/MusicCard';
import Loading from '../Component/Loading';
import { addSong } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      favorite: [],
      tracks: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.playMusic();
  }

  addToFavorite = async () => {
    const { tracks } = this.props;
    this.setState({ isLoading: true });
    await addSong(tracks);
    this.setState({ isLoading: false });
  };

  playMusic = async () => {
    const { match: { params: { id } } } = this.props;
    const callApi = await getMusics(id);
    const newPosition = callApi[0];
    this.setState({
      favorite: newPosition,
      tracks: callApi,
    });
  };

  render() {
    const { tracks, favorite, isLoading } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        <p data-testid="album-name">{ favorite.collectionName }</p>
        <p data-testid="artist-name">{ favorite.artistName }</p>
        { isLoading ? <Loading /> : null }
        <ul>
          {
            tracks.filter((music) => music !== favorite)
              .map((disco, id) => (
                <MusicCard
                  addToFavorite={ this.addToFavorite }
                  disco={ disco }
                  key={ id }
                />))
          }
        </ul>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default Album;

import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      checked: false,
    };
  }

  componentDidMount() {
    this.newFavorite();
  }

newFavorite = async () => {
  const { disco } = this.props;
  const favoriteSong = await getFavoriteSongs();
  const filterSong = favoriteSong.some((music) => music.trackId === disco.trackId);
  this.setState({ checked: filterSong });
}

  handleChange = ({ target }) => {
    const { addToFavorite } = this.props;
    console.log(target);
    if (target.checked) {
      this.setState({ checked: target.checked }, addToFavorite);
    } else {
      this.setState({ checked: target.checked });
    }
  }

  render() {
    const { disco } = this.props;
    const { previewUrl, trackName, trackId } = disco;
    const { isLoading, checked } = this.state;
    console.log(checked);
    return (
      <>
        {
          isLoading ? <Loading /> : null
        }
        <>
          <li>
            {' '}
            <p>{trackName}</p>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
              .
            </audio>
          </li>
          <label
            data-testid={ `checkbox-music-${trackId}` }
            htmlFor={ trackId }
          >
            Favorita
            <input
              id={ trackId }
              type="checkbox"
              checked={ checked }
              onChange={ this.handleChange }
            />
          </label>
        </>
      </>
    );
  }
}
MusicCard.propTypes = {
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
  trackId: PropTypes.number,
  index: PropTypes.number,
  disco: PropTypes.arrayOf(PropTypes.object.isRequired),
  addToFavorite: PropTypes.func,
}.isRequired;

export default MusicCard;

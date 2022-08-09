import React from 'react';
import PropTypes from 'prop-types';
// import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }

  // handleChange = async () => {
  //   const { trackId, trackName, previewUrl } = this.props;

  //   this.setState({
  //     isLoading: true,
  //   });

  //   await addSong({ trackId, trackName, previewUrl });

  //   this.setState({
  //     isLoading: false,
  //   });
  // };

  render() {
    const { isLoading } = this.state;
    const {
      trackName,
      previewUrl,
      trackId,
      onToggle,
      isFavorite,
    } = this.props;

    if (isLoading) return <p>Carregando...</p>;

    return (
      <section>
        <div>
          <h3>{trackName}</h3>
          <audio
            data-testid="audio-component"
            src={ previewUrl }
            controls
          >
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            <code>audio</code>
          </audio>

        </div>
        <div>
          <label htmlFor="Favorite>">
            Favorita
            <input
              type="checkbox"
              onChange={ onToggle }
              data-testid={ `checkbox-music-${trackId}` }
              checked={ isFavorite }
            />
          </label>
        </div>
      </section>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MusicCard;

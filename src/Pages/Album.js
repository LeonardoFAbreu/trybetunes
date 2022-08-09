import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import MusicCard from '../Component/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      tracks: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    const tracks = await getMusics(id);

    this.setState({
      isLoading: false,
      tracks,
    });
  }

  render() {
    const { isLoading, tracks } = this.state;
    const { artistName, collectionName } = tracks[0] || {};

    if (isLoading) return <p>Carregando...</p>;

    return (
      <section>
        <div data-testid="page-album">
          Album
        </div>
        <Header />
        <h2 data-testid="album-name">{collectionName}</h2>
        <p data-testid="artist-name">{artistName}</p>

        <ul>
          {tracks
            .filter(({ kind }) => kind === 'song')
            .map((track) => (
              <MusicCard key={ track.trackId } { ...track } />
            ))}
        </ul>
      </section>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;

import React from 'react';
import imdb from '../../assets/imdb.png';

const MovieInfo = (props) => {
  const { movie } = props;

  const genresList = movie.genres ? (
    movie.genres.map((genre, index) => {
      return (
        <li key={index}>{genre} <span> / </span> </li>
      )
    })
  ) : null

  const torrentList = movie.torrents ? (
    movie.torrents.map((torrent, index) => {
      return(
        <a key={index} className='download-torrent' href={torrent.url}>
          {torrent.quality} <span>{torrent.type}</span>
        </a>
      )
    })
  ) : null

  return (
    <div className="movie-info">
      <div className="movie-title">
        <h1>{movie.title}</h1>
        <h2>{movie.year}</h2>
        <ul className="genre-list">
          {genresList}
        </ul>
      </div>
      <div className="torrent-quality">
        <em>Available in:</em>
        <div>
          {torrentList}
        </div>
      </div>
      <div className="imdb">
        <img src={imdb} alt="imdb"></img> <span>{movie.rating}</span>
      </div>
    </div>
  )
}

export default MovieInfo
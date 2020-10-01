import React from "react";
import imdb from "../../assets/imdb.png";
import { Link } from "react-router-dom";

const MovieInfo = (props) => {
  const { movie } = props;

  const genresList = movie.genres
    ? movie.genres.map((genre, index) => {
        return (
          <li key={index}>
            {genre} <span> / </span>{" "}
          </li>
        );
      })
    : null;

  const torrentList = movie.torrents
    ? movie.torrents.map((torrent, index) => {
        return (
          <Link
            to={`/play?torrent=${torrent.url}`}
            key={index}
            className="download-torrent"
          >
            {torrent.quality} <span>{torrent.type}</span>
          </Link>
        );
      })
    : null;

  return (
    <div className="movie-info">
      <div className="movie-title">
        <h1>{movie.title}</h1>
        <h2>{movie.year}</h2>
        <ul className="genre-list">{genresList}</ul>
      </div>
      <div className="torrent-quality">
        <em>Available in:</em>
        <div>{torrentList}</div>
      </div>
      <div className="imdb">
        <img src={imdb} alt="imdb"></img> <span>{movie.rating}</span>
      </div>
    </div>
  );
};

export default MovieInfo;


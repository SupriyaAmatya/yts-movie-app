import React from 'react';
import { Link } from 'react-router-dom';

import Loading from '../layout/Loading';
import rating from '../../assets/star-icon green.svg';

const LatestMovies = (props) => {
  const movies = props.movies

  const moviesList = movies.length ? (
    movies.map(movie => {
      return (
        <div className="browse-movie-wrap" key={movie.id}>
          <div className="browse-movie-link">
            <Link to={'/movie/' + movie.id + '/' + movie.slug}>
              <img src={movie.medium_cover_image} alt={movie.title}></img>
              <div className="overlay">
                <div className="star-icon">
                  <img src={rating} alt='star'></img>
                </div>
                <h4 className='rating'> {movie.rating} / 10</h4>
                <h4>{movie.genres ? (movie.genres[0]) : ('Action')}</h4>
                <h4>{movie.genres ? (movie.genres[1]) : null}</h4>
                <button>View Details</button>
              </div>
            </Link>
          </div>
          <div className="browse-movie-bottom">
            <Link to={'/movie/' + movie.id + '/' + movie.slug}>{movie.title}</Link>
            <div className='movie-year'>{movie.year}</div>
          </div>
        </div>
      )
    }
    )
  ) : (
      < Loading />
    )
  return (
    <div className="main-section">
      <div className="container">
        <div className="latest-section">
          <div className="content">
            <h2>Latest YIFY Movies Torrent</h2>
            <div className='row'>
              {moviesList}
            </div>
            <p className="view-all" style={{ textAlign: 'center', paddingTop: '40px', marginBottom: '0' }}>
              <Link to="/browse-movies" >View All</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestMovies;
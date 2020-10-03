import React from 'react';
import { Link } from 'react-router-dom';

import star from '../../assets/star-icon.svg'
import rating from '../../assets/star-icon green.svg'

const PopularMovies = (props) => {
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
                <h4>{movie.genres[0]}</h4>
                <h4>{movie.genres[1]}</h4>
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
  ) : null
  return (
    <div className="popular-section">
      <h2><img src={star} alt='star'></img>Popular Downloads</h2>
      <div className='row'>
        {moviesList}
      </div>
    </div>
  );
}

export default PopularMovies;

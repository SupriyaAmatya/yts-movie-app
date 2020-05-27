import React from 'react';
import rating from '../../assets/star-icon green.svg';
import Loading from '../layout/Loading';

const LatestMovies = (props) => {
  const movies = props.movies
  // console.log(movies);
  const moviesList = movies.length ? (
    movies.map(movie => {
      return (
        <div className="browse-movie-wrap" key={movie.id}>
          <div className="browse-movie-link">
            <a href={'/movie/' + movie.id + '/' + movie.slug}>
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
            </a>
          </div>
          <div className="browse-movie-bottom">
            <a href={'/movie/' + movie.id + '/' + movie.slug}>{movie.title}</a>
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
            
            <p className="view-all" style={{textAlign:'center' , paddingTop:'40px', marginBottom:'0'}}><a href="/browse-movies" >View All</a></p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LatestMovies;
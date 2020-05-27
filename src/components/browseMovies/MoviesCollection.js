import React from 'react'

import star from '../../assets/star-icon green.svg'
import Pagination from './Pagination'

const MoviesCollection = (props) => {
  const { allMovies, pages, nextPage, currentPage, totalMovies, window, limit } = props
  // console.log(allMovies);
  const moviesList = allMovies ? (
    allMovies.map(movie => {
      return (
        <div className="browse-movie-wrap" key={movie.id}>
          <div className="browse-movie-link">
            <a href={'/movie/' + movie.id + '/' + movie.slug}>
              <img src={movie.medium_cover_image === null ? ('https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg') : (movie.medium_cover_image)} alt={movie.title}></img>
              <div className="overlay">
                <div className="star-icon">
                  <img src={star} alt='star'></img>
                </div>
                <h4 className='rating'> {movie.rating} / 10</h4>
                <h4>{movie.genres ? (movie.genres[0]) : ('Action')}</h4>
                <h4>{movie.genres ? (movie.genres[1]) : null}</h4>
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
  ) : ''
  return (
    <div className="movie-content">
      <div className="container">
        <h2 className="movie-count">
          <strong style={{ letterSpacing: '1px' }}>{new Intl.NumberFormat().format(totalMovies)}</strong>
          <span style={{ fontWeight: '400' }}> Movies Found</span>
        </h2>

        {totalMovies > limit ? <Pagination pages={pages} nextPage={nextPage} currentPage={currentPage} window={window} /> : ''}

        <div className="row movies-list">

          {moviesList}

        </div>

        {totalMovies > limit ? <Pagination pages={pages} nextPage={nextPage} currentPage={currentPage} window={window} /> : ''}
        
      </div>
      
    </div>
  )
}

export default MoviesCollection

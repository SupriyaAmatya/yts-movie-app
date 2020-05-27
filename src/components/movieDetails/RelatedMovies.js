import React from 'react'

const RelatedMovies = (props) => {

  const { similarMovies } = props;

  const similarMoviesList = similarMovies ? (
    similarMovies.map(movie =>{
      return(
        <div className="card-container similar-movie" key={movie.id}>
        <div className="card">
          <a href={'/movie/' + movie.id + '/' + movie.slug} className="image-link" title={movie.title_long}>
            <img src={movie.medium_cover_image} alt={movie.title} className="image"/>
          </a>
        </div>
      </div>
      )
    })
  ) : null
  return (
    <div className="similar-movies-container clearfix">
      <p>Similar Movies</p>
      {similarMoviesList}
    </div>
  )
}

export default RelatedMovies

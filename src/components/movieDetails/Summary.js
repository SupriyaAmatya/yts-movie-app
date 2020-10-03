import React from 'react';
import moment from 'moment';
import defaultProfile from '../../assets/default_profile.jpg'

const Summary = (props) => {

  const { movie } = props;

  const castList = movie.cast ? (
    movie.cast.map((cast, index) => {
      let profile = cast.url_small_image ? (cast.url_small_image) : (defaultProfile)
      return (
        <li key={index}>
          <a href={'https://www.imdb.com/name/nm' + cast.imdb_code + '/'} title="IMDB Profile" target="_blank" rel="noopener noreferrer">
            <img src={profile} alt="profile" />
          </a>
          <p><span>{cast.name} </span>as {cast.character_name}</p>
        </li>
      )
    })
  ) : null

  return (
    <div>
      <div className="movie-summary">
        <h3>Synopsis</h3>
        <p>{movie.description_full}</p>
        <div>
          Downloaded {movie.download_count} times <br />
          {moment(movie.date_uploaded).format('ll')}<span> at </span> {moment(movie.date_uploaded).format('LT')}
        </div>
      </div>

      <div className="movie-cast">
        <h3>Cast</h3>
        <ul>
          {castList}
        </ul>
      </div>
    </div>
  )
}

export default Summary

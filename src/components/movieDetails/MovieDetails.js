import React, { Component } from 'react';
// import bg from '../../assets/background.jpg'
import '../../styles/movieDetail.css';

import MovieInfo from './MovieInfo';
import RelatedMovies from './RelatedMovies';
import Summary from './Summary';
import axios from 'axios';
import DownloadModal from './DownloadModal';
import Loading from '../layout/Loading';

class MovieDetails extends Component {
  state = {
    movieDetails: [],
    similarMovies: [],
    downloadModal: false
  }

  openDownloadModal = () => {
    this.setState({
      ...this.state,
      downloadModal: true
    })
  }

  closeDownloadModal = (close) => {
    this.setState({
      downloadModal: !this.state.downloadModal
    })
  }

  componentDidMount() {
    let id = this.props.match.params.id;

    const movieDetails = axios.get('https://yts.mx/api/v2/movie_details.json?movie_id=' + id + '&with_images=true&with_cast=true');
    const similarMovies = axios.get('https://yts.mx/api/v2/movie_suggestions.json?movie_id=' + id);
    axios.all([movieDetails, similarMovies])
      .then(
        axios.spread((...res) => {
          this.setState({
            movieDetails: res[0].data.data.movie,
            similarMovies: res[1].data.data.movies
          })
        })
      ).catch(err => console.log(err));
  }

  render() {
    const movie = this.state.movieDetails;
    console.log(movie);
    const bg = movie.background_image;

    const genresList = movie.genres ? (
      movie.genres.map((genre, index) => {
        return (
          <li key={index}>{genre} <span> / </span> </li>
        )
      })
    ) : null

    if (movie) {
      return (
        <div className="container movie-detail-container clearfix">
          <div className="background-image"
            style={{ background: 'url(' + bg + ') no-repeat center center' }} />
          <div className="background-overlay"></div>
          <div className="container hidden-movie-title">
            <h1>{movie.title}</h1>
          </div>
          <div className='row movie-container'>

            <div className="movie-poster">
              <div className="card-container">
                <div className="card">
                  <div className="image-container">
                    <img src={movie.medium_cover_image} alt={movie.title} className="image" />
                  </div>
                </div>
              </div>
              <button className="download-btn" onClick={this.openDownloadModal}>Download</button>
            </div>
            <DownloadModal downloadModal={this.state.downloadModal} closeDownloadModal={this.closeDownloadModal} torrents={movie.torrents} />
            <MovieInfo movie={movie} />
            <RelatedMovies similarMovies={this.state.similarMovies} />
          </div>

          <div className="row screenshots-section">
            <div className="screenshot">
              <iframe
                title={movie.title}
                frameBorder="0"
                src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
                allowFullScreen={true}
              ></iframe>
            </div>

            <div className="screenshot pic">
              <a href={movie.large_screenshot_image1} target="_blank" rel="noopener noreferrer"><img src={movie.medium_screenshot_image1} alt="screenshot" /></a>
            </div>

            <div className="screenshot pic">
              <a href={movie.large_screenshot_image1} target="_blank" rel="noopener noreferrer"><img src={movie.medium_screenshot_image2} alt="screenshot" /></a>
            </div>
          </div>

          <div className="row summary-section clearfix">
            <Summary movie={movie} />
          </div>
        </div>
      );
    }
    else {
      return (<Loading />)
    }

  }
}

export default MovieDetails;

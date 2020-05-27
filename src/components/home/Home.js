import React, { Component } from 'react';
import PopularMovies from './PopularMovies';
import LatestMovies from './LatestMovies';
import axios from 'axios';

class Home extends Component {
  state ={
    popularMovies: [],
    latestMovies: [],
  }

  componentDidMount(){
    const popular = axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=like_count');
    const latest = axios.get('https://yts.mx/api/v2/list_movies.json?')
    axios.all([popular, latest])
      .then(
        axios.spread((...res) =>{
          this.setState({
            popularMovies: res[0].data.data.movies.slice(0,4),
            latestMovies: res[1].data.data.movies.slice(0,8)
          })
        })
      )
  }
  render() {
    const{ popularMovies , latestMovies} = this.state;

    return (
      <div>
        <div className="hero-section background-img">
        <div className="hero-overlay"></div>
          <div className="container">
            <div className='hero-title'>
              <h1>Download YTS YIFY movies: HD smallest size</h1>
              <p>Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.</p>
            </div>
            <PopularMovies movies = {popularMovies}/>
          </div>
        </div>
        <LatestMovies movies = {latestMovies}/>
      </div>
    )
  }
}

export default Home
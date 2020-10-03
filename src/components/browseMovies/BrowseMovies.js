import React, { Component } from 'react'

import axios from 'axios';
import '../../styles/browseMovie.css';

import SearchBox from './SearchBox';
import MoviesCollection from './MoviesCollection';

class BrowseMovies extends Component {
  state = {
    allMovies: [],
    search: '',
    totalMovies: 0,
    currentPage: 1,
    limit: 20,
    window: 3
  }

  getData = () => {
    axios.get(`https://yts.mx/api/v2/list_movies.json?&limit=${this.state.limit}`)
      .then(res => {
        this.setState({
          ...this.state,
          allMovies: res.data.data.movies,
          totalMovies: res.data.data.movie_count
        })
      })
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getData();
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    axios.get(`https://yts.mx/api/v2/list_movies.json?page=${this.state.page}&query_term=${this.state.search}&${this.state.limit}`)
      .then(res => {
        this.setState({
          ...this.state,
          allMovies: res.data.data.movies,
          totalMovies: res.data.data.movie_count
        })
      })
    e.preventDefault();
  }

  nextPage = (pageNumber) => {
    console.log(pageNumber);
    axios.get(`https://yts.mx/api/v2/list_movies.json?page=${this.state.page}&query_term=${this.state.search}&page=${pageNumber}&${this.state.limit}`)
      .then(res => {
        this.setState({
          ...this.state,
          allMovies: res.data.data.movies,
          currentPage: pageNumber
        })
      })
  }

  render() {
    const numberPages = Math.ceil(this.state.totalMovies / this.state.limit);

    return (
      <div className="browse-movies-section">
        <SearchBox handleInput={this.handleInput} handleSubmit={this.handleSubmit} search={this.state.search} />
        <MoviesCollection
          allMovies={this.state.allMovies}
          pages={numberPages}
          nextPage={this.nextPage}
          currentPage={this.state.currentPage}
          totalMovies={this.state.totalMovies}
          window={this.state.window}
          limit={this.state.limit} />
      </div>
    )
  }
}

export default BrowseMovies

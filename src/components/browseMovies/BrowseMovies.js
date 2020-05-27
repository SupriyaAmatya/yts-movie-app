import React, { Component } from 'react'
import '../../styles/browseMovie.css';
import MoviesCollection from './MoviesCollection';

import axios from 'axios';
import SearchBox from './SearchBox';

class BrowseMovies extends Component {
  state = {
    allMovies: [],
    search: '',
    totalMovies: 0,
    currentPage:1,
    limit:20,
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
    // const searchItem = this.state.search;

    // if (searchItem.text !== "") {
    //   this.setState({
    //     ...this.state,
    //     search: searchItem
    //   })
    // }
  }

  nextPage=(pageNumber) =>{
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
    // console.log(this.state.allMovies);

    // let filteredMovies = this.state.allMovies.filter(movie => {
    //   return (movie.title.toLowerCase().includes(this.state.search.toLowerCase()))
    // })
    // console.log(filteredMovies);

    const numberPages = Math.floor(this.state.totalMovies / this.state.limit);

    return (
      <div className="browse-movies-section">
        <SearchBox handleInput={this.handleInput} handleSubmit={this.handleSubmit} search={this.state.search} />
        <MoviesCollection 
          allMovies={this.state.allMovies} 
          pages={numberPages} 
          nextPage={this.nextPage} 
          currentPage={this.state.currentPage} 
          totalMovies={this.state.totalMovies}
          window = {this.state.window}
          limit={this.state.limit}/>
        {/* {this.state.totalMovies > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ''} */}
      </div>
    )
  }
}

export default BrowseMovies

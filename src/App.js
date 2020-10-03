import React from "react";
import './index.css';
import './styles/styles.css'
import { Route, Switch, withRouter } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import BrowseMovies from "./components/browseMovies/BrowseMovies";
import MovieDetails from './components/movieDetails/MovieDetails';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Navbar />

          <Switch className="main">
            <Route exact path="/" component={Home} />
            <Route path="/browse-movies" component={BrowseMovies} />
            <Route exact path="/movie/:id/:slug" component={withRouter(MovieDetails)} />
          </Switch>
          <Footer />
        </div>

    );
  }
}

export default App;

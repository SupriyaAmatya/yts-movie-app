import React from "react";
import './index.css';
import './styles/styles.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import BrowseMovies from "./components/browseMovies/BrowseMovies";
import MovieDetails from './components/movieDetails/MovieDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch className="main">
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
            <Route path={process.env.PUBLIC_URL + "/browse-movies"} component={BrowseMovies} />
            <Route path={process.env.PUBLIC_URL + "/movie/:id/:slug"} component={MovieDetails} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

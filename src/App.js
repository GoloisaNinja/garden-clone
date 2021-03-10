import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute.js';
import Search from './Search/Search.js';
import Home from './Home/Home.js';
import Header from './Components/Header.js';
import Detail from './Detail/Detail.js';
import Wishlist from './Wishlist/Wishlist.js';
import MyGarden from './MyGarden/MyGarden.js';
import MyGardenDetail from './MyGarden/MyGardenDetail.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              component={Home}
            />
            <PrivateRoute
              path="/search"
              exact
              component={Search}
            />
            <PrivateRoute
              path="/detail/:id"
              exact
              component={Detail}
            />
            <PrivateRoute
              path="/wishlist"
              exact
              component={Wishlist}
            />
            <PrivateRoute
              path="/my_garden"
              exact
              component={MyGarden}
            />
            <PrivateRoute
              path="/my_garden/:id"
              exact
              component={MyGardenDetail}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

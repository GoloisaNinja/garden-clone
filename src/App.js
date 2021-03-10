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
import AboutUs from './AboutUs/AboutUs.js';
import Header from './Components/Header.js';
import Detail from './Detail/Detail.js';
import Wishlist from './Wishlist/Wishlist.js';
import MyGarden from './MyGarden/MyGarden.js';
import { getUserFromLocalStorage, setUserInLocalStorage } from './Utils/LocalStorage.js';

export default class App extends Component {

  state = {
    user: getUserFromLocalStorage()
  }
  handleUserChange = (user) => {
    this.setState({ user })
    setUserInLocalStorage(user);
  }
  handleLogout = () => {
    this.handleUserChange();
  }

  render() {
    return (
      <div>
        <Router>
          <Header
            handleLogout={this.handleLogout}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) =>
                <Home handleUserChange={this.handleUserChange} {...routerProps}
                />}
            />
            <PrivateRoute
              path="/search"
              exact token={this.state.user && this.state.user.token}
              render={(routerProps) =>
                <Search user={this.state.user}
                  {...routerProps}
                />}
            />
            <PrivateRoute
              path="/detail/:id"
              exact token={this.state.user && this.state.user.token}
              render={(routerProps) =>
                <Detail user={this.state.user}
                  {...routerProps}
                />}
            />
            <PrivateRoute
              path="/wishlist"
              exact token={this.state.user && this.state.user.token}
              render={(routerProps) =>
                <Wishlist user={this.state.user}
                  {...routerProps}
                />}
            />
            <PrivateRoute
              path="/my_garden"
              exact token={this.state.user && this.state.user.token}
              render={(routerProps) =>
                <MyGarden user={this.state.user}
                  {...routerProps}
                />}
            />
            <Route
              path="/about_us"
              exact
              render={(routerProps) =>
                <AboutUs
                  {...routerProps}
                />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

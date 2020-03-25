import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import API from "./api";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

import { Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RestaurantShow from "./components/RestaurantShow";
import Favourites from "./components/Favourites";

class App extends Component {
  state = {
    username: null,
    allRestaurants: [],
    favourites: []
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position =>
      API.localRestaurants(position.coords).then(data => {
        this.setState({
          allRestaurants: data.restaurants
        });
      })
    );
    if (localStorage.token) {
      API.validate(localStorage.token)
        // Pass the username and token the server sends back to signIn
        .then(json => this.signIn(json.username, json.token));
    }
  }

  signIn = (username, token, favourites ) => {
    this.setState({
      username,
      favourites
    });
    localStorage.token = token;
  };

  signOut = () => {
    this.setState({
      username: null
    });
    localStorage.removeItem("token");
  };

  render() {
    return (
      <div>
        <NavBar username={this.state.username} signOut={this.signOut} />
        <Route exact path="/" render={() => <Welcome />} />
        <Route
          exact
          path="/restaurants"
          component={() => <Home restaurants={this.state.allRestaurants} />}
        />
        <Route
          exact
          path="/sign-in"
          component={() => <SignInForm signIn={this.signIn} />}
        />
        <Route
          exact
          path="/sign-up"
          component={() => <SignUpForm signIn={this.signIn} />}
        />
        <Route
          exact
          path="/favourites"
          component={() => <Favourites favourites={this.state.favourites} />}
        />
        <Route exact path="/restaurants/:id" component={RestaurantShow} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

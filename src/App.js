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

class App extends Component {
  state = {
    username: null,
    allRestaurants: []
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position =>
      API.localRestaurants(position.coords).then(data => {
        this.setState({
          allRestaurants: data.restaurants
        });
      })
    );
  }

  signIn = (username, token) => {
    this.setState({
      username
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
        <Route exact path="/restaurants/:id" component={RestaurantShow} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

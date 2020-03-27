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
    favourites: [],
    value: "",
    cuisines: []
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position =>
      API.localRestaurants(position.coords).then(data => {
        this.setState({
          allRestaurants: data.restaurants
        });
      })
    );
    navigator.geolocation.getCurrentPosition(position =>
      API.getCuisines(position.coords).then(data => {
        this.setState({
          cuisines: data.cuisines
        });
      })
    );
    if (localStorage.token) {
      API.validate(localStorage.token)
        // Pass the username and token the server sends back to signIn
        .then(json => this.signIn(json.username, json.token, json.favourites));
    }
  }

  signIn = (username, token, favourites) => {
    this.setState({
      username,
      favourites
    });
    localStorage.token = token;
  };

  signOut = () => {
    this.setState({
      username: null,
      favourites: []
    });
    localStorage.removeItem("token");
  };

  addFav = restaurant => {
    let postBody = {
      name: restaurant.name,
      cuisine: restaurant.cuisines,
      picture: restaurant.thumb,
      zomato_id: restaurant.id,
      longitude: restaurant.location.longitude,
      latitude: restaurant.location.latitude,
      user: this.state.username
    };
    API.addFavourite(postBody).then(json => {
      this.setState({
        favourites: [...this.state.favourites, json.restaurant]
      });
    });
  };

  removeFav = restaurant => {
    let favouriteList = this.state.favourites;
    let resIndex = favouriteList.indexOf(restaurant);
    favouriteList.splice(resIndex, 1);
    let deleteBody = {
      restaurant: restaurant,
      user: this.state.username
    };
    API.destroyFavourite(deleteBody).then(json => {
      this.setState({
        favourites: favouriteList
      });
    });
  };

  handleChange = (event, data) => {
    this.setState({ value: data.value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  // handleChange = event => {
  //   const searchValue = event.target;
  //   console.log(event.target);
  //   // this.setState({ searchValue: event.target });
  // };

  // handleSubmit = event => {
  //   console.log(event);
  //   event.preventDefault();
  //   // navigator.geolocation
  //   //   .getCurrentPosition(position =>
  //   //     API.restaurantSearch(position.coords, event.target.value)
  //   //   )
  //   //   .then(data => {
  //   //     this.setState({
  //   //       allRestaurants: data.restaurants
  //   //     });
  //   //   });
  // };

  render() {
    return (
      <div>
        <NavBar username={this.state.username} signOut={this.signOut} />
        <Route exact path="/" render={() => <Welcome />} />
        <Route
          exact
          path="/restaurants"
          component={() => (
            <Home
              restaurants={this.state.allRestaurants}
              addFav={this.addFav}
              loggedIn={this.state.username}
              favRestaurants={this.state.favourites}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              cuisines={this.state.cuisines}
            />
          )}
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
          component={() => (
            <Favourites
              favourites={this.state.favourites}
              removeFav={this.removeFav}
            />
          )}
        />
        <Route exact path="/restaurants/:id" component={RestaurantShow} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

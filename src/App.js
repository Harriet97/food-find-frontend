import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import API from "./api";
import SignInForm from "./components/SignInForm";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    username: null
  };

  componentDidMount() {
    if (localStorage.token) {
      API.validate(localStorage.token).then(json =>
        this.signIn(json.username, json.token)
      );
    }
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
        <Home username={this.state.username} signOut={this.signOut} />
        <Route
          exact
          path="/sign-in"
          component={() => <SignInForm signIn={this.signIn} />}
        />
      </div>
    );
  }
}

export default App;

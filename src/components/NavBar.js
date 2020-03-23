import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

//Should recieve as props:
// logOut function
//

//Links needed:
// "/signup"
// "/login"
// "/" -> To redirect when logged out
// "/search" -> find a restaurant

class NavBar extends React.Component {
  signedIn = () => {
    return this.props.username ? (
      <Link onClick={this.props.logOut} to="/">
        {" "}
        Log Out{" "}
      </Link>
    ) : (
      <Link to="/sign-in">Sign In</Link>
    );
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://image.shutterstock.com/image-vector/find-restaurant-260nw-742543297.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="FoodFind Logo"
            />{" "}
            FoodFind
          </Link>{" "}
          <Link to="/"> Find a Restaurant </Link>
          {this.signedIn()}
        </Navbar.Brand>
      </Navbar>
    );
  }
}
export default NavBar;

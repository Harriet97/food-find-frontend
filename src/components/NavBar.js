import React from "react";
import { Button, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

//Links needed:
// "/search" -> find a restaurant

class NavBar extends React.Component {
  signedIn = () => {
    return this.props.username ? (
      <Menu.Item>
        <Link onClick={this.props.signOut} to="/">
          {" "}
          Sign Out{" "}
        </Link>
      </Menu.Item>
    ) : (
      <Menu.Item>
        <Link to="/sign-in">Sign In</Link>
      </Menu.Item>
    );
  };

  render() {
    return (
      <Menu
        fixed="top"
        style={{ padding: "8px" }}
        // inverted color="teal"
      >
        <Menu.Item color="teal">
          <Icon name="food" color="white" />
          <Link to="/">FoodFind</Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/favourites">Your Favourites</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/restaurants">Find a Restaurant</Link>
          </Menu.Item>
          {this.signedIn()}
        </Menu.Menu>
      </Menu>
    );
  }
}
export default NavBar;

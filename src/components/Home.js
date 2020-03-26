import React, { Component } from "react";
import RestaurantList from "./RestaurantList";
// import SortAndFilterOptions from "./SortAndFilterOptions";
// import Search from "./Search";

class Home extends Component {
  render() {
    return (
      <div style={{ padding: "70px" }}>
        <RestaurantList restaurants={this.props.restaurants} addFav={this.props.addFav} loggedIn={this.props.loggedIn} favRestaurants={this.props.favRestaurants} />
      </div>
    );
  }
}
export default Home;

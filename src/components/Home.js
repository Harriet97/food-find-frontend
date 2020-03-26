import React, { Component } from "react";
import RestaurantList from "./RestaurantList";
// import SortAndFilterOptions from "./SortAndFilterOptions";
import Search from "./Search";

class Home extends Component {
  state = {
    searchValue: ""
  };
  onChange = event => {
    const searchValue = event.target.value;
    this.setState({ searchValue });
  };
  render() {
    return (
      <div style={{ padding: "70px" }}>

        <Search onChange={this.onChange} />
        <RestaurantList
          restaurants={this.props.restaurants}
          addFav={this.props.addFav}
          loggedIn={this.props.loggedIn}
          favRestaurants={this.props.favRestaurants}
        />

        <RestaurantList restaurants={this.props.restaurants} addFav={this.props.addFav} loggedIn={this.props.loggedIn} favRestaurants={this.props.favRestaurants} />

      </div>
    );
  }
}
export default Home;

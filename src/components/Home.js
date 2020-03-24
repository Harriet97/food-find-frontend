import React, { Component } from "react";
// import restaurant_data from "../restaurant_demo_data";
import NavBar from "./NavBar";
import RestaurantList from "./RestaurantList";
import Footer from "./Footer";
// import SortAndFilterOptions from "./SortAndFilterOptions";
// import Search from "./Search";

class Home extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <NavBar username={this.props.username} signOut={this.props.signOut} />
        <RestaurantList restaurants={this.props.restaurants} />
        <Footer />
      </div>
    );
  }
}
export default Home;

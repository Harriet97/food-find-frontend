import React from "react";
import API from "../api";
import RestaurantShowPage from "./RestaurantShowPage";

class RestaurantShow extends React.Component {
  state = {
    restaurant: null
  };

  componentDidMount() {
    API.getRestaurant(this.props.match.params.id).then(data =>
      this.setState({
        restaurant: data
      })
    );
  }
  render() {
    console.log(this.state.restaurant);
    return this.state.restaurant ? (
      <RestaurantShowPage restaurant={this.state.restaurant} />
    ) : (
      <h1>LOADING...</h1>
    );
  }
}

export default RestaurantShow;

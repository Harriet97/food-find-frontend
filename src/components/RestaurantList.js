import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";
import { Card } from "semantic-ui-react";

class RestaurantList extends Component {
  generateRestaurantCards = () => {
    const { restaurants } = this.props;
    return restaurants.map(restaurant => (
      <RestaurantCard restaurant={restaurant} key={restaurant.id} />
    ));
  };
  render() {
    return (
      <Card.Group itemsPerRow={3}>{this.generateRestaurantCards()}</Card.Group>
    );
  }
}
export default RestaurantList;

import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";
import { Card } from "semantic-ui-react";

class RestaurantList extends Component {
  generateRestaurantCards = () => {
    const { restaurants } = this.props;
    console.log(restaurants);
    return restaurants.map(restaurant => (
      <RestaurantCard
        restaurant={restaurant.restaurant}
        key={restaurant.restaurant.id}
      />
    ));
  };
  render() {
    return (
      <Card.Group itemsPerRow={4}>{this.generateRestaurantCards()}</Card.Group>
    );
  }
}
export default RestaurantList;

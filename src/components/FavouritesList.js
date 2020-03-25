import React, { Component } from "react";
import FavouriteCard from "./FavouriteCard.js";
import { Card } from "semantic-ui-react";

class FavouritesList extends Component {
  generateFavouriteCards = () => {
    const { restaurants } = this.props;
    console.log(restaurants);
    return restaurants.map(restaurant => (
      <FavouriteCard
        restaurant={restaurant}
        key={restaurant.id}
      />
    ));
  };
  render() {
    return (
      <Card.Group itemsPerRow={4}>{this.generateFavouriteCards()}</Card.Group>
    );
  }
}
export default FavouritesList;